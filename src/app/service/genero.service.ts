import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genero } from '../entity/genero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  url = "http://localhost:7500/apigenero/";

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<Genero[]>(this.url+"listar");
  }

  add(g: Genero) {
    return this.http.post<Genero>(this.url+"guardar", g);
  }

  edith(g: Genero) {
    return this.http.post<Genero>(this.url+"editar", g);
  }

  delete(g: Genero) {
    return this.http.post<Genero>(this.url+"eliminar", g);
  }

  find(g: Genero) {
    return this.http.post<Genero>(this.url+"buscar", g);
  }

  findByName(g: Genero) {
    return this.http.post<Genero[]>(this.url+"buscarNombre", g);
  }
}
