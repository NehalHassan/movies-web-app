/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Theme, Colors } from '../theme';
import { ReactComponent as Logo } from './tmvd-logo.svg';
import { useMedia } from 'react-media';
import { Header } from '../components/header';

const MovieScore = () => {
    return (
        <div
            css={{
                position: 'absolute',
                width: 34,
                height: 34,
                borderRadius: 50,
                backgroundColor: '#081c22',
                display: 'flex',
                alignItems: 'center',
                top: '-17px'
            }}
        >
            <span css={{ flex: 1, color: Colors.white, fontSize: 12, textAlign: 'center' }}>60%</span>
        </div>
    );
};

const MovieCard = () => {
    return (
        <div
            css={{
                width: 180,
                height: 390,
                background: 'pink',
                borderRadius: 12,
                display: 'flex',
                flexFlow: 'column',
                overflow: 'hidden',
                margin: 8
            }}
        >
            <div css={{ flex: 2, boxShadow: '0 0 10px 1px rgba(0,0,0,0.1)' }}>img</div>

            <div css={{ flex: 1, position: 'relative', padding: '24px 12px 12px' }}>
                <MovieScore />
                <div css={{ display: 'flex', flexFlow: 'column' }}>
                    <span>Don't Breathe 2</span>
                    <span>date</span>
                </div>
            </div>
        </div>
    );
};
export const MoviesHomePage = () => {
    const isMobile = useMedia({ query: '(max-width: 559px)' });

    return (
        <>
            <Header />
            <div css={{ display: 'flex', justifyContent: 'center' }}>
                <div css={{ width: Theme.maxPrimaryPageWidth, maxWidth: Theme.maxPrimaryPageWidth }}>
                    <div>filters & sort</div>
                    <div css={{ display: 'flex', flexWrap: 'wrap', margin: '0 8px' }}>
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    );
};
