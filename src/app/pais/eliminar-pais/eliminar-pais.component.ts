import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from 'src/app/entity/pais';
import { PaisService } from 'src/app/service/pais.service';

@Component({
  selector: 'app-eliminar-pais',
  templateUrl: './eliminar-pais.component.html',
  styleUrls: ['./eliminar-pais.component.css']
})
export class EliminarPaisComponent implements OnInit {
  select = 0;
  p = new Pais();
  constructor(private router: Router, private paisService: PaisService) { }

  ngOnInit(): void {
    this.buscar();
  }

  buscar() {
    this.p.id = Number(localStorage.getItem("id"));
    this.paisService.find(this.p).subscribe(res => {
      this.p = res;
      this.select = res.continente;
    });
  }

  opcion() {
    this.p.continente = this.select;
  }

  eliminar() {
    this.paisService.delete(this.p).subscribe(res => {
      alert("SE HA ELIMINADO EL PAIS");
      this.router.navigate(["paises/listar"]);
    })
  }

}
