import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { formSender, formEmail, formMessage } = req.body;

  if (!formSender || !formEmail || !formMessage) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const port = Number(process.env.SMTP_PORT);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${formSender}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      replyTo: formEmail,
      subject: `Wiadomość od ${formSender} z 99foto.pl`,
      text: `Imię: ${formSender}\nEmail: ${formEmail}\n\n${formMessage}`,
      html: `<p><strong>Imię:</strong> ${formSender}</p><p><strong>Email:</strong> ${formEmail}</p><p>${formMessage}</p>`,
    });
  } finally {
    transporter.close();
  }

  return res.status(200).json({ message: "Wysłano" });
}
