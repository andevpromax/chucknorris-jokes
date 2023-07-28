// libs
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

// components
import JokeList from '../JokeList';

// constants
import { JOKES_TABS } from '../../constants';

// styles
import styles from './styles.module.scss';

/**
 * Returns list of jokes
 * @param {function} currentTab
 * @returns {JSX.Element}
 */

const JokesSection = ({ currentTab }) => {
    return (
        <>
            {[JOKES_TABS.JOKES, JOKES_TABS.FAVOURITE_JOKES].map((jokeType) => {
                return (
                    <Box
                        key={jokeType}
                        role='tabpanel'
                        hidden={currentTab !== jokeType}
                        className={styles.box}
                    >
                        <JokeList
                            isFavouriteJokes={
                                jokeType === JOKES_TABS.FAVOURITE_JOKES
                            }
                        />
                    </Box>
                );
            })}
        </>
    );
};

JokesSection.propTypes = {
    currentTab: PropTypes.number.isRequired,
};

export default JokesSection;
