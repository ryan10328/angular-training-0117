import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: Array<any>, args?: any): any {
    if (args) {
      switch (args) {
        case 'active':
          return value.filter(item => !item.done);
        case 'completed':
          return value.filter(item => item.done);
        default:
          return value;
      }
    }
    return value;
  }
}
