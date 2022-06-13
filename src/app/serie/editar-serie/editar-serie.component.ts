import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genero } from 'src/app/entity/genero';
import { Pais } from 'src/app/entity/pais';
import { Serie } from 'src/app/entity/serie';
import { GeneroService } from 'src/app/service/genero.service';
import { PaisService } from 'src/app/service/pais.service';
import { SerieService } from 'src/app/service/serie.service';

@Component({
  selector: 'app-editar-serie',
  templateUrl: './editar-serie.component.html',
  styleUrls: ['./editar-serie.component.css']
})
export class EditarSerieComponent implements OnInit {
  s = new Serie();
  g = new Genero();
  p = new Pais();
  paises: Pais[];
  generos: Genero[];
  selectPais = 0;
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
  
  editar() {
    this.s.genero.id = this.selectGenero;
    this.s.pais.id = this.selectPais;
    this.serieService.edith(this.s).subscribe(res => {
      alert("SE HA EDITADO LA SERIE");
      this.router.navigate(["series/listar"]);
    })
  }
}
