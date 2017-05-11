import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './router/app-routing.module';
import {AppComponent} from './app.component';
import {GameDataServiceService} from "./services/game-data-service.service";
import {CommonModule} from "@angular/common";
import {LandingComponent} from './views/landing/landing.component';
import {GameComponent} from './views/game/game.component';
import {CardComponent} from './components/card/card.component';
import {TeamsComponent} from './views/teams/teams.component';
import {AnimatesDirective, AnimationService} from 'css-animator';
import {ChunksPipe} from './helpers/helpers';

@NgModule({
    declarations: [
        AppComponent,
        LandingComponent,
        GameComponent,
        CardComponent,
        TeamsComponent,
        AnimatesDirective,
        ChunksPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        CommonModule
    ],
    providers: [GameDataServiceService, AnimationService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
