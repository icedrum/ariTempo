import { Injectable } from '@angular/core';
import { timeStamp } from 'console';
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

    private segundosIntervalorActual:number;
    
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
  }


  devuelveProgess():number{
      
    
    if (this.segundoActual>=this.segundosIntervalorActual){
      return  1
    } else {
      return this.segundoActual/this.segundosIntervalorActual
    }

  }

  SumaSegund(){
      this.segundoActual++;


      if (this.segundoActual>=this.segundosIntervalorActual) {this.CambiarIntervalo()}

      



  }

  private CambiarIntervalo():void{
    
    if (this.estaEnSerieActivo){ 
        this.estaEnSerieActivo=false;
        this.segundosIntervalorActual=this.segundostintDescanso;
    } else {
      this.estaEnSerieActivo=true;
      this.segundosIntervalorActual=this.segundostintActivo;
    }
    this.segundoActual=0;
  }
}
