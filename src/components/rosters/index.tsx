import { Player, Roster, Teams } from '@/data/types';
import styles from './roster.module.css';

type PropTypes = {
    dataHome: Roster
    dataAway: Teams
}

export const Rosters = ({ dataHome, dataAway }: PropTypes) => {
    return (
        <div id='rosters'>
            <div className={styles.wrapper}>
                <h2>{dataHome.name}</h2>
                {dataHome.data.map((player, index) => (
                    <Card
                        key={"home" + index}
                        name={player.name}
                        number={player.number}
                        image={player.image}
                        position={player.position} />
                ))
                }
            </div>
            
            {dataAway.map((team, index) => (
            <div className={styles.wrapper} key={team.name + index}>
                <h2>{team.name}</h2>
                {team.data.map((player, index) => (
                    <Card
                        key={"away" + index}
                        name={player.name}
                        number={player.number}
                        image={player.image}
                        position={player.position} />
                ))
                }
            </div>))}
        </div>
    );
}


export const Card = ({ name, number, image, position }: Player) => {
    return (
        <div className={styles.card}>
            <div className={styles.picture}>
                <img src={image || "/pcrd-logo.svg"} alt={`playe ${name}`} />
            </div>
            <div className={styles.name}>
                <h4>{name}</h4>
                {number && <h5>{`#${number}`}</h5>}
            </div>
            {position == "bench" && <div className={styles.bench}>Bench crew</div>}
        </div>
    );
}