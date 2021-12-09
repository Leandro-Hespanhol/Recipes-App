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
      <body>

        <Link to="../explorar/comidas/ingredientes">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            Por Ingredientes
          </button>
        </Link>

        <Link to="../explorar/comidas/area">
          <button type="button" data-testid="explore-by-area">Por Local de Origem</button>
        </Link>

        <Link to={ `../comidas/${randomMealId}` }>
          <button type="button" data-testid="explore-surprise">Me Surpreenda!</button>
        </Link>

      </body>
      <Footer />
    </div>
  );
}
