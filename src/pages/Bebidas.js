import React, { useState, useEffect } from 'react';
import { getFirstRecipes } from '../services/funcs';
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
    <div>
      <Cards info={ info } type="drinks" />
      <Footer />
    </div>
  );
}
