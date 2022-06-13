import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genero } from 'src/app/entity/genero';
import { GeneroService } from 'src/app/service/genero.service';

@Component({
  selector: 'app-agregar-genero',
  templateUrl: './agregar-genero.component.html',
  styleUrls: ['./agregar-genero.component.css']
})
export class AgregarGeneroComponent implements OnInit {
  g: Genero = new Genero();
  constructor(private router: Router, private generoService: GeneroService) { }

  ngOnInit(): void {
  }

  guardar() {
    this.generoService.add(this.g).subscribe(res => {
      alert("SE HA AGREGADO EL GENERO");
      this.router.navigate(["generos/listar"]);
    })
  }
}
