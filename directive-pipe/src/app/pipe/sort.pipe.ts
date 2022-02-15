import { Pipe, PipeTransform } from '@angular/core';

interface indexable {
  [key: string]: any;
  id: number;
}

@Pipe({
  name: 'sort'
})
export class SortPipe<T extends indexable> implements PipeTransform {

  transform(value: T[], key: string = '', direction: number = 1): T[] {
    if (!Array.isArray(value) || !key) {
      return value;
    }

    return value.sort( (a, b) => {
      if (typeof a[key] === 'number' && typeof b[key] === 'number') {
        return (a[key] - b[key]) * direction;
      }

      return String(a[key])
        .toLowerCase()
        .localeCompare(
          String(b[key]).toLowerCase()
        ) * direction;
    });
  }

}
