import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-heroe',
  templateUrl: './new-heroe.component.html',
  styles: []
})
export class ShowHeroeComponent implements OnInit {

  nuevo: boolean = false;
  id: string;


  heroe: Heroe = {
    nombre:"",
    bio:"",
    casa:"Marvel"
  }

  constructor(private _heroesService: HeroesService, private router: Router, private route: ActivatedRoute) { 
    this.route.params.subscribe(paramentros => {
      
      this.id = paramentros['id'];

      if (this.id !== 'nuevo') {
        this._heroesService.getHeroe( this.id ).subscribe ( data => this.heroe = data);
      }
    });
  }

  ngOnInit() {
  }

  guardar() {
    console.log(this.heroe);

    if (this.id == "nuevo") {
      this._heroesService.nuevoHeroe(this.heroe)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['/heroe', data['name']]);
        }, error => console.log(error));
    } else {
      this._heroesService.actualizarHeroe(this.heroe, this.id).subscribe(data => {
          console.log(data);
        }, error => console.log(error));
    }
  }

  agregarNuevo( forma: NgForm) {

    this.router.navigate(['/heroe', 'nuevo']);
    forma.reset({
      casa: 'Marvel'
    });
  }

}
