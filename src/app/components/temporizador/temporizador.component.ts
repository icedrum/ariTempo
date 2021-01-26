import { Component, OnInit,Input } from '@angular/core';
import { TemporizadorInt } from 'src/app/interaces/temporizador-int';



@Component({
  selector: 'app-temporizador',
  templateUrl: './temporizador.component.html',
  styleUrls: ['./temporizador.component.scss'],
})
export class TemporizadorComponent implements OnInit {

  @Input() reloj: TemporizadorInt;

  constructor() { }

  ngOnInit() {}

  

 EnciendeApagaTemporizador(){
   this.reloj.enMarcha=!this.reloj.enMarcha;
 }


  SumaSegundo(){

    //Esta parado el reloj
    if (!this.reloj.enMarcha) return;

    this.reloj.segundoActual ++;

    let segundosSerie=this.reloj.segundostintActivo;
    if (!this.reloj.estaEnSerieActivo) {segundosSerie=this.reloj.segundostintDescanso}

    //Aqui podriamos ver si
    if (this.reloj.segundoActual>= segundosSerie) {
        //cambiamos de serie
        this.reloj.estaEnSerieActivo=!this.reloj.estaEnSerieActivo;
        this.reloj.segundoActual=0;


        //Si hubiera que hacer algo mas

    

        //Nos salimos
    }


  }


}
