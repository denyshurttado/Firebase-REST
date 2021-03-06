import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

//ROUTES
import { APP_ROUTING } from './app.routes';

//PIPES
import { KeysPipe } from './pipes/keys.pipe';

//Services
import { HeroesService } from "./services/heroes.service";

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { ShowHeroeComponent } from './components/heroes/new-heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ShowHeroeComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
    
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
