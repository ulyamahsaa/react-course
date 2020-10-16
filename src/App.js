import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './header';
import routes from './config/routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                path={route.path}
                component={route.component}
                key={route.path}
              />
            );
          })}
          ;
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
