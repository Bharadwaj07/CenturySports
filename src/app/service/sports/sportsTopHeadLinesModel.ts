export class SportsTopHeadLinesField {
    "headLineId": string;
    "headLineData": string;
}

export class SportsTopHeadLines {
    sport: string;
    headlines: SportsTopHeadLinesField[];
}