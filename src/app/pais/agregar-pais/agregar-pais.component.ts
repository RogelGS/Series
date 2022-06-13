import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from 'src/app/entity/pais';
import { PaisService } from 'src/app/service/pais.service';

@Component({
  selector: 'app-agregar-pais',
  templateUrl: './agregar-pais.component.html',
  styleUrls: ['./agregar-pais.component.css']
})
export class AgregarPaisComponent implements OnInit {
  p: Pais = new Pais();
  select: number = 0;
  constructor(private router: Router, private paisService: PaisService) { }

  ngOnInit(): void {
  }

  guardar() {
    this.paisService.add(this.p).subscribe(res => {
      alert("SE HA GUARDADO EL PAIS");
      this.router.navigate(["paises/listar"]);
    })
  }

  opcion() {
    this.p.continente = this.select;
  }
}
