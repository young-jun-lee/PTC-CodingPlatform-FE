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

export type CreateSubmissionInput = {
  creatorId?: InputMaybe<Scalars['Float']>;
  existing: Scalars['Boolean'];
  fileKey: Scalars['String'];
  id?: InputMaybe<Scalars['Float']>;
  question: Scalars['String'];
  updates?: InputMaybe<Scalars['Float']>;
};

export type CreateSubmissionResponse = {
  __typename?: 'CreateSubmissionResponse';
  errors?: Maybe<Array<MessageField>>;
  submission?: Maybe<Submissions>;
  success?: Maybe<Array<MessageField>>;
};

export type ExistingSubmissionResponse = {
  __typename?: 'ExistingSubmissionResponse';
  creatorId?: Maybe<Scalars['Float']>;
  errors?: Maybe<Array<MessageField>>;
  existing: Scalars['Boolean'];
  id?: Maybe<Scalars['Float']>;
  updates?: Maybe<Scalars['Float']>;
};

export type MessageField = {
  __typename?: 'MessageField';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Metadata = {
  email: Scalars['String'];
  question: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: UserResponse;
  createSubmission: CreateSubmissionResponse;
  existingSubmission: ExistingSubmissionResponse;
  forgotPassword: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  register: UserResponse;
  uploadFile?: Maybe<S3SubmissionResponse>;
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationCreateSubmissionArgs = {
  options: CreateSubmissionInput;
};


export type MutationExistingSubmissionArgs = {
  question: Scalars['String'];
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


export type MutationUploadFileArgs = {
  presignedUrlInput: PresignedUrlInput;
};

export type PresignedUrlInput = {
  fileName: Scalars['String'];
  fileType: Scalars['String'];
  metadata: Metadata;
  path: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  listUsers?: Maybe<Array<User>>;
  me?: Maybe<User>;
  topScores?: Maybe<Array<TopQuery>>;
  userPoints?: Maybe<Array<Submissions>>;
};

export type S3SubmissionResponse = {
  __typename?: 'S3SubmissionResponse';
  errors?: Maybe<Array<MessageField>>;
  uploadData?: Maybe<SignedUrlData>;
};

export type SignedUrlData = {
  __typename?: 'SignedUrlData';
  fileKey: Scalars['String'];
  signedRequest: Scalars['String'];
};

export type Submissions = {
  __typename?: 'Submissions';
  createdAt: Scalars['String'];
  creatorId: Scalars['Float'];
  fileKey: Scalars['String'];
  id: Scalars['Int'];
  points: Scalars['Int'];
  question: Scalars['String'];
  rank: Scalars['Float'];
  updatedAt: Scalars['String'];
  updates: Scalars['Int'];
};

export type TopQuery = {
  __typename?: 'TopQuery';
  points: Scalars['Float'];
  rank: Scalars['Float'];
  username: Scalars['String'];
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

export type CreateSubmissionMutationVariables = Exact<{
  options: CreateSubmissionInput;
}>;


export type CreateSubmissionMutation = { __typename?: 'Mutation', createSubmission: { __typename?: 'CreateSubmissionResponse', errors?: Array<{ __typename?: 'MessageField', field: string, message: string }> | null, success?: Array<{ __typename?: 'MessageField', field: string, message: string }> | null, submission?: { __typename?: 'Submissions', fileKey: string } | null } };

export type ExistingSubmissionMutationVariables = Exact<{
  question: Scalars['String'];
}>;


export type ExistingSubmissionMutation = { __typename?: 'Mutation', existingSubmission: { __typename?: 'ExistingSubmissionResponse', existing: boolean, id?: number | null, creatorId?: number | null, updates?: number | null, errors?: Array<{ __typename?: 'MessageField', field: string, message: string }> | null } };

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

export type UploadFileMutationVariables = Exact<{
  presignedUrlInput: PresignedUrlInput;
}>;


export type UploadFileMutation = { __typename?: 'Mutation', uploadFile?: { __typename?: 'S3SubmissionResponse', errors?: Array<{ __typename?: 'MessageField', message: string, field: string }> | null, uploadData?: { __typename?: 'SignedUrlData', fileKey: string, signedRequest: string } | null } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', isAdmin: boolean, id: number, username: string } | null };

export type TopScoresQueryVariables = Exact<{ [key: string]: never; }>;


export type TopScoresQuery = { __typename?: 'Query', topScores?: Array<{ __typename?: 'TopQuery', username: string, points: number, rank: number }> | null };

export type UserPointsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserPointsQuery = { __typename?: 'Query', userPoints?: Array<{ __typename?: 'Submissions', id: number, createdAt: string, updatedAt: string, question: string, points: number, fileKey: string, updates: number, creatorId: number }> | null };

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
export const CreateSubmissionDocument = gql`
    mutation CreateSubmission($options: CreateSubmissionInput!) {
  createSubmission(options: $options) {
    errors {
      field
      message
    }
    success {
      field
      message
    }
    submission {
      fileKey
    }
  }
}
    `;

export function useCreateSubmissionMutation() {
  return Urql.useMutation<CreateSubmissionMutation, CreateSubmissionMutationVariables>(CreateSubmissionDocument);
};
export const ExistingSubmissionDocument = gql`
    mutation ExistingSubmission($question: String!) {
  existingSubmission(question: $question) {
    errors {
      field
      message
    }
    existing
    id
    creatorId
    updates
  }
}
    `;

export function useExistingSubmissionMutation() {
  return Urql.useMutation<ExistingSubmissionMutation, ExistingSubmissionMutationVariables>(ExistingSubmissionDocument);
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
export const UploadFileDocument = gql`
    mutation UploadFile($presignedUrlInput: PresignedUrlInput!) {
  uploadFile(presignedUrlInput: $presignedUrlInput) {
    errors {
      ...RegularMessage
    }
    uploadData {
      fileKey
      signedRequest
    }
  }
}
    ${RegularMessageFragmentDoc}`;

export function useUploadFileMutation() {
  return Urql.useMutation<UploadFileMutation, UploadFileMutationVariables>(UploadFileDocument);
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
export const TopScoresDocument = gql`
    query TopScores {
  topScores {
    username
    points
    rank
  }
}
    `;

export function useTopScoresQuery(options?: Omit<Urql.UseQueryArgs<TopScoresQueryVariables>, 'query'>) {
  return Urql.useQuery<TopScoresQuery>({ query: TopScoresDocument, ...options });
};
export const UserPointsDocument = gql`
    query UserPoints {
  userPoints {
    id
    createdAt
    updatedAt
    question
    points
    fileKey
    updates
    creatorId
  }
}
    `;

export function useUserPointsQuery(options?: Omit<Urql.UseQueryArgs<UserPointsQueryVariables>, 'query'>) {
  return Urql.useQuery<UserPointsQuery>({ query: UserPointsDocument, ...options });
};