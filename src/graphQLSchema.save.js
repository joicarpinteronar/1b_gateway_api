import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	campaignsMutations,
	campaignsQueries,
	campaignsTypeDef
} from './campaigns/typeDefs';

import {
	favoritesMutations,
	favoritesQueries,
	favoritesTypeDef
} from './favorites/typeDefs';

import {
	commentsMutations,
	commentsQueries,
	commentsTypeDef
} from './comments/typeDefs';

import {
	pointsMutations,
	pointsQueries,
	pointsTypeDef
} from './points/typeDefs';

import {
	statsMutations,
	statsQueries,
	statsTypeDef
} from './stats/typeDefs';

import {
	usersMutations,
	usersQueries,
	usersTypeDef
} from './users/typeDefs';

import campaignsResolvers from './campaigns/resolvers';
import favoritesResolvers from './favorites/resolvers';
import commentsResolvers from './comments/resolvers';
import pointsResolvers from './points/resolvers';
import statsResolvers from './stats/resolvers';
import usersResolvers from './users/resolvers';


// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		campaignsTypeDef,
		favoritesTypeDef,
		commentsTypeDef,
		pointsTypeDef,
    statsTypeDef,
		usersTypeDef,
		authTypeDef
	],
	[
		campaignsQueries,
		favoritesQueries,
		commentsQueries,
		pointsQueries,
    statsQueries,
		usersTypeDef,
		authTypeDef
	],
	[
		campaignsMutations,
		favoritesMutations,
		commentsMutations,
		pointsQueries,
		statsMutations,
		usersTypeDef,
		authTypeDef
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		campaignsResolvers
		usersResolvers
		authResolvers
	)
});
