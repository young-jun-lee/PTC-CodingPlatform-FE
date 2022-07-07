import { cacheExchange, Resolver } from "@urql/exchange-graphcache";
import Router from "next/router";
import { dedupExchange, Exchange, fetchExchange } from "urql";
import { pipe, tap } from "wonka";
import {
	LoginMutation,
	LogoutMutation,
	MeDocument,
	MeQuery,
	RegisterMutation,
} from "../generated/graphql";
import { betterUpdateQuery } from "./betterUpdateQuery";
import { isServer } from "./isServer";

const errorExchange: Exchange =
	({ forward }) =>
	(ops$) => {
		return pipe(
			forward(ops$),
			tap(({ error }) => {
				if (error?.message.includes("not authenticated")) {
					Router.replace("/login");
				}
			})
		);
	};

export const createUrqlClient = (ssrExchange: any, ctx: any) => {
	let cookie = "";
	if (isServer()) {
		cookie = ctx?.req?.headers?.cookie;
	}
	// url: "http://localhost:4000/graphql",
	return {
		url: [
			process.env.NEXT_PUBLIC_API_URL as string,
			"https://s3.amazonaws.com/",
		],
		fetchOptions: {
			credentials: "include" as const,
			headers: cookie ? { cookie } : undefined,
		},
		exchanges: [
			dedupExchange,
			cacheExchange({
				updates: {
					Mutation: {
						// we don't want to actually invalidate the cache, bc we want to keep the user, instead we just set the mequery value to null
						// updater function sets the query me value to null
						// MeDocument is the auto-generated document in graphql that represents the MeQuery
						logout: (_result, _args, cache, _info) => {
							betterUpdateQuery<LogoutMutation, MeQuery>(
								cache,
								{ query: MeDocument },
								_result,
								() => ({ me: null })
							);
						},
						// will run whenever one of these mutations runs, and will update the cache and set the user by updating the MeQuery
						// (to know whos logged in)
						login: (_result, args, cache, info) => {
							betterUpdateQuery<LoginMutation, MeQuery>(
								cache,
								{ query: MeDocument },
								_result,
								// the result is of type LoginMutation and query is MeQuery
								(result, query) => {
									if (result.login.errors) {
										return query;
									} else {
										return {
											// update our meQuery by setting it to the logged in user
											me: result.login.user,
										};
									}
								}
							);
						},
						register: (_result, args, cache, info) => {
							betterUpdateQuery<RegisterMutation, MeQuery>(
								cache,
								{ query: MeDocument },
								_result,
								(result, query) => {
									if (result.register.errors) {
										return query;
									} else {
										return {
											// update our meQuery by setting it to the logged in user
											me: result.register.user,
										};
									}
								}
							);
						},
					},
				},
			}),
			ssrExchange,
			errorExchange,
			fetchExchange,
		],
	};
};
