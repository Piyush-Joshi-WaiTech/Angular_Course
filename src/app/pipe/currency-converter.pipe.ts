import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter',
})
export class CurrencyConverterPipe implements PipeTransform {
  transform(value: number, ...args: number[]): unknown {
    if (args.length > 0) {
      let [data] = args;
      return value * data;
    } else {
      return value * 85;
    }
  }
}
