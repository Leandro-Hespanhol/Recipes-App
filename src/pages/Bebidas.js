/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { getFirstRecipes, getCategoriesItens } from '../services/funcs';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import { myContext } from '../context/Provider';

export default function Bebidas() {
  const {
    category,
    recipes,
    setRecipes,
  } = useContext(myContext);

  const getItens = async () => {
    const newRecipes = await getFirstRecipes('drinks');
    setRecipes(newRecipes);
  };

  const getNewRecipe = async () => {
    if (category === 'All') {
      getItens();
      return;
    }
    const newRecipes = await getCategoriesItens('drinks', category);
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
      {recipes
      && recipes.length === 1 && <Redirect to={ `/bebidas/${recipes[0].idDrink}` } />}
      <Header type="drinks" title="Bebidas" buttonDisable={ false } />
      <Categories getItens={ getItens } type="drinks" />
      {recipes
        ? <Cards info={ recipes } type="drinks" />
        : alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')}
      <Footer />
    </div>
  );
}
