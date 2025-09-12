// server.js
const cors = require("cors");
const allowedOrigins = [
  "http://localhost:3000",             // local React dev
  "https://mahadevan10.github.io"      // your deployed frontend
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like curl or Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"), false);
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
try {
  if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
} catch (e) {
  
}

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors()); // Allow requests from frontend
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).send("Missing fields");

  // Configure your SMTP transporter (use environment variables for security)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // your email
      pass: process.env.EMAIL_PASS, // your app password
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER, // your email
      subject: "Portfolio Contact Form",
      text: message,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p>${message}</p>`,
    });
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send("Failed to send email");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));