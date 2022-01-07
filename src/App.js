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
import ExplorarIngredientes from './pages/explorar/ExplorarIngredientes';
import ExplorarComidasArea from './pages/explorar/ExplorarComidasArea';
import Comida from './pages/Comida';
import Bebida from './pages/Bebida';
import NotFound from './pages/NotFound';
import BebidaInProgress from './pages/BebidaInProgress';
import ComidaInProgress from './pages/ComidaInProgress';
import EditPerfil from './pages/editProfile';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/recipes-app/"
            component={ Login }
          />
          <Route
            exact
            path="/recipes-app/comidas"
            component={ Comidas }
          />
          <Route
            exact
            path="/recipes-app/comidas/:id"
            component={ Comida }
          />
          <Route
            exact
            path="/recipes-app/comidas/:id/in-progress"
            component={ ComidaInProgress }
          />
          <Route
            exact
            path="/recipes-app/bebidas/:id"
            component={ Bebida }
          />
          <Route
            exact
            path="/recipes-app/bebidas/:id/in-progress"
            component={ BebidaInProgress }
          />
          <Route
            exact
            path="/recipes-app/bebidas"
            component={ Bebidas }
          />
          <Route
            exact
            path="/recipes-app/perfil"
            component={ Perfil }
          />
          <Route 
            exact
            path="/recipes-app/edit-profile"
            component={ EditPerfil }
          />
          <Route
            exact
            path="/recipes-app/receitas-feitas"
            component={ ReceitasFeitas }
          />
          <Route
            exact
            path="/recipes-app/receitas-favoritas"
            component={ ReceitasFavoritas }
          />
          <Route
            exact
            path="/recipes-app/explorar"
            component={ Explorar }
          />
          <Route
            exact
            path="/recipes-app/explorar/comidas"
            component={ ExplorarComidas }
          />
          <Route
            exact
            path="/recipes-app/explorar/bebidas"
            component={ ExplorarBebidas }
          />
          <Route
            exact
            path="/recipes-app/explorar/comidas/ingredientes"
            render={ (props) => <ExplorarIngredientes { ...props } /> }
          />
          <Route
            exact
            path="/recipes-app/explorar/bebidas/ingredientes"
            render={ (props) => <ExplorarIngredientes { ...props } /> }
          />
          <Route
            exact
            path="/recipes-app/explorar/comidas/area"
            component={ ExplorarComidasArea }
          />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
