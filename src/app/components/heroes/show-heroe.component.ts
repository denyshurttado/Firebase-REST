import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-heroe',
  templateUrl: './show-heroe.component.html',
  styles: []
})
export class ShowHeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre:"",
    bio:"",
    casa:"Marvel"
  }

  constructor(private _heroesService: HeroesService, private router: Router) { }

  ngOnInit() {
  }

  guardar() {
    console.log(this.heroe);

    this._heroesService.nuevoHeroe(this.heroe)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/heroe', data['name']]);
      }, error => console.log(error));
  }

}
