import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popular: null,
      error: null,
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      let {
        data: { results: popular },
      } = await moviesApi.popular();
      this.setState({
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
    const { popular, error, loading } = this.state;
    return <HomePresenter popular={popular} error={error} loading={loading} />;
  }
}

export default HomeContainer;
