import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import Perfil from './pages/Perfil';
import ReceitasFeitas from './pages/ReceitasFeitas';
import ReceitasFavoritas from './pages/ReceitasFavoritas';
import Explorar from './pages/explorar/Explorar';
import ExplorarComidas from './pages/explorar/ExplorarComidas';
import ExplorarBebidas from './pages/explorar/ExplorarBebidas';
import ExplorarBebidasIngredientes from './pages/explorar/ExplorarBebidasIngredientes';
import ExplorarComidasIngredientes from './pages/explorar/ExplorarComidasIngredientes';
import ExplorarComidasArea from './pages/explorar/ExplorarComidasArea';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/comidas" component={ Comidas } />
          <Route exact path="/bebidas" component={ Bebidas } />
          <Route exact path="/perfil" component={ Perfil } />
          <Route exact path="/receitas-feitas" component={ ReceitasFeitas } />
          <Route exact path="/receitas-favoritas" component={ ReceitasFavoritas } />
          <Route exact path="/explorar" component={ Explorar } />
          <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
          <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
          <Route exact path="/explorar/comidas/ingredientes" component={ ExplorarComidasIngredientes } />
          <Route exact path="/explorar/bebidas/ingredientes" component={ ExplorarBebidasIngredientes } />
          <Route exact path="/explorar/comidas/area" component={ ExplorarComidasArea } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
