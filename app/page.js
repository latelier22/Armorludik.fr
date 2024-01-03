import React from 'react';
import Link from 'next/link';
import RootLayout from './layout';
import Navbar from './NavBar';
import HeaderSimple from './headerSimple';
import Footer from './Footer';
import Image from './Image';
import Title from './Title';


const Home = () => {
  // Dynamic metadata for the home page
  const pageTitle = 'Accueil';
  const pageDescription = 'Bienvenue sur le site d&apos;Armor LudiK - repaire des p&apos;tits loups';

const myTitle = "REPAIRE DES P'TITS LOUPS"
const mySubTitle ="SALLE DE JEU POUR ENFANT"

  const backgroundColor ="bg-orange-500";


  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />
      <Title myTitle={myTitle ==='' ? pageTitle : myTitle} mySubTitle={mySubTitle ==='' ? pageDescription : mySubTitle} backgroundColor={backgroundColor}/>
      <Image/>
      <Footer backgroundColor ={backgroundColor}/>
    </RootLayout>
  );
};

export default Home;
