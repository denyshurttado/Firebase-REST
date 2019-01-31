import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe;
  loading = true;

  constructor(private _heroesService: HeroesService) {
    this._heroesService.getHeroes().subscribe( (data: Heroe) => {
      this.heroes = data;
      this.loading = false;
      // setTimeout(() => this.loading = false, 3000);
    });
  }

  ngOnInit() {
  }

  eliminarHeroe(key$: string) {
    this._heroesService.eliminarHeroe(key$)
      .subscribe(data => {
        if (data) {
          console.error(data);
        } else {
          // Todo bien
          delete this.heroes[key$];
        }
      });
  }
}
