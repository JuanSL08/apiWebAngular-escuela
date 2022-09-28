import { Component, OnInit } from '@angular/core';
import { EscuelaService } from '../services/escuela/escuela.service';
import { Escuela } from './escuela';

@Component({
  selector: 'app-escuela',
  templateUrl: './escuela.component.html',
  styleUrls: ['./escuela.component.css']
})
export class EscuelaComponent implements OnInit {

  titulo: string = "Escuelas";

  escuelas: any;
  arrEscuelas: any;

  reporte_escuelas: string = 'http://localhost:8080/api-rest/report/escuelas/download';
  reporte_escuelas_alumnado: string = 'http://localhost:8080/api-rest/report/escuelas-alumnos/download';
  reporte_escuelas_recursofiscal: string = 'http://localhost:8080/api-rest/report/escuelas-recursofiscal/download';

  aclaracion: string = "La generación de estos reportes está hecha solo para forma visual, puesto que el redireccionamiento directo a "+
                        "los endpoints de la parte back NO es para nada correcto.";

  constructor(private serviceEscuela: EscuelaService) { }

  ngOnInit(): void {
    this.serviceEscuela.getAll()
                  .subscribe(resp => {
                    this.escuelas = resp;
                    this.arrEscuelas = this.escuelas.escuelaResponse.escuela;
                  })
  }



}
