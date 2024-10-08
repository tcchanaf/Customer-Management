import React, { useState } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import AppRouter from './Router';
import './App.css'; // Optional, for custom styles

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <main className="content">
        <AppRouter />
      </main>
    </div>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);


export default AppWithRouter;
