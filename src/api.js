import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_TOKEN}`,
  },
});

// 상대 경로 사용에 유의! 절대 경로를 쓰게 되면 baseURL을 덮어씌우게된다.

export const moviesApi = {
  noewPlaying: () => api.get('movie/now_playing'),
  upcoming: () => api.get('movie/upcoming'),
  popular: () => api.get('movie/popular'),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  search: (term) =>
    api.get('search/movie', {
      params: {
        query: term,
      },
    }),
};

export const tvApi = {
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/popular'),
  airingToday: () => api.get('tv/airing_today'),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  search: (term) =>
    api.get('search/tv', {
      params: {
        query: term,
      },
    }),
};
