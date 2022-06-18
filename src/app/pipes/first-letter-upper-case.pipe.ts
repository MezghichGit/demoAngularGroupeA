import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterUpperCase'
})
export class FirstLetterUpperCasePipe implements PipeTransform {

  transform(value: string): string {
   let temp = value.substring(1, value.length);
   return value[0].toUpperCase()+temp;
  }

}
