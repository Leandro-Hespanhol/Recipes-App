import React, { useContext, useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Cards from '../../components/Cards';
import { getFirstRecipes } from '../../services/funcs';
import { myContext } from '../../context/Provider';

export default function ExplorarComidasArea() {
  const { setRecipes, recipes } = useContext(myContext);
  const [areas, setAreas] = useState('');
  const [filter, setFilter] = useState('All');

  const getAreas = async () => {
    const apiResponse = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      .then((res) => res.json())
      .then(({ meals }) => meals);
    setAreas(apiResponse);
  };

  const renderDropdown = () => {
    const options = areas.map(({ strArea }) => (
      <option
        value={ strArea }
        data-testid={ `${strArea}-option` }
        key={ strArea }
        onClick={ () => setFilter(strArea) }
      >
        { strArea }
      </option>
    ));

    return (
      <select
        value={ filter }
        onChange={ ({ target: { value } }) => setFilter(value) }
        data-testid="explore-by-area-dropdown"
      >
        <option
          value="All"
          data-testid="All-option"
        >
          All
        </option>
        { options }
      </select>
    );
  };

  const filterItens = async () => {
    if (filter !== 'All') {
      const AreaRe = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${filter}`)
        .then((res) => res.json())
        .then(({ meals }) => meals);
      console.log(AreaRe);
      setRecipes(AreaRe.slice(0, +'12'));
    } else {
      const newRecipes = await getFirstRecipes('food');
      setRecipes(newRecipes);
    }
  };

  useEffect(() => {
    getAreas();
  }, []);

  useEffect(() => {
    filterItens();
  }, [filter]);

  return (
    <div>
      <Header title="Explore by origin" singleRecipe />
      <div className="dropdown-container">
        { !!areas.length && renderDropdown() }
      </div>
      <div>
        { !!recipes.length && <Cards info={ recipes } type="food" /> }
      </div>
      <Footer />
    </div>
  );
}
