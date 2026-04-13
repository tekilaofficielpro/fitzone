import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";
import validator from "validator";

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Limiter les requêtes pour éviter les abus (ex: 5 requêtes par minute par IP)
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 1 minute
    max: 5, // Limite à 5 requêtes par IP
    message: 'Trop de requêtes, veuillez réessayer plus tard.',
});
app.use(limiter);


//Création du transporter SMTP pour envoyer des emails via Gmail

const transporteur = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

//Route pour envoyer un email de contact

app.post('/send', async(req, res) => {
    let { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Tous les champs sont requis.' });
    }

    // 2. Valider l'email
    if (!validator.isEmail(email)) {
        return res.status(400).json({ error: 'Email invalide' });
    }

    // 3. Limiter la taille des champs
    if (name.length > 100 || message.length > 2000) {
        return res.status(400).json({ error: 'Contenu trop long' });
    }

    // 4. Nettoyer le HTML pour éviter les injections
    name = validator.escape(name);
    message = validator.escape(message);

    try {
        await transporteur.sendMail({
            from: '"FitZone Contact" <' + process.env.EMAIL_USER + '>',
            to: process.env.EMAIL_TO,
            replyTo: email,
            subject: 'Nouveau message de contact de ' + name,
            text: `Vous avez reçu un nouveau message de ${name} (${email}):\n\n${message}`,
        });
        res.status(200).json({ success: true, message: 'Email envoyé avec succès.' });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        res.status(500).json({
            error: 'Une erreur est survenue lors de l\'envoi de l\'email.'
        })
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Serveur démarré sur le port ${process.env.PORT}`);
});