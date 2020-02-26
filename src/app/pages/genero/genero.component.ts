import { GeneroService } from './../../_service/genero.service';
import { Component, OnInit } from '@angular/core';
import { Genero } from 'src/app/_model/genero';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent implements OnInit {

  generos: Genero[];
  constructor(private generoService: GeneroService) { }

  ngOnInit() {
    this.generoService.listar().subscribe(data => {
      this.generos = data;
    });
  }

}
