import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { HousesModule } from './houses/houses.module';
import { GraphQLModule } from '@nestjs/graphql';
import { graphqlConfig } from './grapgql.config';
import { ApolloDriver } from '@nestjs/apollo';
import { ProfileModule } from './profile/profile.module';
import { ReserveModule } from './reserve/reserve.module';
import StripeModule from './stripe/stripe.module';
import { StripeController } from './stripe/stripe.controller';
import { StripeService } from './stripe/stripe.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
/*
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from './orm.config';
TypeOrmModule.forRoot(pgConfig)
*/
@Module({
  imports: [
    ConfigModule.forRoot(),
    //DatabaseModule,
    GraphQLModule.forRoot(graphqlConfig),
    HousesModule,
    ProfileModule,
    ReserveModule,
    StripeModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      port: 5432,
      host: process.env.HOST,
      database: process.env.DB,
      synchronize: true,
      entities: ['dist/**/entities/*{.ts,.js}'],
    }),
  ],
  controllers: [AppController, StripeController],
  providers: [AppService, StripeService],
})
export class AppModule {}
