import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EscuelaService } from '../services/escuela/escuela.service';
import { Escuela } from './escuela';
import { FacultadService } from 'src/app/services/facultad/facultad.service';
import { Facultad } from '../facultad/facultad';

@Component({
  selector: 'app-form-escuela',
  templateUrl: './form-escuela.component.html',
  styleUrls: ['./form-escuela.component.css']
})
export class FormEscuelaComponent implements OnInit {

  titulo: string = "Registro de estudiante";
  escuela: Escuela = new Escuela();

  idFacultad: number = 0;
  facTemp: any;
  facultades: any;
  arrFacultades: Facultad[] = new Array;

  constructor(private serviceEscuela: EscuelaService, private router: Router, private serviceFacultad: FacultadService) { }

  ngOnInit(): void {
    this.serviceFacultad.getAll()
              .subscribe(respuesta => {
                this.facultades = respuesta;
                this.arrFacultades = this.facultades.facultadResponse.facultad;
              })
  }

  create(): void{
    this.serviceFacultad.get(this.idFacultad).subscribe(fac => {
      this.facTemp = fac;
      this.escuela.facultad = this.facTemp.facultadResponse.facultad;
    });
    console.log(this.escuela.fechaRegistro);
    console.log(this.escuela);

    this.serviceEscuela.create(this.escuela).subscribe(
      res => this.router.navigate(['/escuelas'])
    );
  }

}
