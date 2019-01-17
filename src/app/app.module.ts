import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { ShowHeroeComponent } from './components/heroes/show-heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ShowHeroeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
