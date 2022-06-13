import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from 'src/app/entity/pais';
import { PaisService } from 'src/app/service/pais.service';

@Component({
  selector: 'app-listar-pais',
  templateUrl: './listar-pais.component.html',
  styleUrls: ['./listar-pais.component.css']
})
export class ListarPaisComponent implements OnInit {
  pais: Pais[];
  paises = ["AMERICA", "EUROPA", "ASIA", "OCEANIA", "AFRICA"];
  search = "";
  p = new Pais();
  constructor(private router: Router, private paisService: PaisService) { }

  ngOnInit(): void {
    this.llenar();
  }

  llenar() {
    this.paisService.getList().subscribe(res => {
      this.pais = res;
    })
  }

  editar(p: Pais) {
    localStorage.setItem("id", p.id.toString());
    this.router.navigate(["paises/editar"]);
  }

  eliminar(p: Pais) {
    localStorage.setItem("id", p.id.toString());
    this.router.navigate(["paises/eliminar"]);
  }

  buscar() {
    this.p.nombre = this.search;
    this.paisService.findByName(this.p).subscribe(res => {
      this.pais = res;
    });
  }
}
