import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./src/**/*.graphql'],
  path: join(process.cwd(), 'src/graphql.classes.ts'),
  outputAs: 'class',
  watch: true,
  emitTypenameField: true,
  skipResolverArgs: true,
});
