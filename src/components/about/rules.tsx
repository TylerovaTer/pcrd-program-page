import styles from "./about.module.css";

export const Rules = () => {
  return (
    <div id="rules" className={styles.wrapper}>
      <h1>What is Roller Derby?</h1>
      <div className={styles.about}>
        <div>
          <p>
            Roller derby is a team contact sport played mostly by women on quad
            roller skates. Game is two 30-minute periods. It is also divided
            into rounds called the “jams“. The jam may take up to 2 minutes.
          </p>
          <p>
            Players from two teams meet on an oval track. Every team may field 5
            players at once. Four of those players are called the blockers and
            one is called the jammer. Jammer is the only player eligible to
            score points. She collects them by passing the blockers of the
            opposing team. Her teammates blockers try to help her but at the
            same time have to prevent the opposing jammer from passing them.
          </p>
          <p>
            The first jammer to make it past the group of blockers (the “pack”)
            on their initial lap is designated as “lead jammer,” and has the
            power to stop the jam before two minutes are up. After the initial
            lap, jammers accumulate one point for every opposing blocker they
            pass.
          </p>
        </div>
        <div>
          <p>
            The game is full of contact, players fall and hit each other, all
            while being observed by referees who check whether it is legal
            according to the rules. Skaters may not hit other skaters with their
            hands, head, or feet. Additionally, skaters may not hit others in
            the head, back, or feet. Unruly players are being sent to a penalty
            box where they sit for 30 seconds. However, skaters may only accrue
            7 pe- nalties during the game, or they will foul out. Skating offi-
            cials and non-skating officials monitor the game from both the
            inside and outside of the track to ensure safety and fairness. After
            an hour of playtime passes the team with the highest score wins.
          </p>
        </div>
      </div>
    </div>
  );
};
