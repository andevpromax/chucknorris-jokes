// libs
import React, { useContext } from 'react';

// components
import JokeItem from '../JokeItem';

// context
import { JokesContext } from '../../context/JokesProvider';

/**
 * Returns active jokes or favorite one
 * @param {boolean} isFavouriteJokes
 * @returns {JSX.Element}
 */

const JokeList = ({ isFavouriteJokes }) => {
    const { jokes, favouriteJokes } = useContext(JokesContext);

    const currentJokes = isFavouriteJokes ? favouriteJokes : jokes;

    return currentJokes?.map((currentJoke) => (
        <JokeItem key={currentJoke.id} joke={currentJoke} />
    ));
};

export default JokeList;
