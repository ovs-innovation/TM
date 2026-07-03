const nodemailer = require("nodemailer");

const sendEnquiry = async (req, res) => {
    try {
        const fullName = req.body.fullName || req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;
        const productName = req.body.productName || req.body.subject;
        const message = req.body.message;

        if (!fullName || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields.",
            });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.gmail.com",
            port: Number(process.env.SMTP_PORT || 587),
            secure: false,
            auth: {
                user: process.env.SMTP_USER || process.env.EMAIL_USER,
                pass: process.env.SMTP_PASS || process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.SMTP_USER || process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
            subject: `New Enquiry from ${fullName}`,
            html: `
        <h2>New Contact Enquiry</h2>

        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not Provided"}</p>
        <p><strong>Product:</strong> ${productName || "Not Provided"}</p>

        <h3>Message</h3>

        <p>${message}</p>
      `,
        });

        return res.status(200).json({
            success: true,
            message: "Enquiry sent successfully.",
        });
    } catch (error) {
        console.error("Enquiry Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to send enquiry.",
        });
    }
};

module.exports = {
    sendEnquiry,
};