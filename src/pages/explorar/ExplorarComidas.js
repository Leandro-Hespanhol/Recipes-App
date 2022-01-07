import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function ExplorarBebidas() {
  const [randomMealId, setRandomMealId] = useState();

  useEffect(() => {
    const getRandomMeal = async () => {
      await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((res) => res.json())
        .then(({ meals }) => meals)
        .then((meal) => setRandomMealId(meal[0].idMeal));
    };
    getRandomMeal();
  }, []);

  return (
    <div>
      <Header title="Explorar Comidas" buttonDisable />
      <div className="explorar-page">

        <Link to="/recipes-app/explorar/comidas/ingredientes">
          <div className="explorar ex-food food-ingredint">
            <h1>By Ingredients</h1>
          </div>
        </Link>

        <Link to="/recipes-app/explorar/comidas/area">
          <div className="explorar ex-food area-location">
            <h1>By Origin</h1>
          </div>
        </Link>

        <Link to={ `/recipes-app/comidas/${randomMealId}` }>
          <div className="explorar ex-food imLucky-food">
            <h1>I'm Lucky!</h1>
          </div>
        </Link>

      </div>
      <Footer />
    </div>
  );
}
