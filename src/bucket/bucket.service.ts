import { Injectable } from '@nestjs/common';
import { Bucket } from '../graphql.classes';

@Injectable()
export class BucketService {
  private readonly buckets: Array<Bucket> = [
    { id: 'b1', name: 'profession', category: 'skills' },
  ];

  create(name: string, category: string): Bucket {
    const bucket = new Bucket();
    bucket.id = 'b1' + this.buckets.length + 1;
    bucket.name = name;
    bucket.category = category;
    this.buckets.push(bucket);
    return bucket;
  }

  findAll(): Bucket[] {
    return this.buckets;
  }

  findOneById(id: string): Bucket {
    return this.buckets.find((bucket) => bucket.id === id);
  }
}
