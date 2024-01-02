import React from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";
import RootLayout from "../layout";
import HeaderSimple from "../headerSimple";

const Entretien = () => {
  const pageTitle = "Entretien";
  const pageDescription =
    "Entretien et nettoyage des toitures, murs, démoussage, suppression du vert des toitures, remplacement des tuiles, ardoises";

  const entretienActions = [
    "Démoussage de la toiture",
    "Nettoyage des murs extérieurs",
    "Suppression du vert des toitures",
    "Remplacement des tuiles endommagées",
    "Remplacement des ardoises défectueuses",
  ];

  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />

      

      <section className="container  mx-auto m-8 p-4 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Entretien et Nettoyage</h1>

        <p className="text-lg mb-4">
          L&apos;entretien régulier et le nettoyage des toitures sont essentiels pour
          maintenir la durabilité et l&apos;aspect esthétique de votre maison. Notre
          équipe propose des services complets d&apos;entretien, de démoussage et de
          nettoyage pour répondre à vos besoins spécifiques.
        </p>

        <p className="text-lg mb-4">
          Que vous ayez besoin de supprimer la mousse, d&apos;éliminer le vert des
          toitures ou de remplacer des tuiles et ardoises endommagées, nous
          sommes là pour assurer la longévité de votre toit.
        </p>
        </section>

        <HeaderSimple />

        <section className="container mx-auto m-8 p-4 bg-gray-100">
        <h2 className="text-2xl font-bold mb-2">Actions d&apos;Entretien:</h2>
        <ul className="list-disc ml-8">
          {entretienActions.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>

        {/* Ajoutez d'autres informations spécifiques à l'entretien */}
      </section>

      <Footer />
    </RootLayout>
  );
};

export default Entretien;
