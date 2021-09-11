/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { useMedia } from 'react-media';
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { Theme, Colors } from '../theme';
import type { MovieCard as MovieCardType } from '../types';
import { MovieRate } from '../components/movie-rate';

const Card = styled.div({
    width: 180,
    height: 390,
    background: Colors.white,
    borderRadius: 12,
    display: 'flex',
    flexFlow: 'column',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0, 0, 0, .1)'
});

const Image = styled.div(({ url }: { url: string }) => ({
    height: 270,
    boxShadow: '0 0 10px 1px rgba(0,0,0,0.1)',
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}));

const MovieDateText = styled.span({
    color: Colors.gray,
    fontSize: 14,
    marginTop: 4
});

const MovieTitle = styled.h2({
    margin: 0,
    fontSize: 16,
    display: '-webkit-box',
    '-webkit-line-clamp': '3',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    '&:hover': {
        color: Colors.tmdbLightBlue
    }
});
export const MovieCard = ({ movie }: { movie: MovieCardType }) => {
    return (
        <Link to={`/movie/${movie.id}`} css={{ margin: 8, textDecoration: 'none', color: Colors.tmdbDarkBlue }}>
            <Card>
                <Image url={movie.poster} title={movie?.title} />

                <div css={{ position: 'relative', padding: '24px 12px 12px' }}>
                    <div css={{ position: 'absolute', top: '-17px' }}>
                        <MovieRate rate={movie.rating * 10} />
                    </div>

                    <div css={{ display: 'flex', flexFlow: 'column' }}>
                        <MovieTitle title={movie?.title}>{movie?.title}</MovieTitle>
                        <MovieDateText>{movie?.releasedDate}</MovieDateText>
                    </div>
                </div>
            </Card>
        </Link>
    );
};
