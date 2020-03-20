import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class Moments2NumberPipe implements PipeTransform {
  transform(value?: any) {
    if (!value) {
      return value;
    }

    const number = Number(value);
    if (isNaN(number)) {
      throw new BadRequestException('Validation failed');
    }
    return number;
  }
}
