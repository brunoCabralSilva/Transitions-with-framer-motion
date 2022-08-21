import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return(
    <nav>
      <Link to="/home" className="navigation">Início</Link>
      <span>|</span>
      <Link to="/content" className="navigation">Conteúdo</Link>
      <span>|</span>
      <Link to="/contact" className="navigation">Contato</Link>
    </nav>
  );
}