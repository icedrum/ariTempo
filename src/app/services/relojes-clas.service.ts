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
    intervalo:number =0 ;


    //Hay que reestablecer
    hayQueReestablecer: boolean;
    textoAyuda:string="";

    //Cuantos segundos tiene el intervalo que esta en marcha
    segundosIntervalorActual:number;
    seguntosTotales:number;
    valorProgress:number ;  //ira de 0 a 1

    //Audios 
    arrAudios: string[]=[];

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
                this.hayQueReestablecer=false;

                //los audios  ../assets/sonidos/sonido1.mp3
                let mipaz: string="../assets/sonidos/";
                let aux: string;
                for (var  i=1;i<=7;i++){
                  aux=mipaz + "sonido" + i.toString() + ".mp3";
                  this.arrAudios[i-1]=aux;
                }
              }


  devuelveProgess():void{
      
    
    if (this.segundoActual>=this.segundosIntervalorActual){
      this.valorProgress= 1
    } else {
      this.valorProgress= this.segundoActual/this.segundosIntervalorActual
    }

  }

  SumaSegund(){

    //Dependiendo si el intervalo es 500 ms, 100... cada x hara un segundo
    
   
    
    
    this.intervalo++;
    let res:number=this.intervalo % 2;
   
    
    if (res==0) {
      this.SumaUnSegundo()    
    } else {
      //por si hay qye hacer algo mas

      if (this.hayQueReestablecer){


        this.textoAyuda="";


        this.hayQueReestablecer=false; 
        
      }
    
    
    }  


  }



  SumaUnSegundo(){
      this.segundoActual++;
      this.seguntosTotales++;

      if (this.segundoActual>this.segundosIntervalorActual) {
        this.CambiarIntervalo()}
      else {

          //Esta dentro de la serie
          //
          let queda=this.segundosIntervalorActual- this.segundoActual;
          let ayuda:string ="";
          
          switch (queda) {
            case 30:
              //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
              ayuda="30";

              break;
            case 10:
              //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
              ayuda="10"
              break;
            case 3:
            case 2:
            case 1:
              ayuda=queda.toString();
              this.playAudio(3);

              //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
              break;
            default:
              //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
              
          }
          
          if (ayuda != ""){
            this.hayQueReestablecer=true;
            this.textoAyuda=ayuda;
          }
      }


        

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
    this.segundoActual=1;
    this.intervalo=0;
    this.textoAyuda="";
    let cual:number= 4;
    if (this.estaEnSerieActivo) { cual=5}
    this.playAudio(cual);
  }

  // 0.- 
  playAudio(cual: number){
    let audio = new Audio();
    audio.src =  this.arrAudios[cual];
    
    console.log(audio.src);
    
    audio.load();
    audio.play();
  }
  


}
