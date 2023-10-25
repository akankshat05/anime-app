import { useAnimeList } from "../hooks/useAnimeList";
import "./AnimeList.css";
import { Link } from "react-router-dom";

export const AnimeList = () => {
  const { loading, error, data } = useAnimeList();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div className="header">
        <h1>Anime Wikipedia</h1>
      </div>
      <div className="AnimeList">
        {data.Page.media.map((anime: any) => {
          return (
            <Link to={`anime/${anime.id}`}>
              <img src={anime.coverImage.large} alt={anime.title.romaji} />
              <h3>{anime.title.romaji}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
