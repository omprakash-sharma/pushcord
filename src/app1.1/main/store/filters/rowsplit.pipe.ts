import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rowsplit'
})
export class RowsplitPipe implements PipeTransform {

  transform(itemList: any[],splitInto:number=2): any {
    return itemList.reduce((previous, next, index) => {
      if (index % splitInto === 0)
        previous.push([next]);
      else
        previous[previous.length - 1].push(next);
      return previous;
    }, <any[][]>[]);
  }

}
