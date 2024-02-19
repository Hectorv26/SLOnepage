import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneda'
})
export class MonedaPipe implements PipeTransform {

  transform(moneda:number): unknown {
    return new Intl.NumberFormat("de-DE", { currency: "USD" }).format(moneda);
  }

}
