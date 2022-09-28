import { Facultad } from "../facultad/facultad";

export class Escuela {
    idEscuela: any;
	nombre: any;
	cantAlumnos: any;
	recursoFiscal: any;
	licenciada: any;
	clasificacion: any;
	fechaRegistro: any;
	facultad: Facultad = new Facultad();
}
