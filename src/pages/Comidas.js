/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import { getCategoriesItens, getFirstRecipes } from '../services/funcs';
import { myContext } from '../context/Provider';

const Comidas = () => {
  const {
    category,
    recipes,
    filter,
    setRecipes,
  } = useContext(myContext);

  const getItens = async () => {
    const newRecipes = await getFirstRecipes('food');
    if (!filter) {
      setRecipes(newRecipes);
    }
  };

  const getNewRecipe = async () => {
    if (category === 'All' && !filter) {
      const newRecipes = await getFirstRecipes('food');
      setRecipes(newRecipes);
    } else if (!filter) {
      const newRecipes = await getCategoriesItens('food', category);
      setRecipes(newRecipes);
    }
  };

  useEffect(() => {
    getItens();
  }, []);

  useEffect(() => {
    getNewRecipe();
  }, [category]);

  return (
    <div>
      <Header type="food" title="Comidas" buttonDisable={ false } />
      <Categories type="food" />
      { recipes && <Cards info={ recipes } type="food" /> }
      <Footer />
    </div>
  );
};

export default Comidas;
