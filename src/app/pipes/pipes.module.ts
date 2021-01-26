import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatotiempoPipe } from './formatotiempo.pipe';



@NgModule({
  declarations: [FormatotiempoPipe],
  exports: [FormatotiempoPipe]
})
export class PipesModule { }
