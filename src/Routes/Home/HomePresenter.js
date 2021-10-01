import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "Components/Loader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Wrap = styled.div`
  overflow: hidden;
  overflow-x: hidden;
  width: 100%;

  .slick-prev {
    position: absolute;
    left: 0;
    z-index: 3;
  }

  .slick-prev:before {
    position: absolute;
    opacity: 1;
    color: white;
  }

  .slick-next:before {
    position: absolute;
    opacity: 1;
    color: white;
    right: 40px;
  }
  .slick-dots {
    position: absolute;
    bottom: 80px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
  }
  .slick-dots li button {
    font-size: 0;
    line-height: 0;

    display: block;

    width: 20px;
    height: 20px;
    padding: 5px;

    cursor: pointer;

    color: white;
    border: 0;
    outline: none;
    background: transparent;
  }
  .slick-dots li button:before {
    font-family: "slick";
    font-size: 6px;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    content: "•";
    text-align: center;

    opacity: 0.25;
    color: white;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: white;
  }
`;

const BackdropImage = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.bgImg});
  background-position: center center;
  background-size: cover;
  opacity: 1;
  z-index: 0;
`;

const PopularMovie = styled.div`
  position: absolute;
  top: 70px;
  left: 20px;
  font-size: 40px;
  font-weight: 900;
  z-index: 2;
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const PosterContainer = styled.div`
  position: absolute;
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  top: 350px;
  left: 40px;
  width: 50%;
  height: 50%;
`;

const Poster = styled.div`
  width: 300px;
  background-image: url(${(props) => props.bgImg});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 500px;
  border-radius: 5px;
  margin-left: 25px;
  z-index: 3;
  opacity: 1;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 15px;
  opacity: 0.9;
`;

const Overview = styled.div`
  font-size: 14px;
  opacity: 0.7;
  margin-bottom: 15px;
`;

const Data = styled.div`
  margin-left: 10px;
  width: 70%;
`;

const SLink = styled(Link)`
  font-size: 24px;
  font-weight: 900;
  color: white;
`;

const HomePresenter = ({ popular, error, loading }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | JongFlix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Wrap>
      <Helmet>
        <title>Home | JongFlix</title>
      </Helmet>
      <PopularMovie>POPULAR MOVIES</PopularMovie>
      <Slider {...settings}>
        {popular.map((item, index) => (
          <Container key={index}>
            <BackdropImage
              bgImg={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
            >
              <PosterContainer>
                <Poster
                  bgImg={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                ></Poster>
                <Data>
                  <Title>{item.title}</Title>
                  <Overview>{item.overview}</Overview>
                  <SLink to={`movie/${item.id}`}>MORE INFO?</SLink>
                </Data>
              </PosterContainer>
            </BackdropImage>
          </Container>
        ))}
      </Slider>
    </Wrap>
  );

HomePresenter.propTypes = {
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default React.memo(HomePresenter);
