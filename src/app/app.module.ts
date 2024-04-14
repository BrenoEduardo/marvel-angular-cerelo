import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { ChampionsSelectComponent } from './pages/champions-select/champions-select.component';
import { HttpClientModule } from '@angular/common/http';
import { MarvelService } from './core/services/marvel.service';
import { TicTacToeComponent } from './pages/tic-tac-toe/tic-tac-toe.component';
import { CharacterComponent } from './components/character/character.component';
import { WinCountersComponent } from './components/win-counters/win-counters.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ChampionsSelectComponent,
    TicTacToeComponent,
    CharacterComponent,
    WinCountersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MarvelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
