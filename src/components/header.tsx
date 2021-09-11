/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Theme, Colors } from '../theme';
import { ReactComponent as Logo } from './tmvd-logo.svg';
import { useMedia } from 'react-media';

const HeaderWrapper = styled.header({
    background: Colors.tmdbDarkBlue,
    display: 'flex',
    justifyContent: 'center',
    top: 0,
    left: 0,
    height: 64,
    width: '100%',
    zIndex: 10
});

const linkStyles = {
    color: Colors.white,
    padding: 12,
    textDecoration: 'none',
    lineHeight: 1.5,
    fontWeight: 600,
    fontSize: 16,
    '&:hover': {
        color: Colors.accountLightBlue
    },
    '@media screen and (max-width: 559px)': {
        padding: 4,
        fontSize: 14
    }
};

export const MenuItem = ({ to, text }: { to: string; text: string }) => {
    return (
        <li css={{ display: 'inline-flex' }}>
            <NavLink
                css={linkStyles}
                to={to}
                activeStyle={{
                    fontWeight: 700,
                    color: Colors.accountLightBlue
                }}
            >
                {text}
            </NavLink>
        </li>
    );
};

const Header = () => {
    const isMobile = useMedia({ query: '(max-width: 559px)' });

    return (
        <HeaderWrapper>
            <div
                css={{
                    padding: '0 40px',
                    display: 'flex',
                    justifyContent: 'center',
                    maxWidth: Theme.maxPrimaryPageWidth,
                    width: Theme.maxPrimaryPageWidth,
                    '@media screen and (max-width: 559px)': {
                        padding: '0 12px'
                    }
                }}
            >
                <Logo width={isMobile ? 80 : 154} height={64} />
                <ul css={{ flex: 1, listStyle: 'none', margin: 'auto', paddingLeft: 24 }}>
                    <MenuItem to="/movies/now-playing" text="Playing Now" />
                    <MenuItem to="/movies/upcoming" text="Upcoming" />
                    <MenuItem to="/movies/top-rated" text="Top Rated" />
                </ul>
            </div>
        </HeaderWrapper>
    );
};

export { Header };
