import { moviesApi } from "api";
import React from "react";
import MoviePresenter from "./MoviePresenter";

class MovieContainer extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    // 마운트가 되면 실행하는 함수, render() 이후 실행된다.
    try {
      // nowPlaying = data.results
      const {
        data: { results: nowPlaying },
      } = await moviesApi.noewPlaying();
      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();
      const {
        data: { results: popular },
      } = await moviesApi.popular();
      this.setState({
        nowPlaying,
        upcoming,
        popular,
      });
    } catch {
      this.setState({
        error: "Can't find movies information",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    console.log("Movie Re-render");
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <MoviePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}

export default MovieContainer;
