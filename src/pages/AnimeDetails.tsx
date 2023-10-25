import React from "react";
import { useParams } from "react-router";
import { useAnimeDetails } from "../hooks/useAnime";
import "./AnimeDetails.css";
import { Params } from "react-router-dom";

export const AnimeDetails = () => {
  const { id } = useParams<Params>();
  const parsedAnimeId: number = id ? parseInt(id, 10) : 0;

  const { loading, error, data } = useAnimeDetails(parsedAnimeId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const anime = data.Media;

  return (
    <div className="Anime">
      <img src={anime.coverImage.large} alt={anime.title.romaji} />
      <div className="Anime-content">
        <h2>{anime.title.romaji}</h2>
        <p>{anime.description}</p>
        <p>
          Start Date: {anime.startDate.year}-{anime.startDate.month}-
          {anime.startDate.day}
        </p>
        <p>Episodes: {anime.episodes}</p>
        <p>Genres: {anime.genres.join(", ")}</p>
        <p>
          Studios:{" "}
          {anime.studios.edges.map((edge: any) => edge.node.name).join(", ")}
        </p>
      </div>
    </div>
  );
};
