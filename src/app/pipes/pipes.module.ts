import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatotiempoPipe } from './formatotiempo.pipe';
import { FormatotiempocortoPipe } from './formatotiempocorto.pipe';



@NgModule({
  declarations: [FormatotiempoPipe, FormatotiempocortoPipe],
  exports: [FormatotiempoPipe,FormatotiempocortoPipe]
})
export class PipesModule { }
