import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Serie } from 'src/app/entity/serie';
import { SerieService } from 'src/app/service/serie.service';

@Component({
  selector: 'app-listar-serie',
  templateUrl: './listar-serie.component.html',
  styleUrls: ['./listar-serie.component.css']
})
export class ListarSerieComponent implements OnInit {
  serie: Serie[];
  s = new Serie();
  search = "";
  constructor(private router: Router, private serieService: SerieService) { }

  ngOnInit(): void {
    this.llenar();
  }

  llenar() {
    this.serieService.getList().subscribe(res => {
      this.serie = res;
    });
  }

  editar(s: Serie) {
    localStorage.setItem("id", s.id.toString());
    this.router.navigate(["series/editar"]);
  }

  eliminar(s: Serie) {
    localStorage.setItem("id", s.id.toString());
    this.router.navigate(["series/eliminar"]);
  }

  buscar() {
    this.s.nombre = this.search;
    this.serieService.findByName(this.s).subscribe(res => {
      this.serie = res;
    });
  }

}
