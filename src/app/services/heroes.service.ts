import { Injectable } from '@angular/core';
// import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';
// import 'rxjs/Rx';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesURL:string = 'https://fir-app-3b7c2.firebaseio.com/heroes.json';

  // constructor(private http: HttpClient) {  }
  constructor(private http: HttpClient) {  }

  nuevoHeroe(heroe: Heroe) {
    const body = JSON.stringify(heroe);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.heroesURL, body, {headers})
      .pipe(map(res => {
        console.log(res);
        return res;
    }));
  }
}
