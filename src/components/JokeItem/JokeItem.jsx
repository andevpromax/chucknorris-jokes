// libs
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

// context
import { JokesContext } from '../../context/JokesProvider';

// styles
import styles from './styles.module.scss';

/**
 * Returns a joke with the buttons
 * @param {object} joke
 * @returns {JSX.Element}
 */

const JokeItem = ({ joke }) => {
    const { favouriteJokes, addJokeToFavourite, deleteJokeFromFavourite } =
        useContext(JokesContext);

    return (
        <Card key={joke.id} className={styles.card}>
            <CardContent className={styles.cardContent}>
                <Typography>{joke.value}</Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={() => addJokeToFavourite(joke.id)}
                    disabled={Boolean(
                        favouriteJokes.find(
                            (favouriteJoke) => favouriteJoke.id === joke.id
                        )
                    )}
                >
                    Add
                </Button>
                <Button
                    variant='outlined'
                    color='secondary'
                    startIcon={<DeleteIcon />}
                    onClick={() => deleteJokeFromFavourite(joke.id)}
                    disabled={
                        favouriteJokes.length === 0 ||
                        !favouriteJokes.find(
                            (favouriteJoke) => favouriteJoke.id === joke.id
                        )
                    }
                >
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
};

JokeItem.propTypes = {
    joke: PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    }).isRequired,
};

export default JokeItem;
