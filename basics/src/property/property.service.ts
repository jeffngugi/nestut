import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertyService {
  findAll() {
    return 'This will give all properties';
  }

  findOne() {
    return 'This will return one property';
  }

  create() {
    return 'This will create a property';
  }

  update() {
    return 'This wil update a property';
  }
}
