import {useState, useEffect} from 'react';
import movieDb from '../api/movieDB';
import {Cast, CreditsResponse} from '../interfaces/creditsInterfacee';
import {FullMovie} from '../interfaces/movieinterface';

interface MovieDetails {
    isLoading: boolean;
    movieFull?: FullMovie;
    cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: [],
    });

    const getMovieDetails = async () => {
        const movieDetails = movieDb.get<FullMovie>(`/${movieId}`);
        const cast = movieDb.get<CreditsResponse>(`/${movieId}/credits`);

        const [movieDetailsPromise, castPromise] = await Promise.all([
            movieDetails,
            cast,
        ]);

        setState({
            isLoading: false,
            movieFull: movieDetailsPromise.data,
            cast: castPromise.data.cast,
        });
    };

    useEffect(() => {
        getMovieDetails();
    }, []);

    return {
        ...state,
    };
};
