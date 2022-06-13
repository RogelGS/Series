import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genero } from 'src/app/entity/genero';
import { Pais } from 'src/app/entity/pais';
import { Serie } from 'src/app/entity/serie';
import { GeneroService } from 'src/app/service/genero.service';
import { PaisService } from 'src/app/service/pais.service';
import { SerieService } from 'src/app/service/serie.service';

@Component({
  selector: 'app-agregar-serie',
  templateUrl: './agregar-serie.component.html',
  styleUrls: ['./agregar-serie.component.css']
})
export class AgregarSerieComponent implements OnInit {
  s = new Serie();
  g = new Genero();
  p = new Pais();
  paises: Pais[];
  selectPais = 0;
  generos: Genero[];
  selectGenero = 0;

  constructor(private router: Router, private paisService: PaisService, private generoService: GeneroService, private serieService: SerieService) { }

  ngOnInit(): void {
    this.llenarGeneros();
    this.llenarPaises();
  }

  llenarGeneros() {
    this.generoService.getList().subscribe(res => {
      this.generos = res;
    });
  }

  llenarPaises() {
    this.paisService.getList().subscribe(res => {
      this.paises = res;
    });
  }
  
  guardar() {
    this.s.genero = new Genero();
    this.s.pais = new Pais();
    this.s.genero.id = this.selectGenero;
    this.s.pais.id = this.selectPais;
    this.serieService.add(this.s).subscribe(res => {
      alert("SE HA AGREGADO LA SERIE");
      this.router.navigate(["series/listar"]);
    })
  }
}
