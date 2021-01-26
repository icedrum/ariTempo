import { hostViewClassName } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatotiempo'
})
export class FormatotiempoPipe implements PipeTransform {
  
  //, ...args: unknown[]
  transform(value: number): string {
    
    let horas=Math.floor(value/3600);
    
    value=value - (horas*3600);
    if (horas>99) {horas=99};
    let minutos=Math.floor(value/60);
    
    value = value - (minutos* 60);

    let texto = ("00" + horas.toString()).slice(-2);
    texto = texto + ":" + ("00" + minutos.toString()).slice(-2);
    texto = texto + ":" + ("00" + value.toString()).slice(-2);
    

    
    
    return texto;
  }


}
