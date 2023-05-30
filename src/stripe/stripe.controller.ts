import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  NotFoundException,
  Post,
} from '@nestjs/common';

import { StripeService } from './stripe.service';

type stripeInput = {
  name: string;
  num: number;
  allstar: boolean;
};
type numInput = {
  cost: number;
};
@Controller('/housifyPay')
export class StripeController {
  constructor(private stripeService: StripeService) {}
  @Post('/stripeConnect')
  @HttpCode(200)
  async stripeConnection(@Body() userinput: numInput) {
    const { cost } = userinput;
    try {
      //const data = this.stripeService.test(cost);
      const data = await this.stripeService.getPaymentIntent(Number(cost));
      return { success: data };
    } catch (err) {
      throw new NotFoundException();
    }
  }
  @Post('/getStripe')
  @HttpCode(200)
  getStripe(@Body() userInput: stripeInput) {
    try {
      const { name, num, allstar } = userInput;
      return {
        username: name,
        usernum: num,
        userallstart: allstar,
      };
    } catch (err) {
      throw new NotFoundException();
    }
  }
  @Get('/test')
  @HttpCode(200)
  testConnect(): object {
    try {
      return {
        success: process.env.STRIPE_KEY,
      };
    } catch (err) {
      return {
        err: 'could not get item',
      };
    }
  }
}
