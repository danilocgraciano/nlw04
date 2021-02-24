import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.container}>
            <img src="https://github.com/danilocgraciano.png" alt="Danilo C. Graciano"></img>
            <div>
                <strong>Danilo C. Graciano</strong>
                <p>
                    <img src="icons/level.svg" alt="level"></img>
                    Level 1
                    </p>
            </div>
        </div>
    );
}