import { Component, OnInit } from '@angular/core';
import { FacultadService } from 'src/app/services/facultad/facultad.service';
import { Facultad } from './facultad';

@Component({
  selector: 'app-facultad',
  templateUrl: './facultad.component.html',
  styleUrls: ['./facultad.component.css']
})
export class FacultadComponent implements OnInit {

  titulo: string = "Facultades";

  facultades: any;
  arrFacultades: Facultad[] = new Array;

  constructor(private serviceFacultad: FacultadService) { }

  ngOnInit(): void {
    this.obtenerFacultades();
  }

  obtenerFacultades() {
    this.serviceFacultad.getAll()
              .subscribe(respuesta => {
                this.facultades = respuesta;
                this.arrFacultades = this.facultades.facultadResponse.facultad;
                console.log(this.arrFacultades);
              })
  }

}
