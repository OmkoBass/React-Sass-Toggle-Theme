import './styles/scss/main.scss';

import Button from 'components/button';
import Navbar from 'components/navbar';
import Paper from 'components/paper';
import React, { useContext } from 'react';

import { ThemeContext } from './context/ThemeContext';

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={theme === 'dark' ? 'dark' : 'light'}>
      <Navbar />
      <div className="layout-center-mid-column background">
        <h1 className="text"> Hello World </h1>

        <Paper>
          <h1 className="text"> Paper man</h1>
        </Paper>

        <Button
          label="Click me"
          color=""
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
      </div>
    </div>
  );
}

export default App;
