import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "shorten"
})
export class ShortenPipe implements PipeTransform{

  transform(value: any, ...args: any[]): any {
    const limit = args[0] || 10;

    return value.length > limit
      ? value.substr(0, limit) + '...'
      : value;
  }

}
