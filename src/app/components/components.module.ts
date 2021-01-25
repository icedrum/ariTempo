import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemporizadorComponent } from './temporizador/temporizador.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [TemporizadorComponent],
  imports: [
    CommonModule,PipesModule
  ],
  exports: [TemporizadorComponent]
})
export class ComponentsModule { }
