import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
export const graphqlConfig: ApolloDriverConfig = {
  playground: true,
  autoSchemaFile: true,
  driver: ApolloDriver,
};
