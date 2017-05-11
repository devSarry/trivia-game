import {Component} from '@angular/core';
import {GameDataServiceService} from "./services/game-data-service.service";
import {Question} from "./models/question";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app works!';
    question: Question;

    cc = [1,2,3];

    constructor(private gameService: GameDataServiceService){
        this.question = this.gameService.getRandomQuestion();
    }


}
