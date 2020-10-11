import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypower'
})
export class MypowerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
