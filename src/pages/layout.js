import React, { useContext } from 'react';
import ThemeContext from './theme-context';

const Layout = () => {
  const themes = useContext(ThemeContext);
  return (
    <div style={themes}>
      <p>this is a component</p>
    </div>
  );
};

export default Layout;
