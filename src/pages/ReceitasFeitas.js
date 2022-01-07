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
    <div className="cards-container">
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
      <Header title="Finished Recipes" singleRecipe />
      <div className="categories-buttons" >
        <button
          data-testid="filter-by-all-btn"
          type="button"
          className={ `${filter === 'All' ? 'category-active': ''}` }
          onClick={ () => setFilter('All') }
        >
          All
        </button>
        <button
          data-testid="filter-by-food-btn"
          type="button"
          className={ `${filter === 'comida' ? 'category-active': ''}` }
          onClick={ () => setFilter('comida') }
        >
          Food
        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
          className={ `${filter === 'bebida' ? 'category-active': ''}` }
          onClick={ () => setFilter('bebida') }
        >
          Drinks
        </button>
      </div>
      { !!info.length && renderItens() }
    </div>
  );
}
