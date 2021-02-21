import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

exports.sendEmail= async (mailOptions)  => {
    
    const transporter = nodemailer.createTransport({
        // host: 'smtp.mail.yahoo.com',
        // port: 465,
        service: 'gmail',
        // secure: false,
        auth: {
            user : process.env.EMAIL,
            pass : process.env.EMAIL_PASSWORD
        },
        // debug: false,
        // logger: true 
    });
    const Options = {
        from: `Advertise App <${process.env.EMAIL}>`,
        to: `${mailOptions.userEmail}`,
        subject: mailOptions.subject,
        html: mailOptions.message
    }
    await transporter.sendMail(Options, (error) => {
        if (error) {
            return false
        } else {
            return true
        }
    })
}
