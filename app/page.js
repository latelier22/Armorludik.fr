import React from 'react';
import Link from 'next/link';
import RootLayout from './layout';
import Navbar from './NavBar';
import HeaderSimple from './headerSimple';
import Footer from './Footer';
import Image from './Image';


const Home = () => {
  // Dynamic metadata for the home page
  const pageTitle = 'Accueil';
  const pageDescription = 'Bienvenue sur le site de PRO COUVERTURE LOUDEAC';


  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />
      <Image/>
      <Footer />
    </RootLayout>
  );
};

export default Home;
