/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router';

import { fetchMovieById } from '../services';
import { Movie as MovieInterface } from '../types';
import { Colors, Theme } from '../theme';

const Poster = styled.div(({ img }: { img: string }) => ({
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${img})`,
    height: 510,
    width: '100%',
    zIndex: 1
}));

const GradiantBG = styled.div({
    height: 510,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(to right, rgb(3 37 65) 150px, rgba(82.35%, 78.43%, 77.25%, 0.84) 100%)'
});

const PosterImageContainer = styled.div({
    minWidth: 300,
    width: 300,
    height: 450,
    borderRadius: 8,
    overflow: 'hidden'
});

const Details = styled.div({});
const Bullet = styled.span({
    height: 4,
    width: 4,
    borderRadius: '50%',
    backgroundColor: Colors.white,
    display: 'inline-flex',
    margin: '0 6px'
});

const convertFromMinutesToHours = (time: number) => {
    const hours = Math.floor(time / 60);
    const minutes = hours >= 1 ? time - hours * 60 : time;

    return { hours, minutes };
};

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

    const getMovieRunTimeInHours = () => {
        const { hours, minutes } = convertFromMinutesToHours(movie?.runtime ?? 0);
        return `${hours ? hours + 'h' : ''} ${minutes}m`;
    };

    return (
        <>
            {state === 'loading' && <p>loading ... </p>}
            {state === 'failed' && <p>opps something wrong happened ... </p>}
            {state === 'loaded' && (
                <Poster img={movie?.backdrop_path ?? ''}>
                    <GradiantBG>
                        <div
                            css={{
                                width: Theme.maxPrimaryPageWidth,
                                maxWidth: Theme.maxPrimaryPageWidth,
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <PosterImageContainer>
                                <img src={movie?.poster_path ?? ''} width="100%" height="100%" alt={movie?.title} />
                            </PosterImageContainer>

                            <Details css={{ margin: '0 32px', color: Colors.white }}>
                                <h1>{movie?.title}</h1>

                                <p css={{ display: 'flex', alignItems: 'center' }}>
                                    <span>{movie?.release_date}</span>

                                    {movie?.production_countries[0]['iso_3166_1'] && (
                                        <span>({movie?.production_countries[0]['iso_3166_1']})</span>
                                    )}

                                    {movie?.genres?.length && <Bullet />}

                                    {movie?.genres?.length &&
                                        movie?.genres?.map((genre, i) => <span key={genre.id}>{genre.name},</span>)}

                                    {movie?.runtime && <Bullet />}

                                    <span>{getMovieRunTimeInHours()}</span>
                                </p>
                                <div>MovieRate</div>

                                <div css={{ marginTop: 32 }}>
                                    <h3
                                        css={{
                                            margin: 0,
                                            color: '#ffffff9c',
                                            fontWeight: 500,
                                            fontStyle: 'italic',
                                            fontSize: 16
                                        }}
                                    >
                                        {movie?.tagline}
                                    </h3>
                                    <h4 css={{ margin: '8px 0' }}>overflow</h4>
                                    <p css={{ margin: 0 }}>{movie?.overview}</p>
                                </div>
                            </Details>
                        </div>
                    </GradiantBG>
                </Poster>
            )}
        </>
    );
};
