import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  agregar() {
    this.router.navigate(["series/agregar"]);
  }
}
