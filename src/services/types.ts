export enum ApiMoviesListTypes {
    popular = 'popular',
    topRated = 'top_rated',
    upComing = 'upcoming',
    playingNow = 'now_playing'
}

export interface Movie {
    poster_path?: string | null;
    adult?: boolean;
    overview?: string;
    release_date?: string;
    genre_ids?: number[];
    id?: number;
    original_title?: string;
    original_language?: string;
    title?: string;
    backdrop_path?: string | null;
    popularity?: number;
    vote_count?: number;
    video?: boolean;
    vote_average?: number;
}

export type MovieCard = {
    id: string;
    backPoster: string;
    popularity: number;
    title: string;
    poster: string;
    overview: string;
    rating: number;
    releasedDate: string;
};
