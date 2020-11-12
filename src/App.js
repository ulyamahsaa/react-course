import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './header';
import routes from './config/routes';
import ThemeContext from './pages/theme-context';

function App() {
  const [theme, setTheme] = useState(ThemeContext);
  return (
    <>
      <ThemeContext.Provider value={[theme, setTheme]}>
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
      </ThemeContext.Provider>
    </>
  );
}

export default App;
