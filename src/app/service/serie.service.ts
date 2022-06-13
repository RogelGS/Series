import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Serie } from '../entity/serie';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  url = "http://localhost:7500/apiserie/";
  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<Serie[]>(this.url+"listar");
  }

  add(s: Serie) {
    return this.http.post<Serie>(this.url+"guardar", s);
  }

  edith(s: Serie) {
    return this.http.post<Serie>(this.url+"editar", s);
  }

  delete(s: Serie) {
    return this.http.post<Serie>(this.url+"eliminar", s);
  }

  find(s: Serie) {
    return this.http.post<Serie>(this.url+"buscar", s);
  }

  findByName(s: Serie) {
    return this.http.post<Serie[]>(this.url+"buscarNombre", s);
  }

  findByGender(s: Serie) {
    return this.http.post<Serie[]>(this.url+"buscarGenero", s);
  }
}
