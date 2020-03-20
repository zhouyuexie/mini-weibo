import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class Moments2NumberPipe implements PipeTransform {
  transform(value: any) {
    const number = Number(value);
    if (isNaN(number)) {
      throw new BadRequestException('Validation failed');
    }
    return number;
  }
}
