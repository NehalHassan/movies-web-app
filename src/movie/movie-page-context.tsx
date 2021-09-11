import { createContext, PropsWithChildren, useContext } from 'react';
import { Movie } from '../types';

export const MoviePageContext = createContext<any>({});

export const MoviePageProvider = (props: PropsWithChildren<{ value: Movie }>) => {
    return <MoviePageContext.Provider value={props.value}>{props.children}</MoviePageContext.Provider>;
};
export const useMoviePageContext = () => {
    const context = useContext(MoviePageContext);
    return context;
};
