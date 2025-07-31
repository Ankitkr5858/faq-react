import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import FAQ from './components/FAQ';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <FAQ />
      </div>
    </ThemeProvider>
  );
}

export default App;