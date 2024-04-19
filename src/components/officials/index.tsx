import styles from './officials.module.css';
export const Officials = () => {
    return (
        <div className={styles.wrapper} id='officials'>
            <h1>Officials</h1>
            <div className={styles.sheet}>
                {officials.map((official, index) => (
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

const officials = [
    "Obey J Kenobi", "Dr. Derby", "Dread Vader", "Casanova", "NaN", "Panknapp", "Sto", "Trash Panda", "Kanga Lu", "FiREFly", "BatWatch",
    "Liz Frizzle", "Abra Ka Flabra", "BeaTRICK KIDDO", "Mad Chihuahua", "Viky", "Acme Anna", "Monika", "Baby Rose", "T", 
]
