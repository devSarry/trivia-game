import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {GameDataServiceService} from '../../services/game-data-service.service';
import {Team} from '../../models/team';
import {Subscription} from 'rxjs';
import {TimerObservable} from 'rxjs/observable/TimerObservable';
import {Game} from '../../models/game';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy, OnChanges {

    private gameState: Game;
    private ticks: any = 0;
    private gameTimmer = 0;
    private subscription: Subscription;

    constructor(private gameService: GameDataServiceService) {
        this.gameState = this.gameService.gameState;
    }

    ngOnInit() {
        const readyTimer = TimerObservable.create(1000, 1000);
        this.subscription = readyTimer.subscribe(t => this.ticks = t);

    }

    ngOnChanges() {
        if (this.ticks < 0) {
            this.ticks = 'Start!';
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();

    }

    startGame() {
        this.gameState.teamPlaying.isReady = true;

        const readyTimer = TimerObservable.create(1000, 1000);
        this.subscription = readyTimer.subscribe(t => this.gameTimmer = t);
    }

    checkAnswer(answer: string) {
        if (this.gameState.question.checkAnswer(answer)) {
            this.gameState.question = this.gameService.getRandomQuestion();
            this.gameState.teamPlaying.points++;
        }
    }

}
