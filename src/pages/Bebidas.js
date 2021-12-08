import React, { useState, useEffect } from 'react';
import { getFirstRecipes } from '../services/funcs';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cards from '../components/Cards';

export default function Bebidas() {
  const [info, setInfo] = useState([]);

  const getItens = async () => {
    const recipes = await getFirstRecipes('drinks');
    setInfo(recipes);
  };

  useEffect(() => {
    getItens();
  }, []);

  return (
    <>
      <Header title="Bebidas" buttonDisable={ false } />
      <Cards info={ info } type="drinks" />
      <Footer />
    </>
  );
}
