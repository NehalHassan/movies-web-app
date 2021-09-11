/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { useMedia } from 'react-media';
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';

import { Colors } from '../theme';

const MovieRateWrapper = styled.div(({ width, height }: { width: number; height: number }) => ({
    width: width + 12,
    height: height + 12,
    background: '#081c22',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

const CircleRate = styled.div(({ width, height, color }: { width: number; height: number; color: string }) => ({
    width,
    height,
    borderRadius: 50,
    backgroundColor: '#081c22',
    border: `3px solid ${color}`,
    display: 'flex',
    alignItems: 'center'
}));

const Text = styled.span(({ fontSize }: { fontSize: number }) => ({
    flex: 1,
    color: Colors.white,
    fontSize,
    textAlign: 'center'
}));

export const MovieRate = ({ rate, width = 30, height = 30 }: { rate: number; width?: number; height?: number }) => {
    const getColor = rate < 70 ? Colors.accountYellow : Colors.accountGreen;
    return (
        <MovieRateWrapper width={width} height={height}>
            <CircleRate width={width} height={height} color={getColor}>
                <Text fontSize={Math.floor(width / 2 - 5)}>{rate}%</Text>
            </CircleRate>
        </MovieRateWrapper>
    );
};
