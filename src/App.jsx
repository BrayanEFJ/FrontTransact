import React from 'react';
import NavBar from './components/NavBar';
import AppRoutes from './routes/AppRoutes';
import "./index.css"
import "./i18n.js";

const App = () => {
  return (
    <div className="App">
      <main>
        <AppRoutes />
      </main>
    </div>
  );
};

export default App;