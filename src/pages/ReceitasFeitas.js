import React, { useEffect, useState } from 'react';
import DoneCards from '../components/DoneCards';
import Header from '../components/Header';
import { getDoneRecipes } from '../services/funcs2';

export default function ReceitasFeitas() {
  const [info, setInfo] = useState([]);
  const [filter, setFilter] = useState('All');

  const getItens = () => {
    const localItens = getDoneRecipes();
    setInfo(localItens);
  };

  const changeFilter = () => {
    const localItens = getDoneRecipes();
    if (filter !== 'All') {
      const newInfo = localItens.filter(({ type }) => type === filter);
      setInfo(newInfo);
    } else {
      setInfo(localItens);
    }
  };

  const renderItens = () => (
    <div>
      <DoneCards info={ info } />
    </div>
  );

  useEffect(() => {
    getItens();
  }, []);

  useEffect(() => {
    changeFilter();
  }, [filter]);

  return (
    <div>
      <Header title="Receitas Feitas" buttonDisable />
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
      { !!info.length && renderItens() }
    </div>
  );
}
