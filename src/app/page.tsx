import { Menu } from "@/components/menu";
import { Officials } from "@/components/officials";
import { Poster } from "@/components/poster";
import { Rosters } from "@/components/rosters";
import { Schedule } from "@/components/schedule";
import { information } from "@/data/basic-information";
import { officials } from "@/data/officials";
import { rosterAwayTeam } from "@/data/roster-away";
import { rosterHomeTeam } from "@/data/roster-home";

export default function Home() {
  return (
    <div>
      <Poster />
      <Menu />
      <Schedule data={information}/>
      <Officials data={officials}/>
      <Rosters dataHome={rosterHomeTeam} dataAway={rosterAwayTeam}/>
    </div>
  );
}
