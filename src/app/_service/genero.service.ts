import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Genero } from '../_model/genero';


@Injectable({
  providedIn: 'root'
})

export class GeneroService {
  url: string = `${environment.HOST}/generos`;

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Genero[]>(this.url);
  }
}
