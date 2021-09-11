/** @jsxImportSource @emotion/react */
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { fetchMovieKeyWordsByMovieId } from '../services';

import { Colors, Theme } from '../theme';
import { useMoviePageContext } from './movie-page-context';
import PlaceHolderImg from './placeholder-img.svg';

const ListItem = styled.li({
    display: 'flex',
    flexFlow: 'column',
    marginBottom: 32,
    color: Colors.tmdbDarkBlue,
    '@media screen and (max-width: 910px)': {
        flexFlow: 'wrap',
        width: '100%',
        maxWidth: '100%',
        whiteSpace: 'break-spaces',
        strong: {
            paddingRight: 12
        }
    }
});

export const renderComma = (list: any[], index: number) => {
    console.log(list.length, index);
    return index < list.length - 1 ? ', ' : '';
};

export const AsideMovie = () => {
    const movie = useMoviePageContext();

    const [keyWords, setKeyWords] = useState<any[]>([]);

    useEffect(() => {
        fetchMovieKeyWordsByMovieId(movie.id).then((keywords: any) => setKeyWords(keywords));
    }, [movie.id]);

    if (!movie) return null;

    return (
        <div
            css={{
                padding: '0 32px',
                '@media screen and (max-width: 910px)': {
                    padding: '32px 8px'
                }
            }}
        >
            <ul css={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {!!movie.status && (
                    <ListItem>
                        <strong>status</strong> <span>{movie.status}</span>
                    </ListItem>
                )}

                {!!movie.original_language && (
                    <ListItem>
                        <strong>Original Language</strong> <span>{movie.original_language}</span>
                    </ListItem>
                )}

                {!!movie.budget && (
                    <ListItem>
                        <strong>Budget</strong> <span>${movie.budget}</span>
                    </ListItem>
                )}

                {!!movie.revenue && (
                    <ListItem>
                        <strong>Revenue</strong> <span>${movie.revenue}</span>
                    </ListItem>
                )}

                <ListItem>
                    <strong>Keywords</strong>{' '}
                    {keyWords?.length ? (
                        keyWords.map((keyword, i) => (
                            <span css={{ whiteSpace: 'nowrap' }}>
                                {keyword.name}
                                {renderComma(keyWords, i)}&nbsp;
                            </span>
                        ))
                    ) : (
                        <span>No keywords have been added.</span>
                    )}
                </ListItem>
            </ul>
        </div>
    );
};
