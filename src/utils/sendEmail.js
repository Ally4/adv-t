// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';

// dotenv.config();

// exports.sendEmail = async (mailOptions) => {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });
//   const Options = {
//     from: `Advertise App <${process.env.EMAIL}>`,
//     to: `${mailOptions.userEmail}`,
//     subject: mailOptions.subject,
//     html: mailOptions.message,
//   };
//   await transporter.sendMail(Options, (error) => {
//     if (error) {
//       return false;
//     }
//     return true;
//   });
// };
