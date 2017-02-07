import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sulkeet'
})
export class SulkeetPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    const x = value.indexOf("(");
    return value.substring(0,x);
  }

}
