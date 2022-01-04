import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { getFavoriteRecipes } from '../services/funcs';
import DoneCards from '../components/DoneCards';

export default function ReceitasFavoritas() {
  const [info, setInfo] = useState([]);
  const [filter, setFilter] = useState('All');

  const getInfo = () => {
    const favoriteRecipes = getFavoriteRecipes();
    setInfo(favoriteRecipes);
  };

  const changeFilter = () => {
    const favoriteRecipes = getFavoriteRecipes();
    if (filter !== 'All') {
      const newInfo = favoriteRecipes.filter(({ type }) => type === filter);
      setInfo(newInfo);
    } else {
      getInfo();
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    changeFilter();
  }, [filter]);

  return (
    <div>
      <Header title="Receitas Favoritas" buttonDisable />
      <button
        data-testid="filter-by-all-btn"
        type="button"
        onClick={ () => setFilter('All') }
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        type="button"
        onClick={ () => setFilter('comida') }
      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
        onClick={ () => setFilter('bebida') }
      >
        Drinks
      </button>
      <div>
        { !!info.length && <DoneCards setInfo={ setInfo } info={ info } /> }
      </div>
    </div>
  );
}
