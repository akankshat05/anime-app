import { useQuery, gql } from "@apollo/client";

const GET_ANIME_DETAILS = gql`
  query GetAnimeDetails($animeId: Int!) {
    Media(id: $animeId) {
      title {
        romaji
      }
      coverImage {
        large
      }
      description
      startDate {
        year
        month
        day
      }
      episodes
      genres
      studios(isMain: true) {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`;

export const useAnimeDetails = (animeId: number) => {
  const { error, data, loading } = useQuery(GET_ANIME_DETAILS, {
    variables: { animeId },
  });
  return {
    error,
    data,
    loading,
  };
};
