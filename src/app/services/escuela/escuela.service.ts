import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Escuela } from 'src/app/escuela/escuela';

@Injectable({
  providedIn: 'root'
})
export class EscuelaService {

  url: any = 'http://localhost:8080/api-rest/escuelas';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url);
  }

  create(escuela: Escuela) {
    return this.http.post(this.url, escuela);
  }

  get(id: number) {
    return this.http.get(this.url+'/'+id);
  }

  update(escuela: Escuela) {
    return this.http.put(this.url, escuela);
  }

  delete(id: number) {
    return this.http.delete(this.url+'/'+id);
  }

}
