import { QueryInput, Cache } from "@urql/exchange-graphcache";

// custom function that allows us to properly cast types when calling on cacheExchange
export function betterUpdateQuery<Result, Query>(
	cache: Cache,
	qi: QueryInput,
	result: any,
	fn: (r: Result, q: Query) => Query
) {
	// updateQuery takes in queryInput and an updator function to update the data
	return cache.updateQuery(qi, (data) => fn(result, data as any) as any);
}
