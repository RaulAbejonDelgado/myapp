import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoMoneda'
})
export class FormatoMonedaPipe implements PipeTransform {

  transform(value: string, args: string[]): any {
    if(!value || args.length == 0 ){
      return value;
    }else{
      return value + args;
    }
    
  }

}
