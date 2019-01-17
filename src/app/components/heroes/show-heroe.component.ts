import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Heroe } from "../../interfaces/heroe.interface";

@Component({
  selector: 'app-show-heroe',
  templateUrl: './show-heroe.component.html',
  styles: []
})
export class ShowHeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre:"",
    bio:'',
    casa:"Marvel"
  }

  constructor() { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.heroe);
    
  }

}
