/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/funcs';
import { myContext } from '../context/Provider';

const Categories = ({ type }) => {
  const { category, setCategory } = useContext(myContext);
  const [info, setInfo] = useState([]);

  const getInfo = async () => {
    const itens = await getCategories(type);
    setInfo(itens);
  };

  const changeCategory = async (newCategory) => {
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
    <div>
      <button
        data-testid="All-category-filter"
        type="button"
        onClick={ () => setCategory('All') }
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
