import React, { useEffect, useContext } from 'react';
import Categories from '../components/Categories';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import { getFirstRecipes } from '../services/funcs';
import { myContext } from '../context/Provider';

const Comidas = () => {
  const {
    recipes,
    setRecipes,
  } = useContext(myContext);

  const getItens = async () => {
    const newRecipes = await getFirstRecipes('food');
    setRecipes(newRecipes);
  };

  useEffect(() => {
    getItens();
  }, []);

  return (
    <div>
      <Categories type="food" />
      <Cards info={ recipes } type="food" />
      <Footer />
    </div>
  );
};

export default Comidas;
