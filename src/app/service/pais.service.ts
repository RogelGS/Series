import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais } from '../entity/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  url = "http://localhost:7500/apipais/"
  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<Pais[]>(this.url+"listar");
  }

  add(p: Pais) {
    return this.http.post<Pais>(this.url+"guardar", p)
  }

  edith(p: Pais) {
    return this.http.post<Pais>(this.url+"editar", p)
  }

  delete(p: Pais) {
    return this.http.post<Pais>(this.url+"eliminar", p)
  }

  find(p: Pais) {
    return this.http.post<Pais>(this.url+"buscar", p)
  }

  findByName(p: Pais) {
    return this.http.post<Pais[]>(this.url+"buscarNombre", p)
  }
}
