import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { ChampionsSelectComponent } from './components/champions-select/champions-select.component';
import { HttpClientModule } from '@angular/common/http';
import { MarvelService } from './core/services/marvel.service';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ChampionsSelectComponent
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
