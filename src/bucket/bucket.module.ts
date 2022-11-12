import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { BucketResolver } from './bucket.resolver';
import { BucketService } from './bucket.service';
import { UsersModule } from '../users/users.module';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [ConfigModule, UsersModule, forwardRef(() => AuthModule)],
  providers: [BucketService, BucketResolver],
})
export class BucketModule {}
