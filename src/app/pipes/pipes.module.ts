import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatotiempoPipe } from './formatotiempo.pipe';
import { FormatominutosegundoPipe } from './formatominutosegundo.pipe';



@NgModule({
  declarations: [FormatotiempoPipe, FormatominutosegundoPipe],
  exports: [FormatotiempoPipe,FormatominutosegundoPipe]
})
export class PipesModule { }
