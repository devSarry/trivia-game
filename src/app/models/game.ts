import {Team} from "./team";
import {Question} from "./question";

export class Game {
    teamPlaying: Team;
    teams: Team[];
    question: Question;
    pointsToWin: number;
    timePerQuestion: number;

    constructor(teams: Team[], question: Question, pointsToWin: number, timePerQuestion: number ){
        this.teams = teams;
        this.question = question;
        this.pointsToWin = pointsToWin;
        this.timePerQuestion = timePerQuestion;

        this.teamPlaying = this.teams.pop();
    }



}
