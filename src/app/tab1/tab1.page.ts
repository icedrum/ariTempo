import { Component } from '@angular/core';
//import { TemporizadorInt } from 'src/app/interaces/temporizador-int';
import { RelojesClasService } from '../services/relojes-clas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  relojes: RelojesClasService[]=[]  ;
  relojActivo: number=0;
   id:any;  //para el setinterval
  decimassegundos : number ;  

constructor() { 
  this.decimassegundos=0;
  this.relojActivo=0;
  this.AnyadeRelojes();
  console.log(this.relojes);
  
  
}


private EnciendeReloj(){
 
  if (!this.id){
  
  
    this.id= setInterval(() => {      
      //
      this.relojes[this.relojActivo].SumaSegund();
      console.log('asd');
      
    },1000);
  }
}

private ApagaReloj(){
  if (this.id){
    clearInterval(this.id);
    this.id=null;

  }
}

private PonReloj(IdReloj:RelojesClasService){
  console.log(IdReloj);
  
  for (let r of this.relojes ){
    if (r.id != IdReloj.id){
      r.enMarcha=false;
      r.segundoActual=0;
      r.segundosLlevaActual=0;
      
    }
  }
  IdReloj.enMarcha=true;
  this.relojActivo=IdReloj.id-1;

  if (this.id){
    this.ApagaReloj();
  }
  else {
    this.EnciendeReloj();
  }


  
}








private AnyadeRelojes(){
  let reloj1= new RelojesClasService(1,"Largo",60,15,false,true,0)
  this.relojes.push( reloj1);
  reloj1= new RelojesClasService(2,"corto",30,10,false,true,0);
  this.relojes.push( reloj1)
  reloj1= new RelojesClasService(3,"Largo Intenso",60,10,false,true,0);
  this.relojes.push( reloj1);
  reloj1= new RelojesClasService(4,"corto intenso",10,2,false,true,0);
  this.relojes.push( reloj1);


    //this.relojes.push( reloj1,reloj2,reloj3,reloj4);
  }



}
