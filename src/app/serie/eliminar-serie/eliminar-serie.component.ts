import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genero } from 'src/app/entity/genero';
import { Pais } from 'src/app/entity/pais';
import { Serie } from 'src/app/entity/serie';
import { GeneroService } from 'src/app/service/genero.service';
import { PaisService } from 'src/app/service/pais.service';
import { SerieService } from 'src/app/service/serie.service';

@Component({
  selector: 'app-eliminar-serie',
  templateUrl: './eliminar-serie.component.html',
  styleUrls: ['./eliminar-serie.component.css']
})
export class EliminarSerieComponent implements OnInit {
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
    this.buscar();
  }

  llenarGeneros() {
    this.generoService.getList().subscribe(res => {
      this.generos = res;
    });
  }

  buscar() {
    this.s.id = Number(localStorage.getItem("id"));
    this.serieService.find(this.s).subscribe(res => {
      this.s = res;
      this.selectGenero = res.genero.id;
      this.selectPais = res.pais.id;
    })
  }

  llenarPaises() {
    this.paisService.getList().subscribe(res => {
      this.paises = res;
    });
  }
  
  eliminar() {
    this.serieService.delete(this.s).subscribe(res => {
      alert("SE HA ELIMINADO LA SERIE");
      this.router.navigate(["series/listar"]);
    })
  }
}
