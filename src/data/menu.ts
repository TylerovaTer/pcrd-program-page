import { appRouter } from "./routing"

export const mainMenu = [
    {
        title: "Games",
        href: appRouter.games,
        isActive: true
    },
    {
        title: "Join PCRD",
        href: appRouter.join,
        isActive: false
    },
    {
        title: "About team",
        href: "#about-team",
        isActive: true
    },
    {
        title: "Rules",
        href: "#rules",
        isActive: true
    }
]

export const gamesMenu = [
    {
        title: "Results",
        href: "#results",
        isActive: true
    },
    {
        title: "Programme",
        href: appRouter.programme,
        isActive: true
    }
]

export const programmeMenu = [
    {
        title: "Schedule",
        href: "#schedule",
        isActive: true
    },
    {
        title: "Officials",
        href: "#officials",
        isActive: true
    },
    {
        title: "Rosters",
        href: "#rosters",
        isActive: true
    }
]