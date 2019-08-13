import React from 'react';
import { Store } from './Store'
import { Link } from '@reach/router'
import './App.css';

function App(props: any): JSX.Element {
  const { state } = React.useContext(Store)

  return (
    <React.Fragment>
      <header className="header">
        <h1>Rick and Morty</h1>
        <p>What are your favorite episodes???</p>
        <nav className="nav" role="navigation">
          <Link to='/'>Home</Link>
          <Link to='/faves'>
            Favorite(s): {state.favorites.length}
          </Link>
        </nav>
      </header>
      {props.children}
    </React.Fragment>
  );
}

export default App;
