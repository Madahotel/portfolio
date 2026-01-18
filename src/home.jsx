import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./components/ui/Card";
import { Button } from "./components/ui/Button";
import { Globe, Code, Megaphone, CheckCircle, Phone, Mail } from "lucide-react";

export default function HWebMadaHome() {
  return (
    <div className="min-h-screen bg-gray-50 scroll-smooth">
      {/* NAVBAR */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="/logohwebmada.jpg"
              alt="HWeb Mada Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-xl font-bold text-indigo-700">
              HWeb Mada Agency
            </span>
          </div>

          <ul className="flex gap-6">
            <li><a href="#home" className="hover:text-indigo-500">Accueil</a></li>
            <li><a href="#services" className="hover:text-indigo-500">Services</a></li>
            <li><a href="#portfolio" className="hover:text-indigo-500">Réalisations</a></li>
            <li><a href="#contact" className="hover:text-indigo-500">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-28 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              HWeb Mada — Développez votre présence en ligne
            </h1>
            <p className="text-lg mb-6 text-blue-100">
              Création de sites web • WordPress • E‑commerce • Marketing digital
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button className="rounded-2xl">Demander un devis</Button>
              <Button variant="outline" className="rounded-2xl text-white border-white">
                Voir nos réalisations
              </Button>
            </div>
          </div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 rounded-2xl p-6 shadow-lg text-center flex justify-center"
          >
            <img
              src="/ekipa.jpg"
              alt="Présentation HWeb Mada"
              className="rounded-2xl w-3/5 h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

        </motion.div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nos services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard icon={<Globe />} title="Création de sites web" desc="Sites vitrines, sites d'entreprise, design moderne et responsive." />
          <ServiceCard icon={<Code />} title="WordPress & E‑commerce" desc="Boutiques en ligne, gestion des produits, paiements sécurisés." />
          <ServiceCard icon={<Megaphone />} title="Marketing digital" desc="Pages Facebook, publicité, SEO, calendrier éditorial." />
        </div>
      </section>

      {/* PORTFOLIO / RÉALISATIONS */}
      <section id="portfolio" className="bg-gray-100 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Nos réalisations</h2>
        <p className="text-center text-gray-600 mb-12">Quelques projets déjà livrés à nos clients</p>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <PortfolioCard title="FormaFusion Madagascar" url="https://mg.formafusion.io" desc="Plateforme de formation en ligne" />
          <PortfolioCard title="Trezo Cash" url="https://trezo.cash" desc="Solution financière digitale" />
          <PortfolioCard title="JADE MDG" url="https://jademdg.com" desc="Site vitrine d'entreprise" />
          <PortfolioCard title="Access Infos" url="https://accessinfos.com" desc="Site d'actualités et informations" />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contactez-nous</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <form className="bg-white p-8 rounded-2xl shadow-md flex flex-col gap-4">
            <input type="text" placeholder="Nom" className="border p-2 rounded" required />
            <input type="email" placeholder="Email" className="border p-2 rounded" required />
            <textarea placeholder="Message" className="border p-2 rounded" rows={5} required />
            <Button type="submit" className="rounded-2xl">Envoyer</Button>
          </form>
          <div className="flex flex-col justify-center gap-4">
            <div className="flex items-center gap-2"><Phone className="text-indigo-700" /> 034 86 503 55</div>
            <div className="flex items-center gap-2"><Mail className="text-indigo-700" /> contact@hwebmada.com</div>
            <p>Vous pouvez également nous contacter via WhatsApp ou nos réseaux sociaux.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} HWeb Mada — Tous droits réservés
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-6 text-center">
          <div className="flex justify-center mb-4 text-indigo-600">{icon}</div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{desc}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function PortfolioCard({ title, url, desc }) {
  return (
    <motion.a href={url} target="_blank" rel="noopener noreferrer" whileHover={{ y: -6 }} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
      <div className="h-32 bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center text-white font-semibold">
        Aperçu du site
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 flex-1">{desc}</p>
        <span className="text-indigo-600 text-sm font-medium">Visiter le site →</span>
      </div>
    </motion.a>
  );
}
