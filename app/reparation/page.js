import React from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";
import RootLayout from "../layout";
import dynamic from "next/dynamic";

const DynamicCarousel = dynamic(() => import("../MyCarousel"), {
  ssr: false,
});

const Reparation = () => {
  const pageTitle = "Réparation";
  const pageDescription =
    "Réparation des toitures, remplacement des tuiles, ardoises, tôles";

  const images = [
    { src: "photo-maconnerie1.png", alt: "Description 1" },
    { src: "photo-maconnerie2.png", alt: "Description 2" },
    { src: "photo-maconnerie3.png", alt: "Description 3" },
  ];

  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />

      <section className="container mx-auto mt-8 p-4 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Réparation des Toitures</h1>

        <p className="text-lg mb-4">
          La réparation des toitures est une étape cruciale pour garantir la
          durabilité et l&apos;intégrité de votre toit. Nous offrons des services de
          réparation complets pour répondre à divers besoins.
        </p>

        <p className="text-lg mb-4">
          Que ce soit le remplacement des tuiles, des ardoises, ou des tôles,
          notre équipe expérimentée s&apos;engage à fournir des solutions de qualité
          pour assurer la protection de votre maison.
        </p>

        <h2 className="text-2xl font-bold mb-2">Tâches Possibles:</h2>
        <ul className="list-disc ml-8">
          <li>Remplacement des tuiles endommagées</li>
          <li>Réparation des fuites de toit</li>
          <li>Remplacement des ardoises défectueuses</li>
          <li>Entretien général de la toiture</li>
          {/* Ajoutez d&apos;autres tâches au besoin */}
        </ul>
      </section>

      <section className="container mx-auto mt-8 p-4 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Images de Nos Réparations</h2>
        {/* <DynamicCarousel images={images} /> */}
      </section>

      <Footer />
    </RootLayout>
  );
};

export default Reparation;
