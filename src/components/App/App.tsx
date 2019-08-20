import React from "react";
import { Store } from "../../Store";
import { Link } from "@reach/router";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";

function App(props: any): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <AppBar position="sticky" className="app-bar">
        <h1>Favorite Episodes</h1>
        <nav className="nav" role="navigation">
          <Link to="/">Home</Link>
          <Link to="/faves">Favorite(s): {state.favorites.length}</Link>
        </nav>
      </AppBar>
      {props.children}
    </React.Fragment>
  );
}

export default App;
