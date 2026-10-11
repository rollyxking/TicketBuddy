import { EMAIL_RE, createChallenge } from "./_lib.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed." });

  const email = String(req.body?.email || "").trim().toLowerCase();
  if (email.length > 254 || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: "Enter a valid email address." });
  }

  let challenge;
  try {
    challenge = createChallenge(email);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: "Email verification isn't set up on the server yet." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Local development without an email provider: print the code in the terminal.
    if (process.env.VERCEL) {
      console.error("RESEND_API_KEY is not set");
      return res.status(500).json({ error: "Email verification isn't set up on the server yet." });
    }
    console.log(`\n[dev] Verification code for ${email}: ${challenge.code}\n`);
    return res.status(200).json({ token: challenge.token });
  }

  const from = process.env.MAIL_FROM || "TicketBuddy <onboarding@resend.dev>";
  const html = `<div style="font-family:Arial,sans-serif;max-width:420px;margin:auto">
  <h2 style="margin:0 0 12px">Your TicketBuddy code</h2>
  <p>Enter this code to finish signing in:</p>
  <p style="font-size:32px;letter-spacing:8px;font-weight:700;margin:16px 0">${challenge.code}</p>
  <p style="color:#666;font-size:13px">It expires in 10 minutes. If you didn't try to sign in, you can ignore this email.</p>
</div>`;

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [email],
        subject: `${challenge.code} is your TicketBuddy verification code`,
        html,
        text: `Your TicketBuddy verification code is ${challenge.code}. It expires in 10 minutes.`,
      }),
    });
    if (!r.ok) {
      console.error("Resend error:", r.status, await r.text());
      return res.status(502).json({ error: "We couldn't send the email. Please try again in a moment." });
    }
  } catch (err) {
    console.error("Resend request failed:", err.message);
    return res.status(502).json({ error: "We couldn't send the email. Please try again in a moment." });
  }

  return res.status(200).json({ token: challenge.token });
}
