import React from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";
import HeaderSimple from "../headerSimple";
import MyLightBox from "../MyLightBox";
import RootLayout from "../layout";

const Travaux = () => {
  const images = [
    { src: "photo-maconnerie1.png", alt: "Description 1" },
    { src: "photo-maconnerie2.png", alt: "Description 2" },
    { src: "photo-maconnerie3.png", alt: "Description 3" },
  ];

  const pageTitle = "Travaux divers";
  const pageDescription =
    "Petits travaux de maçonnerie, mur en pierre, parpaings, brique, allée, pavés pierre, pavés autobloquant, petite dalle, terrasse";

  const maconnerieParagraph = (
    <p className="text-lg mb-4">
      Nous sommes spécialisés dans une variété de petits travaux de maçonnerie qui peuvent transformer l&apos;aspect de votre espace extérieur. Que ce soit la construction de murs en pierre, en parpaings, ou en brique, nous avons l&apos;expertise pour réaliser des structures solides et esthétiquement agréables.
    </p>
  );

  const facadeParagraph = (
    <p className="text-lg mb-4">
      Le ravalement de façade est un service essentiel pour maintenir l&apos;apparence et l&apos;intégrité de votre bâtiment. Nous offrons des solutions de ravalement de façade qui améliorent l&apos;esthétique tout en protégeant la structure contre les intempéries.
    </p>
  );

  const alleesParagraph = (
    <p className="text-lg mb-4">
      Pour vos allées, nous proposons la réalisation d&apos;allées en béton, la pose de pavés en pierre naturelle ou de pavés autobloquants. Chaque option est conçue pour répondre à vos besoins esthétiques et fonctionnels.
    </p>
  );

  const dallesParagraph = (
    <p className="text-lg mb-4">
      Les petits travaux de dalles en béton, que ce soit pour une terrasse ou une petite surface, font partie de nos compétences. Nous assurons une mise en place soignée et durable pour vos espaces extérieurs.
    </p>
  );

  const actionsTravaux = [
    "Construction de murs en pierre, parpaings, et brique",
    "Ravalement de façade pour améliorer l&apos;esthétique",
    "Réalisations d&apos;allées en béton, pavés en pierre, et pavés autobloquants",
    "Petits travaux de dalles en béton pour terrasses et surfaces extérieures",
  ];

  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />
      <HeaderSimple />

      <section className="container mx-auto mt-8 p-4 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">{pageTitle}</h1>

        {maconnerieParagraph}
        {facadeParagraph}
        {alleesParagraph}
        {dallesParagraph}

        <h2 className="text-2xl font-bold mb-2">Liste des Actions :</h2>
        <ul className="list-disc ml-8">
          {actionsTravaux.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>
      </section>

      <MyLightBox images={images} />

      <Footer />
    </RootLayout>
  );
};

export default Travaux;
