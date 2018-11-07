import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doubleAge'
})
export class DoubleAgePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value*2;
  }

}
