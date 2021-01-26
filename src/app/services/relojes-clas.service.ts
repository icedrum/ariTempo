import { Injectable } from '@angular/core';
//import { timeStamp } from 'console';
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

    segundosIntervalorActual:number;
    segundosLlevaActual: number;

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

                if (this.estaEnSerieActivo){
                  this.segundosIntervalorActual=this.segundostintActivo;
                } else {
                  this.segundosIntervalorActual=this.segundostintDescanso;
                }
                this.segundosLlevaActual=0;
  }


  devuelveProgess():number{
      
    
    if (this.segundosLlevaActual>=this.segundosIntervalorActual){
      return  1
    } else {
      return this.segundosLlevaActual/this.segundosIntervalorActual
    }

  }

  SumaSegund(){
      this.segundoActual++;
      this.segundosLlevaActual++;

      if (this.segundosLlevaActual>=this.segundosIntervalorActual) {this.CambiarIntervalo()}

      
      // Si queda pocp


  }

  private CambiarIntervalo():void{
    
    if (this.estaEnSerieActivo){ 
        this.estaEnSerieActivo=false;
        this.segundosIntervalorActual=this.segundostintDescanso;
    } else {
      this.estaEnSerieActivo=true;
      this.segundosIntervalorActual=this.segundostintActivo;
    }
    this.segundosLlevaActual=0;
  }
}
