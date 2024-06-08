import { MenuComponent } from "@/components/menu";
import { gamesMenu } from "@/data/menu";

export default function Resuts() {
    return (
      <div>
        <MenuComponent data={gamesMenu} />
          Minulé hry
      </div>
    );
  }
  