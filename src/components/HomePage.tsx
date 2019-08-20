import React from "react";
import { Store } from "../Store";
import { IEpisodeProps } from "../interfaces/interfaces";
import {
  fetchDataAction,
  toggleFavAction,
  updateSearchTerm
} from "../actions/Actions";
import TextField from "@material-ui/core/TextField";

type FormElem = React.FormEvent<HTMLFormElement>;

const EpisodeList = React.lazy<any>(() => import("./EpisodeList"));

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store);
  let inputRef: any = React.createRef();

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch, state.searchTerm);
  });

  const handleSubmit = (e: FormElem) => {
    e.preventDefault();
    fetchDataAction(dispatch, state.searchTerm);
    inputRef.current = "";
  };

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favorites: state.favorites
  };

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className="search">
          <form onSubmit={e => handleSubmit(e)}>
            <div className="search-container">
              <h2>
                Enter your favorite TV show to add your favorite episodes:
              </h2>
              <TextField
                label="Search"
                className="search-input"
                type="text"
                inputRef={inputRef}
                onChange={() =>
                  updateSearchTerm(dispatch, inputRef.current.value)
                }
              />{" "}
            </div>
          </form>
        </section>
        <section className="episode-layout">
          {state.error ? <p>{state.error}</p> : <EpisodeList {...props} />}
        </section>
      </React.Suspense>
    </React.Fragment>
  );
}
