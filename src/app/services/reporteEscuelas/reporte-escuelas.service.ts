import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReporteEscuelasService {

  url: any = 'http://localhost:8080/api-rest/report/escuelas/download';

  constructor(private http: HttpClient) { }

  getReport(){
    /*
    this.http.get().subscribe((responseMessage) => {
      let file = new Blob([responseMessage], {type: 'application/pdf'});
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    });*/
  }

}
