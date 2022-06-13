import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneroService } from '../service/genero.service';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  agregar() {
    this.router.navigate(["generos/agregar"]);
  }
}
