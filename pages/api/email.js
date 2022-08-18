require('dotenv').config()
import nodemailer from 'nodemailer'
import {google} from 'googleapis'

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
)
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN })

// export default async function sendMail(req, res) {
//   const { name, email, subject, message } = req.body

//   try {
//     const accessToken = await oAuth2Client.getAccessToken()
//     const transport = nodemailer.createTransport({
//         service: 'gmail',
//         port: 465,
//         secure: true,
//         auth: {
//           type: 'oauth2',
//           user: process.env.USER,
//           clientId: process.env.CLIENT_ID,
//           clientSecret: process.env.CLIENT_SECRET,
//           refreshToken: process.env.REFRESH_TOKEN,
//           accessToken: accessToken.token
//         }
//       })
      
//       const mailOptions = {
//         from: `PORTFOLIO ${email}`,
//         to: [process.env.MY_MAIL, process.env.USER],
//         subject: subject,
//         text: 'New message',
//         html: `<h1>Message from: ${name}</h1>
//           <h4>Message:</h4>
//           <p>${message}</p>
//         `,
//       };
  
//       // const result = transport.sendMail(mailOptions, err => {
//       //   if (err) {
//       //     return res.status(500).json({ message: err.message })
//       //   }
//       // });

//       transport.sendMail(mailOptions)
//       return res.status(200).json({ message: 'Email sent successfully!' })

//   } catch (err) {
//     return res.status(500).json({ message: err.message })
//   }
  
// }


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
        from: `PORTFOLIO ${email}`,
        to: [process.env.MY_MAIL, process.env.USER],
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

