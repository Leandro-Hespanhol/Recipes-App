import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import '../../css/explorar.css';
import { GiCookingPot } from 'react-icons/gi';
import { BiDrink } from 'react-icons/bi';


export default function Explorar() {
  return (
    <>
      <Header title="Explore" singleRecipe />
      <div className="explorar-page">
        <Link to="/recipes-app/explorar/comidas">
          <div className="explorar food">
            <GiCookingPot />
            <h1>Explore Foods</h1>
          </div>
        </Link>
        <Link to="/recipes-app/explorar/bebidas">
          <div className="explorar drink">
            <BiDrink />
            <h1>Explore Drinks</h1>
          </div>
        </Link>
      </div>
      <Footer />
    </>
  );
}
