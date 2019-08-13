import { IState, IEpisode, IAction } from "../interfaces/interfaces";

export const fetchDataAction = async (dispatch: any, searchTerm: string) => {
  try {
    const URL = `https://api.tvmaze.com/singlesearch/shows?q=${searchTerm}&embed=episodes`;
    const data = await fetch(URL);
    const dataJSON = await data.json();
    console.log(dataJSON);
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes
    });
  } catch (err) {
    return dispatch({
      type: "HANDLE_ERROR",
      payload: err.message
    });
  }
};

export const toggleFavAction = (
  state: IState,
  dispatch: any,
  episode: IEpisode | any
): IAction => {
  const episodeInFav = state.favorites.includes(episode);
  let dispatchObj = {
    type: "ADD_FAV",
    payload: episode
  };
  if (episodeInFav) {
    const favWithoutEpisode = state.favorites.filter(
      (fav: IEpisode) => fav.id !== episode.id
    );
    dispatchObj = {
      type: "REMOVE_FAV",
      payload: favWithoutEpisode
    };
  }
  return dispatch(dispatchObj);
};

export const updateSearchTerm = (
  state: IState,
  dispatch: any,
  searchTerm: string
): IAction => {
  return dispatch({
    type: "UPDATE_SEARCH",
    payload: searchTerm
  });
};
