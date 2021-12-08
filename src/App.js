import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Bebidas from './pages/Bebidas';
import Provider from './context/Provider';
import Comidas from './pages/Comidas';
import Explorar from './pages/Explorar';
import Login from './pages/Login';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/comidas" component={ Comidas } />
          <Route path="/bebidas" component={ Bebidas } />
          <Route path="/explorar" component={ Explorar } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

/*
<div className="meals">
      <span className="logo">TRYBE</span>
      <object
        className="rocksGlass"
        type="image/svg+xml"
        data={ rockGlass }
      >
        Glass
      </object>
    </div>
*/
