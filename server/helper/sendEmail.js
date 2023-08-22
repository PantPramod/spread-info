import nodemailer from "nodemailer";

async function sendMail(sender, password, receiver, token) {
    try {
        let transporter = nodemailer.createTransport({
            service:"gmail",
            auth: {
                user: sender,
                pass: password,
            }, 
            tls : {
                rejectUnauthorized : false
            }
        });

     
        let info = await transporter.sendMail({ 
            from: sender,
            to: receiver,
            subject: "Email Verification",
            text: `Send Email`,
            html: `<a style="background:blue; color:white; padding:4px 8px"; display:block; border-radius:6px"  href="https://spreadcard.netlify.app/verifyemail?token=${token}"> verify Email</a>`,
        });

        console.log("Message sent: %s", info.messageId);

    } catch (err) {
        console.log(err)
    }

}

export default sendMail