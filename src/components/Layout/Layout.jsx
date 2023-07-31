// libs
import React, { useContext, useState } from 'react';
import { CssBaseline, Container } from '@mui/material';

// components
import Header from '../Header';
import JokesSection from '../JokesSection';
import Loader from '../Loader';

// context
import { JokesContext } from '../../context/JokesProvider';

// constants
import { JOKES_TABS } from '../../constants';

// styles
import styles from './styles.module.scss';

/**
 * Renders Header and Joke Sections
 * @returns {JSX.Element}
 */

const Layout = () => {
    const [currentTab, setCurrentTab] = useState(JOKES_TABS.JOKES);
    const { isLoading, error } = useContext(JokesContext);

    const changeTab = (_, value) => {
        setCurrentTab(value);
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (isLoading) return <Loader />;

    return (
        <div className={styles.root}>
            <CssBaseline />
            <Container maxWidth='md' className={styles.container}>
                <Header
                    title='Chuck Norris Funny Jokes'
                    changeTab={changeTab}
                    currentTab={currentTab}
                />
                <JokesSection currentTab={currentTab} />
            </Container>
        </div>
    );
};

export default Layout;
