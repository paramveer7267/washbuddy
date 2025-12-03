import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class TrimEmptyValuesPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (typeof value !== 'object' || value === null) return value;

    Object.keys(value).forEach((key) => {
      // ❌ REMOVE this check entirely:
      // if (value[key] === '') value[key] = undefined;

      // ✔ Keep nested object recursion
      if (typeof value[key] === 'object') {
        value[key] = this.transform(value[key], metadata);
      }
    });

    return value;
  }
}
