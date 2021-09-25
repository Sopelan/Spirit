import { ThisReceiver } from "@angular/compiler";

export class Preguntas {
    public pregunta : string;
    public opciones : string[];
    public respuesta : string;
    public categoria : string;
    public imagen : string = "";
    constructor(pregunta:string,respuesta:string,opciones:string[],categoria:string)
    {
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.respuesta = respuesta;
        this.categoria = categoria;
    }
    public siEsCorrecto(respuesta:string):boolean
    {
       
        if(this.respuesta == respuesta)
                return true
        return false;
    }
}
