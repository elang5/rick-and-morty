import React from "react";
import { IEpisode } from "../interfaces/interfaces";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

export default function EpisodeList(props: any): JSX.Element[] {
  const { episodes, toggleFavAction, favorites, store } = props;
  const { state, dispatch } = store;
  return episodes.map((episode: IEpisode) => {
    return (
      <Card key={episode.id} className="episode-box">
        <a href={episode.url} target="_blank" rel="noopener noreferrer">
          <img
            src={episode.image === null ? "" : episode.image.medium}
            alt={`${episode.name}`}
          />
        </a>
        <div>{episode.name}</div>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            Season: {episode.season} Number: {episode.number}
          </div>
          <Button
            variant="contained"
            size="small"
            className="fav-button"
            onClick={() => toggleFavAction(state, dispatch, episode)}
          >
            {favorites.includes(episode) ? "Unfav" : "Fav"}
          </Button>
        </section>
      </Card>
    );
  });
}
