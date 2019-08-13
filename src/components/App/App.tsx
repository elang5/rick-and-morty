import React from "react";
import { Store } from "../../Store";
import { Link } from "@reach/router";
import "./App.css";

function App(props: any): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  return (
    <React.Fragment>
      <header className="header">
        <h1>Favorite Episodes</h1>
        <nav className="nav" role="navigation">
          <Link to="/">Home</Link>
          <Link to="/faves">Favorite(s): {state.favorites.length}</Link>
        </nav>
      </header>
      {props.children}
    </React.Fragment>
  );
}

export default App;
