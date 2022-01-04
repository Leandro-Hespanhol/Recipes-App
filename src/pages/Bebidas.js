/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import { getCategoriesItens, getFirstRecipes } from '../services/funcs';
import { myContext } from '../context/Provider';

const Bebidas = () => {
  const {
    category,
    recipes,
    filter,
    setRecipes,
  } = useContext(myContext);

  const getItens = async () => {
    const newRecipes = await getFirstRecipes('drinks');
    if (!filter) {
      setRecipes(newRecipes);
    }
  };

  const getNewRecipe = async () => {
    if (category === 'All' && !filter) {
      const newRecipes = await getFirstRecipes('drinks');
      setRecipes(newRecipes);
    } else if (!filter) {
      const newRecipes = await getCategoriesItens('drinks', category);
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
      <Header type="drinks" title="Bebidas" buttonDisable={ false } />
      <Categories type="drinks" />
      { recipes
        ? <Cards info={ recipes } type="drinks" />
        : alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')}
      <Footer />
    </div>
  );
};

export default Bebidas;
