// app/api/send-email/route.js

/*
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server'; // Importe NextResponse

export async function POST(req, res) { // La fonction s'appelle POST et prend 'req'
  const data = await req.json(); // Récupère les données du corps de la requête
  const { name, email, companyWebsite, companySize, message } = data;

  // Créer un transporteur pour envoyer l'e-mail (tu auras besoin de configurer ton service d'e-mail ici)
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Remplace par ton service d'e-mail (par exemple, 'Outlook', 'Yahoo')
    auth: {
      user: 'riccardotresors@gmail.com', // Ton adresse e-mail
      pass: 'Fame237Mag@', // Ton mot de passe (ou un mot de passe d'application si tu utilises Gmail)
    },
  });

  const mailOptions = {
    from: email, // L'e-mail de la personne qui a rempli le formulaire
    to: 'riccardotresors@gmail.com', // L'adresse où tu veux recevoir les formulaires
    subject: 'Nouveau message de contact',
    text: `Nom: ${name}\nEmail: ${email}\nSite web de l'entreprise: ${companyWebsite}\nTaille de l'entreprise: ${companySize}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'E-mail envoyé avec succès!' }, { status: 200 }); // Utilise NextResponse
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Erreur lors de l'envoi de l'e-mail." }, { status: 500 }); // Utilise NextResponse
  }
} */
