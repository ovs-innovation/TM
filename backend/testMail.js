require("dotenv").config();

const sendEmail = require("./utils/sendEmail");

(async () => {
    try {
        await sendEmail({
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: "Nodemailer Test",
            html: "<h1>🎉 Nodemailer is working successfully!</h1>",
        });

        console.log("✅ Email sent successfully");
    } catch (err) {
        console.error("❌ Error sending email:", err);
    }
})();