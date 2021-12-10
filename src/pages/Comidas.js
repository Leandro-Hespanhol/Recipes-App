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
    setRecipes,
  } = useContext(myContext);

  const getItens = async () => {
    const newRecipes = await getFirstRecipes('food');
    setRecipes(newRecipes);
  };

  const getNewRecipe = async () => {
    if (category === 'All') {
      getItens();
      return;
    }
    const newRecipes = await getCategoriesItens('food', category);
    setRecipes(newRecipes);
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
      <Categories getItens={ getItens } type="food" />
      { recipes
        ? <Cards info={ recipes } type="food" />
        : alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')}
      <Footer />
    </div>
  );
};

export default Comidas;
