import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GameDataServiceService} from "../../services/game-data-service.service";
import {Team} from '../../models/team';

@Component({
    selector: 'app-teams',
    templateUrl: './teams.component.html',
    styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

    startGameAnimtate:any;
    startAnimate: any = 'shake';
    teamName: string;
    teams: Team[] = [];


    maxNumberOfTeams = 5;

    constructor(private gameService: GameDataServiceService) {
    }

    ngOnInit() {

    }

    addTeam(name: string) {
        this.gameService.addTeam(name);
        this.teams = this.gameService.teams;
    }

    removeTeam() {
        this.gameService.removeTeam();
    }

    startGame() {
        this.gameService.startGame();
    }


}
