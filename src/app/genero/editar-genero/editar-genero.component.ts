import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genero } from 'src/app/entity/genero';
import { GeneroService } from 'src/app/service/genero.service';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {
  g: Genero = new Genero();
  constructor(private router: Router, private generoService: GeneroService) { }

  ngOnInit(): void {
    this.buscar();
  }

  buscar() {
    this.g.id = Number(localStorage.getItem("id"));
    this.generoService.find(this.g).subscribe(res => {
      this.g = res;
    });
  }

  editar() {
    this.generoService.edith(this.g).subscribe(res => {
      alert("SE HA EDITADO EL GENERO");
      this.router.navigate(["generos/listar"]);
    })
  }
}
