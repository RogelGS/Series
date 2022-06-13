import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  agregar() {
    this.router.navigate(["paises/agregar"]);
  }
}
