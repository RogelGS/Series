import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from 'src/app/entity/pais';
import { PaisService } from 'src/app/service/pais.service';

@Component({
  selector: 'app-editar-pais',
  templateUrl: './editar-pais.component.html',
  styleUrls: ['./editar-pais.component.css']
})
export class EditarPaisComponent implements OnInit {
  p = new Pais();
  select = 0;
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

  editar() {
    this.paisService.edith(this.p).subscribe(res => {
      alert("SE HA EDITADO EL PAIS");
      this.router.navigate(["paises/listar"]);
    })
  }

  opcion() {

  }
}
