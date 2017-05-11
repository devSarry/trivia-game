import {Injectable} from '@angular/core';
import * as QuestionList from '../../assets/questions/questions';
import {Question} from '../models/question';
import {getRandomInt} from '../helpers/helpers';
import {Game} from '../models/game';
import {Team} from '../models/team';


@Injectable()
export class GameDataServiceService {
    pointsToWin = 10;
    gameTime = 60;
    gameState: Game;
    teams: Team[] = [];
    questions: any;
    numberOfQuestions = 0;

    constructor() {
        this.questions = QuestionList.Questions;
        this.numberOfQuestions = this.questions.length;
    }

    getRandomQuestion(): Question {

        const question = this.questions[getRandomInt(0, this.numberOfQuestions)];


        if (question.viewed) {
            this.getRandomQuestion();
        }

        question.viewed = true;

        return question;
    }

    addTeam(name: string): void {
        this.teams.push(new Team(name));
    }

    startGame(): void {
        this.gameState = new Game(this.teams, this.getRandomQuestion(), this.pointsToWin, this.gameTime);
    }


    removeTeam(): void {
        this.teams.pop();
    }
}
