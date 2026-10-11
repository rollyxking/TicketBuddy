import { EMAIL_RE, checkChallenge } from "./_lib.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed." });

  const email = String(req.body?.email || "").trim().toLowerCase();
  const code = String(req.body?.code || "").trim();
  const token = String(req.body?.token || "");
  if (!EMAIL_RE.test(email) || !/^\d{6}$/.test(code)) {
    return res.status(400).json({ error: "Enter the 6-digit code from your email." });
  }

  let result;
  try {
    result = checkChallenge(email, code, token);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: "Email verification isn't set up on the server yet." });
  }

  if (result === "expired") return res.status(400).json({ error: "That code has expired. Request a new one." });
  if (result !== "ok") return res.status(400).json({ error: "That code isn't right. Check it and try again." });
  return res.status(200).json({ verified: true });
}
