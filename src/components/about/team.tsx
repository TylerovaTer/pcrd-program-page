import styles from "./about.module.css";

export const AboutTeam = () => {
  return (
    <div id="about-team" className={styles.wrapper}>
      <h1>That's Who we are!</h1>
      <div className={styles.about}>
        <div>
          <p>
            We are the first. First roller derby team both in Prague and in the
            Czech Republic
          </p>
          <p>
            We were founded in 2012 by the founding mothers. The very next year
            we played our first ever game. Over the following years, we got
            better and the team grew. In 2017 we became a member of the
            international worldwide roller derby association WFTDA (Women Flat
            Track Derby Association), since then we have been in the world and
            European rankings.
          </p>
          <p>
            In the same year we also created the official Czech derby team,
            which still includes many of our players. The following year (2018)
            these players represented the Czech Republic at the World Roller
            Derby Championships in Manchester.
          </p>
        </div>
        <div>
          <p>
            As it is in every team, we went through a time when we had a B-team
            called Bad Wolves, but also a time when we were happy to be able to
            play at all. The big test was the time during the covid when we
            couldn't train or play and derby around the world came to a
            standstill.
          </p>
          <p>
            We now have a revived B-team in addition to the A-team and the whole
            league has a lot of members, not just players. The league also has
            referees and non skating officials. In 2025 the wolrd cup is comming to Innsbruck and we are looking forward to it.
          </p>
          <p>
            Around the team an inclusive community of people has formed who work
            for the benefit of Czech roller derby and try to make our sport
            grow. We are very happy to recruit new members in all positions,
            from players to officials to volunteers who help us organize events
            and games.
          </p>
        </div>
      </div>
      <img src="/timeline.svg" className={styles.timeline}/>
    </div>
  );
};
