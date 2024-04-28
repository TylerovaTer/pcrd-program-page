export type Player = {
    name: string;
    number: string;
    image?: string;
}

export type Roster = {
    data: Player[];
    name: string;
}

export type Teams = Roster[];

export type BasicInfo = {
    firstGame: Game;
    secondGame: Game;
    thirdGame: Game;
    afterparty: Afterparty;
    eventLink: string;
}

export type Game = {
    time: string;
    team1: string;
    href1: string;
    team2: string;
    href2: string;
}

type Afterparty = {
    when: string;
    where: string;
    address: string;
}
