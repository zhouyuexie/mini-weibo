import { Injectable } from '@nestjs/common';
import db from '../../../db/moments.db';

@Injectable()
export class MomentsService {
  public getList(page = 1, size = 10) {
    const start = (page - 1) * size;
    const end = start + size;
    return db.home_timeline.slice(start, end);
  }

  public getDetail(id: number) {
    return db.home_timeline.find((moment) => moment.id === id);
  }
}
