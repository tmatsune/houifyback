import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { ConfigService } from '@nestjs/config';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const key = process.env.STRIPE_KEY1;
//var stripe = new Stripe(key, { apiVersion: '2022-11-15' });
@Injectable()
export class StripeService {
  private stripe: Stripe;
  constructor() {
    this.stripe = new Stripe(key, { apiVersion: '2022-11-15' });
  }
  test(num: number) {
    return num;
  }
  async getPaymentIntent(cost: number) {
    try {
      const res = await this.stripe.paymentIntents.create({
        amount: cost,
        currency: 'usd',
        payment_method_types: ['card'],
      });
      return res.client_secret;
    } catch (err) {
      return 'payment failed';
    }
  }
}
/*
  constructor(private stripe: Stripe) {
    //this.stripe = new Stripe(key, { apiVersion: '2022-11-15' });
  }

*/
