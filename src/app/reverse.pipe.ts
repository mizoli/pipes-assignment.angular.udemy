import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "reverse",
})
export class ReversePipe implements PipeTransform {
  transform(value: string): any {
    if (value.length > 0) {
      const charArray = value.split("");
      charArray.reverse();
      return charArray.join("");
    }
    return value;
  }
}
