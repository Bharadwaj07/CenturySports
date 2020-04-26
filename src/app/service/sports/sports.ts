export class CricketOverviewDetails {
    rank: number;
    rating: number;
    points: number;
}

export class CricketTeamOverview {
    test: CricketOverviewDetails;
    odi: CricketOverviewDetails;
    t20: CricketOverviewDetails;
}

export class FootballOverviewFifaDetails {
    rank: number;
    points: number;
}

export class FootballOverviewStatsDetails {
    captain: string;
    coach: string;
}

export class FootballTeamOverview {
    fifa: FootballOverviewFifaDetails;
    stats: FootballOverviewStatsDetails;
}

export class HockeyOverviewDetails {
    rank: number;
    rating: number;
    points: number;
}

export class HockeyTeamOverview {
    test: HockeyOverviewDetails;
    odi: HockeyOverviewDetails;
    t20: HockeyOverviewDetails;
}

export class PlayerDetails {
    name: string;
    imgUrl: string;
}

export class FixtureDetails {
    date: Date;
    details: string;
    venue: string;
    embed: string;
}

export class NewsDetails {
    newsTitle: string;
    newsImg: string;
    news: string;
}

export class SportsDetails {
    country: string;
    officialWebsite: string;
    teamImg: string;
    overview: CricketTeamOverview | FootballTeamOverview | HockeyTeamOverview;
    players: PlayerDetails[];
    fixture: FixtureDetails[];
    imgUrl: string[];
    videos: string[];
    news: NewsDetails[];
}

export class Sports {
    sport: string;
    details: SportsDetails[];
}
