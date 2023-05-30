import { Module } from '@nestjs/common';
import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';

@Module({
  imports: [],
  controllers: [StripeController],
  providers: [StripeController, StripeService],
  exports: [StripeController],
})
export default class StripeModule {}
