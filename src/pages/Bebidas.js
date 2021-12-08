import React, { useState, useEffect } from 'react';
import { getFirstRecipes } from '../services/funcs';
import Categories from '../components/Categories';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

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
      <Categories updateInfo={ setInfo } type="drinks" />
      <Cards info={ info } type="drinks" />
      <Footer />
    </div>
  );
}
