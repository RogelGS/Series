import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genero } from 'src/app/entity/genero';
import { GeneroService } from 'src/app/service/genero.service';

@Component({
  selector: 'app-listar-genero',
  templateUrl: './listar-genero.component.html',
  styleUrls: ['./listar-genero.component.css']
})
export class ListarGeneroComponent implements OnInit {
  genero: Genero[];
  g: Genero = new Genero();
  search: String = "";
  constructor(private router: Router, private generoService: GeneroService) { }

  ngOnInit(): void {
    this.llenar();
  }

  llenar() {
    this.generoService.getList().subscribe(res => {
      this.genero = res;
    });
  }

  editar(g: Genero) {
    localStorage.setItem("id", g.id.toString());
    this.router.navigate(["generos/editar"])
  }

  eliminar(g: Genero) {
    localStorage.setItem("id", g.id.toString());
    this.router.navigate(["generos/eliminar"])
  }
  
  buscar() {
    this.g.nombre = this.search;
    this.generoService.findByName(this.g).subscribe(res => {
      this.genero = res;
    });
  }
}
