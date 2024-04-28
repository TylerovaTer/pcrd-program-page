import styles from './officials.module.css';

type PropTypes = {
    data: string[];
}

export const Officials = ({data} : PropTypes) => {
    return (
        <div className={styles.wrapper} id='officials'>
            <h1>Officials</h1>
            <div className={styles.sheet}>
                {data.map((official, index) => (
                    <p key={index + official}>{official}</p>
                ))}
            </div>
            <p className={styles.thanks}>Many thanks to our beloved officials!</p>
            <div className={styles.picture}>
                <img src="/zebra_done.png" alt="officials" />
            </div>
        </div>
    );
}
