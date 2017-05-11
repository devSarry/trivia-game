import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from '../views/landing/landing.component';
import {GameComponent} from '../views/game/game.component';
import {TeamsComponent} from '../views/teams/teams.component';

const routes: Routes = [
    {
        path: '', component: LandingComponent
    },
    {
        path: 'quiz', component: GameComponent
    },
    {
        path: 'teams', component: TeamsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
