// libs
import React from 'react';

// styles
import styles from './styles.module.scss';

/**
 * Renders spinner
 * @returns {JSX.Element}
 */

const Loader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.spinner}></div>
        </div>
    );
};

export default Loader;
