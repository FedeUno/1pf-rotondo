import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversor',
})
export class ConversorPipe implements PipeTransform {
  transform(value: any): string {
    let result = value.name + ' ' + value.lastname;
    return result;
  }
}
