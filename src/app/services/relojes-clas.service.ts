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

    //Cuantos segundos tiene el intervalo que esta en marcha
    segundosIntervalorActual:number;
    seguntosTotales:number;
    valorProgress:number ;  //ira de 0 a 1

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
                this.seguntosTotales=0;
                this.valorProgress=0;
  }


  devuelveProgess():void{
      
    
    if (this.segundoActual>=this.segundosIntervalorActual){
      this.valorProgress= 1
    } else {
      this.valorProgress= this.segundoActual/this.segundosIntervalorActual
    }

  }

  SumaSegund(){
      this.segundoActual++;
      this.seguntosTotales++;

      if (this.segundoActual>=this.segundosIntervalorActual) {this.CambiarIntervalo()}

      //Fijamos el PB
     this.devuelveProgess();
     
     //


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
