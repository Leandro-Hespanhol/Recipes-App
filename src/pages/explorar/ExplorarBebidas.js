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
    <>
      <Header title="Explore Drinks" singleRecipe />
      <div className="explorar-page">

        <Link to="/recipes-app/explorar/bebidas/ingredientes">
          <div className="explorar drink-ingredient">
            <h1>By Ingredient</h1>
          </div>
        </Link>

        <Link to={ `/recipes-app/bebidas/${randomCocktailId}` }>
          <div className="explorar imLucky-drink">
            <h1>I'm Lucky</h1>
          </div>
        </Link>

      </div>
      <Footer />
    </>
  );
}
