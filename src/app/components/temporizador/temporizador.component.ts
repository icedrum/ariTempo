import { Component, OnInit,Input } from '@angular/core';
import { TemporizadorInt } from 'src/app/interaces/temporizador-int';
import { RelojesClasService } from '../../services/relojes-clas.service';



@Component({
  selector: 'app-temporizador',
  templateUrl: './temporizador.component.html',
  styleUrls: ['./temporizador.component.scss'],
})
export class TemporizadorComponent implements OnInit {

  @Input() reloj: RelojesClasService;
  
  constructor() { }

  ngOnInit() {}

  



}
