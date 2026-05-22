const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { Resend } = require("resend");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/contact", async (req, res) => {
  try {
    const {
      prenom,
      nom,
      email,
      sujet,
      message,
    } = req.body;

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "akeleonyannickdonovane@gmail.com",
      subject: sujet,

      reply_to: email,
      html: `
        <h2>Nouveau message depuis le portfolio</h2>

        <p><strong>Prénom :</strong> ${prenom}</p>

        <p><strong>Nom :</strong> ${nom}</p>

        <p><strong>Email :</strong> ${email}</p>

        <p><strong>Message :</strong></p>

        <p>${message}</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Email envoyé avec succès ✅",
      data,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: "Erreur lors de l'envoi ❌",
    });
  }
});

app.listen(5000, () => {
  console.log("Serveur lancé sur http://localhost:5000");
});