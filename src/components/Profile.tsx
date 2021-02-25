import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {

    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.container}>
            <img src="https://github.com/danilocgraciano.png" alt="Danilo C. Graciano"></img>
            <div>
                <strong>Danilo C. Graciano</strong>
                <p>
                    <img src="icons/level.svg" alt="level"></img>
                    Level {level}
                </p>
            </div>
        </div>
    );
}