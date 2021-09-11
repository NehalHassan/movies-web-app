import { useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchMovieById } from '../services';

export const Movie = () => {
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        fetchMovieById(id).then((res) => console.log(res));
    }, [id]);

    console.log('hay');
    return <p>movie by movieID</p>;
};
