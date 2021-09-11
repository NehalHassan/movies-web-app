/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';

import { Colors, Theme } from '../theme';
import { useMoviePageContext } from './movie-page-context';

const Poster = styled.div(({ img }: { img: string }) => ({
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${img})`,
    height: 510,
    width: '100%',
    zIndex: 1,
    '@media screen and (max-width: 910px)': {
        height: 'fit-content'
    }
}));

const GradiantBG = styled.div({
    height: 510,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(128deg, rgb(3 37 65) 150px, rgba(82.35%, 78.43%, 77.25%, 0.84) 100%)',
    '@media screen and (max-width: 910px)': {
        height: 'fit-content',
        backgroundImage: 'linear-gradient(138deg, rgb(3 37 65) 150px, rgba(82.35%, 78.43%, 77.25%, 0.84) 100%)'
    }
});

const PosterImageContainer = styled.div({
    minWidth: 300,
    width: 300,
    height: 450,
    borderRadius: 8,
    overflow: 'hidden',
    '@media screen and (max-width: 910px)': {
        width: 200,
        height: 350
    },
    '@media screen and (max-width: 520px)': {
        width: 150,
        height: 300
    }
});

const Details = styled.div({
    margin: '0 32px',
    color: Colors.white,
    '@media screen and (max-width: 910px)': {
        margin: '32px 0 0'
    }
});

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

export const MovieHeader = () => {
    const movie = useMoviePageContext();

    const getMovieRunTimeInHours = () => {
        const { hours, minutes } = convertFromMinutesToHours(movie?.runtime ?? 0);
        return `${hours ? hours + 'h' : ''} ${minutes}m`;
    };

    if (!movie) return null;

    return (
        <Poster img={movie?.backdrop_path ?? ''}>
            <GradiantBG>
                <div
                    css={{
                        // width: 'calc(100vw - 80px)',
                        maxWidth: Theme.maxPrimaryPageWidth,
                        display: 'flex',
                        alignItems: 'center',
                        margin: 40,
                        '@media screen and (max-width: 910px)': {
                            flexFlow: 'column'
                        }
                    }}
                >
                    <PosterImageContainer>
                        <img src={movie?.poster_path ?? ''} width="100%" height="100%" alt={movie?.title} />
                    </PosterImageContainer>

                    <Details>
                        <h1 css={{ margin: '4px 0' }}>{movie?.title}</h1>

                        <p css={{ display: 'flex', alignItems: 'center', margin: 0 }}>
                            <span css={{ whiteSpace: 'nowrap' }}>{movie?.release_date}</span>

                            {movie?.production_countries[0]?.['iso_3166_1'] && (
                                <span>({movie?.production_countries[0]['iso_3166_1']})</span>
                            )}

                            {movie?.runtime && <Bullet />}

                            <span css={{ whiteSpace: 'nowrap' }}>{getMovieRunTimeInHours()}</span>
                        </p>

                        <p>
                            {movie?.genres?.length &&
                                movie?.genres?.map((genre: any, i: number) => (
                                    <span key={genre.id}>{genre.name},</span>
                                ))}
                        </p>

                        <div css={{ margin: 8 }}>MovieRate</div>

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
                            <p css={{ margin: 0, maxWidth: '100%' }}>{movie?.overview}</p>
                        </div>
                    </Details>
                </div>
            </GradiantBG>
        </Poster>
    );
};
