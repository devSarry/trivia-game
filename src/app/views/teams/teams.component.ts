import {Component, Input, OnInit} from '@angular/core';
import {GameDataServiceService} from "../../services/game-data-service.service";
import {Team} from "../../models/team";

@Component({
    selector: 'app-teams',
    templateUrl: './teams.component.html',
    styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

    @Input()
    teamName: string;


    teams: Team[];
    team: Team;


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

    }

}
