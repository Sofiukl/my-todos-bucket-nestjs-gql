import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { Bucket } from '../graphql.classes';
import { BucketService } from './bucket.service';
import { PubSub } from 'graphql-subscriptions';
import { BucketGuard } from './bucket.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AdminGuard } from '../auth/guards/admin.guard';

const pubSub = new PubSub();

@Resolver('Bucket')
export class BucketResolver {
  constructor(private readonly bucketService: BucketService) {}

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Query('recentBuckets')
  @UseGuards(BucketGuard)
  async recentBuckets() {
    return this.bucketService.findAll();
  }

  @Mutation('createBucket')
  async create(
    @Args('name') name: string,
    @Args('category') category: string,
  ): Promise<Bucket> {
    const createdBucket = await this.bucketService.create(name, category);
    pubSub.publish('bucketCreated', { bucketCreated: createdBucket });
    return createdBucket;
  }

  @Subscription('bucketCreated')
  catCreated() {
    return pubSub.asyncIterator('bucketCreated');
  }
}
