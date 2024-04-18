import { BasicInfo, Game } from '@/data/types';
import styles from './schedule.module.css';

type PropTypes = {
    data: BasicInfo
}

export const Schedule = ({data}: PropTypes) => {
  return (
    <div id="schedule" className={styles.wrapper}>
        <a className={styles.event} href={data.eventLink} target='_blank'>Link to Facebook event</a>
        <div className={styles.schedule}>
            <div className={styles.item}>
            <h2>Games</h2>
            <Row title='First game:' info={data.firstGame.time}/>
            <TeamRow 
            team1={data.firstGame.team1}
            href1={data.firstGame.href1}
            team2={data.firstGame.team2}
            href2={data.firstGame.href2} />
            <Row title='Second game:' info={data.secondGame.time}/>
            <TeamRow 
            team1={data.secondGame.team1}
            href1={data.secondGame.href1}
            team2={data.secondGame.team2}
            href2={data.secondGame.href2} />
            <Row title='Third game:' info={data.thirdGame.time}/>
            <TeamRow 
            team1={data.thirdGame.team1}
            href1={data.thirdGame.href1}
            team2={data.thirdGame.team2}
            href2={data.thirdGame.href2}/>
            </div>

            <div className={styles.item}>
            <h2>Afterparty</h2>
            <Row title='When:' info={data.afterparty.when}/>
            <Row title='Where:' info={data.afterparty.where}/>
            <Row title='Address:' info={data.afterparty.address}/>
            </div>            
        </div>
        
    </div>
  );
}

type RowType = {
    title: string
    info: string 
}

const Row = ({title, info}: RowType) => {
    return (
        <div className={styles.row}>
            <p>{title}</p>
            <p>{info}</p>
        </div>
    )
}

type TeamRowType = {
    team1: string
    href1: string
    team2: string
    href2: string
}
const TeamRow = ({team1, href1, team2, href2}: TeamRowType) => {
    return (
        <div className={styles.teamRow}>
            <p><a href={href1} target='_blank'>{team1}</a> </p>
            <p>vs.</p>
            <p> <a href={href2} target='_blank'>{team2}</a></p>
        </div>
    )
}