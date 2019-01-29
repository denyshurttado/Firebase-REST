import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeroesComponent } from "./components/heroes/heroes.component";
import { ShowHeroeComponent } from "./components/heroes/new-heroe.component";



const APP_ROUTES: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: ShowHeroeComponent },
    { path: '**', component: HeroesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(APP_ROUTES)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
