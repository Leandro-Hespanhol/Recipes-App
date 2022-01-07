/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getCategories, getFirstRecipes } from '../services/funcs';
import { myContext } from '../context/Provider';

const Categories = ({ type }) => {
  const { category, setCategory, setFilter, setRecipes } = useContext(myContext);
  const [info, setInfo] = useState([]);

  const getInfo = async () => {
    const itens = await getCategories(type);
    setInfo(itens);
  };

  const changeCategory = async (newCategory) => {
    setFilter('');
    if (category !== newCategory) {
      setCategory(newCategory);
    } else {
      setCategory('All');
    }
  };

  const renderItens = () => {
    const elements = info.map(({ strCategory }) => (
      <button
        data-testid={ `${strCategory}-category-filter` }
        key={ strCategory }
        className={ `${category === strCategory ? 'category-active': ''}` }
        type="button"
        onClick={ () => changeCategory(strCategory) }
      >
        { strCategory }
      </button>
    ));
    return elements;
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="categories-buttons">
      <button
        data-testid="All-category-filter"
        type="button"
        className={ `${category === 'All' ? 'category-active': ''}` }
        onClick={ async () => {
          setFilter('');
          setCategory('All');
          const newRecipes = await getFirstRecipes(type === 'food' ? 'food' : 'drinks');
          setRecipes(newRecipes);
        } }
      >
        All
      </button>
      { !!info.length && renderItens() }
    </div>
  );
};

export default Categories;

Categories.propTypes = {
  type: PropTypes.string.isRequired,
};
