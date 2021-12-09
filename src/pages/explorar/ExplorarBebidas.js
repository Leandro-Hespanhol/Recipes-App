import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function ExplorarBebidas() {
  const [randomCocktailId, setRandomCocktailId] = useState();

  useEffect(() => {
    const getRandomCocktail = async () => {
      await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then((res) => res.json())
        .then(({ drinks }) => drinks)
        .then((drink) => setRandomCocktailId(drink[0].idDrink));
    };
    getRandomCocktail();
  }, []);

  return (
    <div>
      <Header title="Explorar Bebidas" buttonDisable />
      <body>

        <Link to="../explorar/bebidas/ingredientes">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            Por Ingredientes
          </button>
        </Link>

        <Link to={ `../bebidas/${randomCocktailId}` }>
          <button type="button" data-testid="explore-surprise">Me Surpreenda!</button>
        </Link>

      </body>
      <Footer />
    </div>
  );
}
