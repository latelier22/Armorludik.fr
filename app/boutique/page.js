import React from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";
import RootLayout from "../layout";
import dynamic from "next/dynamic";
import Title from "../Title";
import Cards from "../Cards";
import Card from "../Card";

const DynamicCarousel = dynamic(() => import("../MyCarousel"), {
  ssr: false,
});

const Reparation = () => {
  const pageTitle = "Boutique";
  const pageDescription =
    "Découvrez tous les jeux et jouets pour petits et grands...";


// Déclarer les photos dans un tableau d'objets
const photos = [
  {  },
 
];


const cards = [
  { title: "CARTES DE JEU", text: "Cartes Magic, le deuxième jeu de carte le plus popolulaire au monde", button : "COMMANDEZ !" ,
  url: "carte-jeux.jpg", alt: "Cartes Magic, le deuxième jeu de carte le plus popolulaire au monde"},
  { title: "CARTES DE JEU", text: "Cartes Magic, le deuxième jeu de carte le plus popolulaire au monde", button : "COMMANDEZ !" ,
  url: "carte-jeux.jpg", alt: "Cartes Magic, le deuxième jeu de carte le plus popolulaire au monde"},
  { title: "CARTES DE JEU", text: "Cartes Magic, le deuxième jeu de carte le plus popolulaire au monde", button : "COMMANDEZ !" ,
  url: "carte-jeux.jpg", alt: "Cartes Magic, le deuxième jeu de carte le plus popolulaire au monde"},
 
];

  

  const backgroundColor = 'bg-teal-500'

  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />
      <Title myTitle={pageTitle} mySubTitle={pageDescription} backgroundColor={backgroundColor}/>
      

      <div className="bg-teal-200">
        <Cards cards={cards} buttonColor={backgroundColor} />
      </div>
{/* <div className="flex flex-row justify-center">
      <section className="flex flex-row justify-around container  mt-8 p-4 bg-gray-100">
      <Card photo={photos[0]} card={cards[0]}/>
      <Card photo={photos[0]} card={cards[0]}/>
      <Card photo={photos[0]} card={cards[0]}/>
       
      </section>
      </div> */}
      {/* <section className="container mx-auto mt-8 p-4 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Images de Nos Réparations</h2>
         <DynamicCarousel images={images} /> 
      </section> */}

      <Footer backgroundColor={backgroundColor} />
    </RootLayout>
  );
};

export default Reparation;
