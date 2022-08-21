import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Content from './pages/Content';
import Nav from './components/Nav';
import './App.css';

export default function App() {
  const location = useLocation();
  return (
    <div className="app">
      <Nav />
      <div
        className="background-image"
      />
      <AnimateSharedLayout>
      <AnimatePresence>
      <Switch location={location} key={location.key}>
        <Route path="/home" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/content" component={Content} />
      </Switch>
      </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
}
