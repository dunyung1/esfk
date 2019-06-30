import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { TournamentComponent } from './tournament/tournament.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { LiveviewingComponent } from './liveviewing/liveviewing.component';
import { EventsComponent } from './events/events.component';
import { ClubsComponent } from './clubs/clubs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    TournamentComponent,
    LeaguesComponent,
    LiveviewingComponent,
    EventsComponent,
    ClubsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
