import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;
// 쿼리 작성 방법

export default () => {
  const { loading, data } = useQuery(GET_MOVIES);
  //   쿼리 사용 방법
  if (loading) {
    return "loading...";
  }
  if (data && data.movies) {
    return data.movies.map((m) => <h1>{m.id}</h1>);
  }
};
