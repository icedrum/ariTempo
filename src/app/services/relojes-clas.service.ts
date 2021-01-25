import { Injectable } from '@angular/core';
//import { TemporizadorInt } from '../interaces/temporizador-int';

@Injectable({
  providedIn: 'root'
})
export class RelojesClasService {
    id:number;
    descrip: string;
    segundostintActivo: number ;
    segundostintDescanso: number;
    enMarcha: boolean;
    estaEnSerieActivo: boolean;
    segundoActual: number;



  constructor(id:number,
              descrip: string,
              segundostintActivo: number ,
              segundostintDescanso: number,
              enMarcha: boolean,
              estaEnSerieActivo: boolean,
              segundoActual: number){

                      this.id=id;
                      this.descrip=descrip;
                      this.segundostintActivo=segundostintActivo;
                      this.segundostintDescanso=segundostintDescanso;
                      this.estaEnSerieActivo=estaEnSerieActivo;
                      this.segundoActual=segundoActual;
                      this.enMarcha=enMarcha;

            
  }




  SumaSegund(){
      this.segundoActual++;

  }
}
