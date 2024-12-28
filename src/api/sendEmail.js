// api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, company, serviceInterest, message } = req.body;

    // Setup transporter for email sending (using Gmail here, change as necessary)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Add your email here
        pass: process.env.EMAIL_PASS, // Add your email password or app password
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.RECIPIENT_EMAIL, // Replace with your recipient email
      subject: `Demo Request from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company}
        Service Interest: ${serviceInterest}
        Message: ${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
