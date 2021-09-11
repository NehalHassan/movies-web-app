/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router';

import { fetchMovieById } from '../services';
import { Movie as MovieInterface } from '../types';
import { Colors, Theme } from '../theme';
import { MovieHeader } from './movie-header';
import { MoviePageProvider } from './movie-page-context';

const Main = styled.main({
    display: 'flex',
    width: 'calc(100vw - 80px)',
    maxWidth: Theme.maxPrimaryPageWidth,
    margin: 40,
    '@media screen and (max-width: 910px)': {
        flexFlow: 'column'
    }
});

export const Movie = () => {
    const { id } = useParams<{ id: string }>();

    const [movie, setMovieData] = useState<MovieInterface | null>(null);
    const [state, setListState] = useState<'loading' | 'loaded' | 'failed'>('loading');

    useEffect(() => {
        setListState('loading');
        fetchMovieById(id)
            .then((movie) => {
                setMovieData(movie);
                setListState('loaded');
            })
            .catch(() => setListState('failed'));
    }, [id]);

    console.log(movie);

    return (
        <>
            {state === 'loading' && <p>loading ... </p>}
            {state === 'failed' && <p>opps something wrong happened ... </p>}
            {state === 'loaded' && movie && (
                <MoviePageProvider value={movie}>
                    <MovieHeader />
                    <Main>
                        <section>actors</section>
                        <aside>info</aside>
                    </Main>
                </MoviePageProvider>
            )}
        </>
    );
};
