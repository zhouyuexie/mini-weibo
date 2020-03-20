import { Moments2NumberPipe } from '../pipe/moments.pipe';
import { BadRequestException } from '@nestjs/common';

describe('MomentsPipe', () => {
  it('should convert string to number', () => {
    const moments2NumberPipe = new Moments2NumberPipe();

    const number = moments2NumberPipe.transform('1');

    expect(number).toEqual(1);
  });

  it('should throw bad request error when convert nan to number', () => {
    const moments2NumberPipe = new Moments2NumberPipe();

    expect(() => {
      moments2NumberPipe.transform('string');
    }).toThrowError(new BadRequestException('Validation failed'));
  });

  it('should return original value when invoke nothing', () => {
    const moments2NumberPipe = new Moments2NumberPipe();

    const value = moments2NumberPipe.transform();

    expect(value).toBeUndefined();
  });
});
