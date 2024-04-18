import { Player, Roster } from '@/data/types';
import styles from './roster.module.css';

type PropTypes = {
    dataHome: Roster
    dataAway: Roster
}

export const Rosters = ({ dataHome, dataAway }: PropTypes) => {
    return (
        <div id='rosters'>
            <div className={styles.wrapper}>
                <h2>Prague City Roller Derby</h2>
                {dataHome.map((player, index) => (
                    <Card
                        key={"home" + index}
                        name={player.name}
                        number={player.number}
                        image={player.image} />
                ))
                }
            </div>
            <div className={styles.wrapper}>
                <h2>Copenhagen Roller Derby B</h2>
                {dataAway.map((player, index) => (
                    <Card
                        key={"away" + index}
                        name={player.name}
                        number={player.number}
                        image={player.image} />
                ))
                }
            </div>
            <div className={styles.wrapper}>
                <h2>Rolling RatPack Regensburg</h2>
                {dataAway.map((player, index) => (
                    <Card
                        key={"away" + index}
                        name={player.name}
                        number={player.number}
                        image={player.image} />
                ))
                }
            </div>
        </div>
    );
}


export const Card = ({ name, number, image }: Player) => {
    return (
        <div className={styles.card}>
            <div className={styles.picture}>
                <img src={image || "/pcrd-logo.svg"} alt={`playe ${name}`} />
            </div>
            <div className={styles.name}>
                <h4>{name}</h4>
                <h5>#{number}</h5>
            </div>
        </div>
    );
}