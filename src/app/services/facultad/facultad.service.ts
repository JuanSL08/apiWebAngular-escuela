import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facultad } from 'src/app/facultad/facultad';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {

  url: any = 'http://localhost:8080/api-rest/facultades';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url);
  }

  get(id: number) {
    return this.http.get(this.url+'/'+id);
  }

}
