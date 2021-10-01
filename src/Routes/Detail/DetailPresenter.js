import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Helmet from "react-helmet";
import ReactPlayer from "react-player";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 16px;
  opacity: 0.7;
  line-height: 1.5;
  width: 100%;
  margin-bottom: 100px;
`;

const IMDbLink = styled.a`
  background-color: #e2b616;
  color: #000000;
  padding: 4px;
  font-size: 16px;
  font-weight: 800;
  border-radius: 5px;
`;

const Tap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: rgba(20, 20, 20, 0.8);
  height: 30px;
`;

const List = styled.ul`
  display: flex;
`;

const TabItem = styled.li`
  width: 80px;
  height: 30px;
  text-align: center;
  border-bottom: 3px solid
    ${(props) => (props.current ? "white" : "transparent")};
  cursor: pointer;
  transition: border-bottom 0.5s ease-in-out;
`;

const Tabname = styled.div`
  height: 30px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TabContent = styled.div`
  width: 100%;
  height: 70%;
  margin-top: 20px;
`;

const VideoContainer = styled.div`
  display: ${(props) => (props.current ? "flex" : "none")};
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    height: 8px;
    width: 5px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 6px;
  }
`;

const VideoContent = styled.div`
  margin-right: 20px;
`;

const ProductionContainer = styled.div`
  display: ${(props) => (props.current ? "flex" : "none")};
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    height: 8px;
    width: 5px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 6px;
  }
`;

const ProductionContent = styled.div`
  margin-right: 20px;
  text-align: center;
`;

const ProductionLogo = styled.div`
  background-image: url(${(props) => props.bgImg});
  background-size: contain;
  background-repeat: no-repeat;
  height: 180px;
  width: 180px;
  background-position: center center;
  margin-bottom: 8px;
`;

const CollectionContainer = styled.div`
  display: ${(props) => (props.current ? "flex" : "none")};
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    height: 8px;
    width: 5px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 6px;
  }
`;

const CollectionContent = styled.div`
  margin-right: 20px;
  text-align: center;
`;

const CollectionLogo = styled.div`
  background-image: url(${(props) => props.bgImg});
  height: 180px;
  width: 120px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  margin-bottom: 8px;
`;

const SeasonContent = styled.div`
  margin-right: 20px;
  text-align: center;
`;

const SeasonLogo = styled.div`
  background-image: url(${(props) => props.bgImg});
  height: 180px;
  width: 120px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  margin-bottom: 8px;
`;

const Empty = styled.div`
  width: 100%;
  height: 8px;
`;

const DetailPresenter = ({
  result,
  error,
  loading,
  choiceTab,
  changeTab,
  isMovie,
}) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | JongFlix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <Message color="#e74c3c" />
  ) : (
    <Container>
      <Helmet>
        <title>{result.title ? result.title : result.name} | JongFlix</title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.png").default
          }
        />
        <Data>
          <Title>{result.title ? result.title : result.name}</Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime || result.episode_run_time ? (
                <>{result.runtime || result.episode_run_time[0]} min</>
              ) : (
                "Null"
              )}
              <></>
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
            <Item>
              {result.production_countries.length > 0 && (
                <>
                  <Divider>•</Divider>
                  {result.production_countries[0].name}
                </>
              )}
            </Item>
            <Item>
              {result.imdb_id && (
                <>
                  <Divider>•</Divider>
                  <IMDbLink
                    href={`https://imdb.com/title/${result.imdb_id}`}
                    target="_blank"
                  >
                    IMDb
                  </IMDbLink>
                </>
              )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          <Tap>
            <List>
              <TabItem
                current={choiceTab === "Trailer"}
                onClick={() => changeTab("Trailer")}
              >
                <Tabname>Trailers</Tabname>
              </TabItem>
              <TabItem
                current={choiceTab === "Production"}
                onClick={() => changeTab("Production")}
              >
                <Tabname>Productions</Tabname>
              </TabItem>
              <TabItem
                current={choiceTab === "Collections"}
                onClick={() => changeTab("Collections")}
              >
                <Tabname>{isMovie ? "Collections" : "Seasons"}</Tabname>
              </TabItem>
            </List>
          </Tap>
          <TabContent>
            <VideoContainer current={choiceTab === "Trailer"}>
              {result.videos.results.length > 0 &&
                result.videos.results.map((video, index) => (
                  <VideoContent key={index}>
                    <ReactPlayer
                      url={`https://youtu.be/${video.key}`}
                      controls
                      width={480}
                      height={272}
                    />
                    <Empty></Empty>
                  </VideoContent>
                ))}
            </VideoContainer>
            <ProductionContainer current={choiceTab === "Production"}>
              {result.production_companies.length > 0 &&
                result.production_companies.map((production, index) => (
                  <ProductionContent key={index}>
                    <>
                      <ProductionLogo
                        bgImg={
                          production.logo_path
                            ? `https://image.tmdb.org/t/p/w300${production.logo_path}`
                            : require("../../assets/noimage.jpg").default
                        }
                      ></ProductionLogo>
                      {production.name}
                    </>
                    <Empty></Empty>
                  </ProductionContent>
                ))}
            </ProductionContainer>
            <CollectionContainer current={choiceTab === "Collections"}>
              <>
                {isMovie ? (
                  <>
                    {result.belongs_to_collection && (
                      <CollectionContent>
                        <CollectionLogo
                          bgImg={
                            result.belongs_to_collection.poster_path
                              ? `https://image.tmdb.org/t/p/w300${result.belongs_to_collection.poster_path}`
                              : require("../../assets/noimage.jpg").default
                          }
                        ></CollectionLogo>
                        {result.belongs_to_collection.name}
                        <Empty></Empty>
                      </CollectionContent>
                    )}
                  </>
                ) : (
                  <>
                    {result.seasons.length > 0 &&
                      result.seasons.map((season, index) => (
                        <SeasonContent key={index}>
                          <SeasonLogo
                            bgImg={
                              season.poster_path
                                ? `https://image.tmdb.org/t/p/w300${season.poster_path}`
                                : require("../../assets/noimage.jpg").default
                            }
                          ></SeasonLogo>
                          {season.name}
                          <Empty></Empty>
                        </SeasonContent>
                      ))}
                  </>
                )}
              </>
            </CollectionContainer>
          </TabContent>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default React.memo(DetailPresenter);
