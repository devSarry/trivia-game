import {Team} from "./team";
import {Question} from "./question";

export class Game {
    teamPlaying: Team;
    teams: Team[];
    question: Question;
    pointsToWin: number;
    gameTime: number;

    constructor(teams: Team[], question: Question, pointsToWin: number, gameTime: number ){
        this.teams = teams;
        this.question = question;
        this.pointsToWin = pointsToWin;
        this.gameTime = gameTime;

        this.teamPlaying = this.teams.pop();
    }



}
