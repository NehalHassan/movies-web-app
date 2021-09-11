import axios from 'axios';
import type { ApiMoviesListTypes, Movie } from '../types';

const apiKey = '4f298a53e552283bee957836a529baec';
const url = 'https://api.themoviedb.org/3';
const movieUrl = `${url}/movie`;
const posterUrl = 'https://image.tmdb.org/t/p/original/';

export const fetchMovies = async ({ listType, page }: { listType?: ApiMoviesListTypes; page?: number }) => {
    const playingNowUrl = `${url}/movie/${listType ?? 'popular'}`;

    try {
        const {
            data: { results }
        } = await axios.get(playingNowUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: page ?? 1
            }
        });
        const data = results.map((movie: Movie) => ({
            id: movie.id,
            backPoster: posterUrl + movie?.backdrop_path,
            popularity: movie?.popularity,
            title: movie?.title,
            poster: posterUrl + movie?.poster_path,
            overview: movie?.overview,
            rating: movie?.vote_average,
            releasedDate: movie?.release_date
        }));

        return data;
    } catch (error: any) {
        throw new Error(error?.response?.data?.errors[0]);
    }
};

export const fetchMovieById = async (movieId: string) => {
    try {
        const { data } = await axios.get(`${movieUrl}/${movieId}`, {
            params: {
                api_key: apiKey,
                language: 'en_US'
            }
        });

        return { ...data, backdrop_path: posterUrl + data.backdrop_path, poster_path: posterUrl + data.poster_path };
    } catch (error: any) {
        throw new Error(error?.response?.data?.errors[0]);
    }
};

export const fetchCastByMovieId = async (movieId: string) => {
    try {
        const {
            data: { cast }
        } = await axios.get(`${movieUrl}/${movieId}/credits`, {
            params: {
                api_key: apiKey,
                language: 'en_US'
            }
        });
        const data = cast.map((c: any) => ({
            ...c,
            id: c.cast_id,
            img: 'https://image.tmdb.org/t/p/w200' + c['profile_path']
        }));

        console.log(data);
        return data;
    } catch (error: any) {
        throw new Error(error?.response?.data?.errors[0]);
    }
};

export const fetchMovieKeyWordsByMovieId = async (movieId: string) => {
    try {
        const {
            data: { keywords }
        } = await axios.get(`${movieUrl}/${movieId}/keywords`, {
            params: {
                api_key: apiKey,
                language: 'en_US'
            }
        });
        return keywords;
    } catch (error: any) {
        throw new Error(error?.response?.data?.errors[0]);
    }
};
