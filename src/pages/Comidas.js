import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import { getFirstRecipes } from '../services/funcs';

const Comidas = () => {
  const [info, setInfo] = useState([]);

  const getItens = async () => {
    const recipes = await getFirstRecipes('food');
    setInfo(recipes);
  };

  useEffect(() => {
    getItens();
  }, []);

  return (
    <div>
      <Cards info={ info } type="food" />
      <Footer />
    </div>
  );
};

export default Comidas;
