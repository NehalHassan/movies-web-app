import axios from 'axios';
import type { ApiMoviesListTypes, Movie } from '../types';

const apiKey = '4f298a53e552283bee957836a529baec';
const url = 'https://api.themoviedb.org/3';

export const fetchMovies = async ({ listType, page }: { listType?: ApiMoviesListTypes; page?: number }) => {
    const playingNowUrl = `${url}/movie/${listType ?? 'popular'}`;
    const posterUrl = 'https://image.tmdb.org/t/p/original/';

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
        console.log(error.response.data);
        throw new Error(error?.response?.data?.errors[0]);
    }
};
