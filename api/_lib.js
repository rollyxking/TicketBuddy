import crypto from "node:crypto";

// Codes are stateless: the server hands the browser a signed token, and later
// re-computes the signature from the code the user typed. Nothing is stored.
const TTL_MS = 10 * 60 * 1000;

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function secret() {
  const s = process.env.CODE_SECRET;
  if (!s || s.length < 16) throw new Error("CODE_SECRET is missing or shorter than 16 characters");
  return s;
}

const sign = (email, exp, nonce, code) =>
  crypto.createHmac("sha256", secret()).update(`${email}|${exp}|${nonce}|${code}`).digest("base64url");

export function createChallenge(email) {
  const code = String(crypto.randomInt(0, 1_000_000)).padStart(6, "0");
  const exp = Date.now() + TTL_MS;
  const nonce = crypto.randomBytes(8).toString("hex");
  return { code, token: `${exp}.${nonce}.${sign(email, exp, nonce, code)}` };
}

export function checkChallenge(email, code, token) {
  const [exp, nonce, sig] = String(token || "").split(".");
  if (!exp || !nonce || !sig) return "invalid";
  if (!(Number(exp) > Date.now())) return "expired";
  const a = Buffer.from(sig);
  const b = Buffer.from(sign(email, exp, nonce, code));
  return a.length === b.length && crypto.timingSafeEqual(a, b) ? "ok" : "invalid";
}
