import { MenuComponent } from "@/components/menu";
import { Poster } from "@/components/poster";
import { mainMenu } from "@/data/menu";
import styles from "./specials.module.css";
import { AboutTeam } from "@/components/about/team";
import { Rules } from "@/components/about/rules";

export default function GamesInfo() {
  return (
    <div>
        <Poster
        src="/hotovo.jpg"
        alt="uvodní obrázek zápasu"
      />
        <MenuComponent data={mainMenu} />
        <AboutTeam />
        <Rules />
    </div>
  );
}
