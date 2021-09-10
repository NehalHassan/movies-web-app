/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { useMedia } from 'react-media';
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { Link, useParams } from 'react-router-dom';

import { Theme, Colors } from '../theme';
import { Header } from '../components/header';
import { fetchMovies } from '../services';
import type { MovieCard as MovieCardType } from '../types';
import { MovieCard } from './movie-card';

export const MoviesHomePage = () => {
    const [state, setListState] = useState<'loading' | 'loaded' | 'failed'>('loading');
    const [moviesList, setMoviesList] = useState<MovieCardType[]>([]);

    const { listType } = useParams<any>();

    useEffect(() => {
        setListState('loading');
        fetchMovies({ listType: listType?.replace('-', '_') ?? undefined })
            .then((list) => {
                setMoviesList(list);
                setListState('loaded');
            })
            .catch(() => setListState('failed'));
    }, [listType]);

    return (
        <>
            <Header />
            <div css={{ display: 'flex', justifyContent: 'center' }}>
                <div css={{ width: Theme.maxPrimaryPageWidth, maxWidth: Theme.maxPrimaryPageWidth }}>
                    <div>filters & sort</div>
                    <div css={{ display: 'flex', flexWrap: 'wrap', margin: '0 8px' }}>
                        {state === 'loading' && <p>loading ... </p>}
                        {state === 'failed' && <p>opps something wrong happened ... </p>}
                        {state === 'loaded' && moviesList?.map((movie) => <MovieCard key={movie?.id} movie={movie} />)}
                    </div>
                </div>
            </div>
        </>
    );
};
