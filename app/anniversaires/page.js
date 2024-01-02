import React from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";
import HeaderSimple from "../headerSimple";
import RootLayout from "../layout";

const Fuite = () => {
  const pageTitle = "Fuite de toit";
  const pageDescription =
    "Votre toiture présente une fuite ou une fissure ? Il est impératif d&apos;agir rapidement pour éviter des dommages plus importants. Notre équipe est disponible 7 jours sur 7, 24 heures sur 24, pour intervenir en cas d&apos;urgence. Nous proposons des solutions rapides et efficaces, y compris la pose de bâche en urgence, la mise hors d&apos;eau prioritaire, et le remplacement des tuiles, ardoises, et toles défectueuses.";

  const actionsFuite = [
    "Intervention rapide en cas de tempête ou de fuite de toiture",
    "Pose urgente de bâche pour prévenir les infiltrations d&apos;eau",
    "Mise hors d&apos;eau prioritaire pour minimiser les dégâts",
    "Remplacement immédiat des tuiles, ardoises, et toles endommagées",
    "Service disponible 7 jours sur 7, 24 heures sur 24",
  ];

  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />

      <HeaderSimple />

      <section className="container mx-auto mt-8 p-4 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">{pageTitle}</h1>

        <p className="text-lg mb-4">
          Votre toiture est exposée aux intempéries et peut subir des dommages au fil du temps. Une fuite ou une fissure peut causer des problèmes importants tels que des infiltrations d&apos;eau, des dégâts structurels, et même des problèmes d&apos;isolation. Il est crucial d&apos;agir rapidement pour minimiser les conséquences. Chez [Votre Entreprise], nous comprenons l&apos;urgence de la situation et nous sommes prêts à intervenir rapidement pour résoudre les problèmes liés à la fuite de toit.
        </p>

        <p className="text-lg mb-4">
          En cas de tempête ou de détection d&apos;une fuite, notre équipe est disponible 7 jours sur 7, 24 heures sur 24. Nous proposons une gamme de services visant à prévenir et à résoudre les problèmes liés aux fuites de toiture. Nos actions prioritaires incluent la pose immédiate de bâche pour prévenir les infiltrations d&apos;eau, la mise hors d&apos;eau rapide pour minimiser les dégâts potentiels, et le remplacement immédiat des éléments défectueux tels que les tuiles, les ardoises, et les toles.
        </p>

        <h2 className="text-2xl font-bold mb-2">Actions en cas de fuite :</h2>
        <ul className="list-disc ml-8">
          {actionsFuite.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>
      </section>

      <Footer />
    </RootLayout>
  );
};

export default Fuite;
