require('dotenv').config()
import nodemailer from 'nodemailer'

export default async function sendEmail(req, res) {

    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });
    try {
      const emailRes = await transporter.sendMail({
        sender: email,
        from: email,
        to: 'pipo.m.ajdin@gmail.com',
        subject: subject,
        html: `<p>Email sent from ${name}</p>
          <p>Email: ${email}</p>
          <p>Subject: ${subject}</p>
          <p>Message: ${message}</p>
        `
      })
      
    } catch (error) {
      return res.status(200).json({message: error.message})
    }
    return res.status(200).json({message: 'Email sent successfully'})
}

