import { useQuery, gql } from "@apollo/client";

const GET_ALL_ANIME = gql`
  query {
    Page {
      media {
        id
        title {
          romaji
        }
        coverImage {
          large
        }
      }
    }
  }
`;

export const useAnimeList = () => {
  const { error, loading, data } = useQuery(GET_ALL_ANIME);

  return {
    error,
    loading,
    data,
  };
};
