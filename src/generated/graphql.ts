import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type MessageField = {
  __typename?: 'MessageField';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: UserResponse;
  forgotPassword: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  register: UserResponse;
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};

export type Query = {
  __typename?: 'Query';
  listUsers?: Maybe<Array<User>>;
  me?: Maybe<User>;
  userPoints?: Maybe<Array<Submissions>>;
};


export type QueryUserPointsArgs = {
  username: Scalars['String'];
};

export type Submissions = {
  __typename?: 'Submissions';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  part: Scalars['String'];
  points: Scalars['Int'];
  question: Scalars['Int'];
  updatedAt: Scalars['String'];
  updates: Scalars['Int'];
  username: Scalars['String'];
  week: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['Int'];
  isAdmin: Scalars['Boolean'];
  lastName: Scalars['String'];
  totalPoints: Scalars['Int'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<MessageField>>;
  success?: Maybe<Array<MessageField>>;
  user?: Maybe<User>;
};

export type UsernamePasswordInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type RegularMessageFragment = { __typename?: 'MessageField', message: string, field: string };

export type RegularUserFragment = { __typename?: 'User', id: number, username: string, isAdmin: boolean };

export type RegularUserResponseFragment = { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'MessageField', message: string, field: string }> | null, success?: Array<{ __typename?: 'MessageField', message: string, field: string }> | null, user?: { __typename?: 'User', id: number, username: string, isAdmin: boolean } | null };

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'MessageField', message: string, field: string }> | null, success?: Array<{ __typename?: 'MessageField', message: string, field: string }> | null, user?: { __typename?: 'User', id: number, username: string, isAdmin: boolean } | null } };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'MessageField', message: string, field: string }> | null, success?: Array<{ __typename?: 'MessageField', message: string, field: string }> | null, user?: { __typename?: 'User', id: number, username: string, isAdmin: boolean } | null } };

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'MessageField', message: string, field: string }> | null, success?: Array<{ __typename?: 'MessageField', message: string, field: string }> | null, user?: { __typename?: 'User', id: number, username: string, isAdmin: boolean } | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'MessageField', message: string, field: string }> | null, success?: Array<{ __typename?: 'MessageField', message: string, field: string }> | null, user?: { __typename?: 'User', id: number, username: string, isAdmin: boolean } | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', isAdmin: boolean, id: number, username: string } | null };

export type UserPointsQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type UserPointsQuery = { __typename?: 'Query', userPoints?: Array<{ __typename?: 'Submissions', week: number, question: number, part: string, points: number }> | null };

export const RegularMessageFragmentDoc = gql`
    fragment RegularMessage on MessageField {
  message
  field
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
  isAdmin
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularMessage
  }
  success {
    ...RegularMessage
  }
  user {
    ...RegularUser
  }
}
    ${RegularMessageFragmentDoc}
${RegularUserFragmentDoc}`;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useChangePasswordMutation() {
  return Urql.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument);
};
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useForgotPasswordMutation() {
  return Urql.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument);
};
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
    isAdmin
  }
}
    ${RegularUserFragmentDoc}`;

export function useMeQuery(options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'>) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const UserPointsDocument = gql`
    query UserPoints($username: String!) {
  userPoints(username: $username) {
    week
    question
    part
    points
  }
}
    `;

export function useUserPointsQuery(options: Omit<Urql.UseQueryArgs<UserPointsQueryVariables>, 'query'>) {
  return Urql.useQuery<UserPointsQuery>({ query: UserPointsDocument, ...options });
};