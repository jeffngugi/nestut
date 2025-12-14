import { Faker } from '@faker-js/faker';
import { PropertyFeature } from '../entities/propertyFeature.entity';

import { setSeederFactory } from 'typeorm-extension';

export const PropertyFeatureFactory = setSeederFactory(
  PropertyFeature,
  (faker: Faker) => {
    const feature = new PropertyFeature();
    feature.area = faker.number.int({ min: 25, max: 25000 });
    feature.bathroom = faker.number.int({ min: 1, max: 3 });
    feature.bedrooms = faker.number.int({ min: 1, max: 3 });
    feature.parkingSpots = faker.number.int({ min: 1, max: 3 });
    feature.hasBalcony = faker.datatype.boolean();
    feature.hasGardenYard = faker.datatype.boolean();
    feature.hasSwimmingPool = faker.datatype.boolean();

    return feature;
  },
);
