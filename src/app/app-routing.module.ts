import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TournamentComponent } from './tournament/tournament.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { LiveviewingComponent } from './liveviewing/liveviewing.component';
import { EventsComponent } from './events/events.component';
import { ClubsComponent } from './clubs/clubs.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'tournament', component: TournamentComponent},
    {path: 'leagues', component:  LeaguesComponent},
    {path: 'liveviewing', component:  LiveviewingComponent},
    {path: 'events', component:  EventsComponent},
    {path: 'clubs', component:  ClubsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
