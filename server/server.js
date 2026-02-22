import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
  const { fullName, email, weddingDate, message } = req.body;

  // Gmail SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "an.photography.matrimoni@gmail.com",     
      pass: "GoogleDriveMemorija!2023"      
    }
  });

  let mailOptions = {
    from: "an.photography.matrimoni@gmail.com",
    replyTo: email,
    to: "an.photography.matrimoni@gmail.com",          
    subject: `Nova poruka od ${fullName}`,
    text: `Datum: ${weddingDate}\nPoruka: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Poruka poslata:", mailOptions)
    res.status(200).send("Poruka poslata!");
  } catch (err) {
    console.error(err);
    console.error("Greška pri slanju:", err);
    res.status(500).send("Greška pri slanju.");
  }
});

app.listen(3001, () => console.log("Server radi na portu 3001"));
