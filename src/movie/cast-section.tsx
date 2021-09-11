/** @jsxImportSource @emotion/react */
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { fetchCastByMovieId } from '../services';

import { Colors, Theme } from '../theme';
import { useMoviePageContext } from './movie-page-context';
import PlaceHolderImg from './placeholder-img.svg';

const CastContainer = styled.div(({ showScrollBar }: { showScrollBar: boolean }) => ({
    backgroundColor: '#fff',
    overflowX: showScrollBar ? 'scroll' : 'hidden',
    position: 'relative'
}));

const ActorCard = styled.li({
    boxShadow: '0 2px 8px rgb(0 0 0 / 10%)',
    borderRadius: 8,
    border: `1px solid ${Colors.lightGrey}`,
    overflow: 'hidden',
    height: 260,
    margin: 8,
    width: 140,
    minWidth: 140
});

const StyleWrapper = styled.div(({ isHidden }: { isHidden: boolean }) => ({
    '&:after': {
        transition: 'linear 0.3s',
        opacity: isHidden ? 0 : 1,
        content: "''",
        width: 60,
        height: '100%',
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0) 0%, #fff 100%)',
        willChange: 'opacity',
        pointerEvents: 'none'
    }
}));

export const Cast = () => {
    const { id } = useParams<{ id: string }>();
    const [cast, setCastState] = useState<any[]>([]);

    useEffect(() => {
        fetchCastByMovieId(id).then((cast) => setCastState(cast));
    }, [id]);

    if (!cast.length) return null;

    const haveScrollBar = cast?.length > 5;

    return (
        <CastContainer showScrollBar={haveScrollBar}>
            <ul css={{ listStyleType: 'none', display: 'flex', margin: 0, padding: 0 }}>
                {cast.map((actor) => (
                    <ActorCard key={actor?.id}>
                        <div css={{ backgroundColor: '#dbdbdb' }}>
                            <img
                                width={138}
                                height={175}
                                src={actor.profile_path ? actor.img : PlaceHolderImg}
                                alt={actor.name}
                            />
                        </div>
                        <div css={{ padding: 8 }}>
                            <h3 css={{ margin: '0 0 2px', fontSize: 16 }}>{actor.name}</h3>
                            <span css={{ fontSize: 14, color: Colors.gray }}>{actor.character}</span>
                        </div>
                    </ActorCard>
                ))}
            </ul>
        </CastContainer>
    );
};
