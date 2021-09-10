/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { useMedia } from 'react-media';
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';

import { Colors } from '../theme';

const MovieRateWrapper = styled.div({
    position: 'absolute',
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: '#081c22',
    display: 'flex',
    alignItems: 'center',
    top: '-17px'
});

const Text = styled.span({
    flex: 1,
    color: Colors.white,
    fontSize: 12,
    textAlign: 'center'
});

export const MovieRate = ({ rate }: { rate: number }) => {
    return (
        <MovieRateWrapper>
            <Text>{rate}%</Text>
        </MovieRateWrapper>
    );
};
