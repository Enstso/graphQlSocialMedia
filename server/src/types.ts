import { GraphQLResolveInfo } from 'graphql';
import { TrackModel, AuthorModel, FilmModel, PeopleModel } from './models';
import { Context } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Article = {
  __typename?: 'Article';
  author: User;
  comments?: Maybe<Array<Maybe<Comment>>>;
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  likes?: Maybe<Array<Maybe<Like>>>;
  title: Scalars['String']['output'];
};

export type ArticleResponse = {
  __typename?: 'ArticleResponse';
  article?: Maybe<Article>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Comment = {
  __typename?: 'Comment';
  article: Article;
  author: User;
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type CommentResponse = {
  __typename?: 'CommentResponse';
  code: Scalars['Int']['output'];
  comment?: Maybe<Comment>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type CreateUserResponse = {
  __typename?: 'CreateUserResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type Doctor = {
  __typename?: 'Doctor';
  name?: Maybe<Scalars['String']['output']>;
  speciality?: Maybe<Speciality>;
};

export type Film = {
  __typename?: 'Film';
  id?: Maybe<Scalars['ID']['output']>;
  people: Array<Maybe<People>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type IncrementNumberOfLikesReponse = {
  __typename?: 'IncrementNumberOfLikesReponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  track?: Maybe<Track>;
};

export type IncrementTrackViewReponse = {
  __typename?: 'IncrementTrackViewReponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  track?: Maybe<Track>;
};

export type Like = {
  __typename?: 'Like';
  article: Article;
  author: User;
  id: Scalars['ID']['output'];
};

export type LikeResponse = {
  __typename?: 'LikeResponse';
  code: Scalars['Int']['output'];
  like?: Maybe<Like>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  commentArticle?: Maybe<CommentResponse>;
  createArticle?: Maybe<ArticleResponse>;
  createUser: CreateUserResponse;
  deleteArticle?: Maybe<ArticleResponse>;
  deleteComment?: Maybe<CommentResponse>;
  incrementNumberOfLikes: IncrementNumberOfLikesReponse;
  incrementTrackView: IncrementTrackViewReponse;
  likeArticle?: Maybe<LikeResponse>;
  removeLikeArticle?: Maybe<LikeResponse>;
  signIn: SignInResponse;
  updateArticle?: Maybe<ArticleResponse>;
};


export type MutationCommentArticleArgs = {
  articleId: Scalars['ID']['input'];
  content: Scalars['String']['input'];
};


export type MutationCreateArticleArgs = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateUserArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationDeleteArticleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationIncrementNumberOfLikesArgs = {
  id: Scalars['ID']['input'];
};


export type MutationIncrementTrackViewArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLikeArticleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveLikeArticleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSignInArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationUpdateArticleArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type People = {
  __typename?: 'People';
  eyeColor?: Maybe<Scalars['String']['output']>;
  films: Array<Maybe<Film>>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  add: Scalars['Float']['output'];
  closestColor?: Maybe<Scalars['String']['output']>;
  divide?: Maybe<Scalars['Float']['output']>;
  doctors?: Maybe<Array<Maybe<Doctor>>>;
  getArticle?: Maybe<Article>;
  getArticles: Array<Maybe<Article>>;
  getArticlesByAuthor: Array<Maybe<Article>>;
  getCommentsByArticle: Array<Maybe<Comment>>;
  getFilms: Array<Maybe<Film>>;
  getLikesByArticle: Array<Maybe<Like>>;
  getPeople: Array<Maybe<People>>;
  getProfile?: Maybe<User>;
  getTracks: Array<Track>;
  multiply: Scalars['Float']['output'];
  substract: Scalars['Float']['output'];
};


export type QueryAddArgs = {
  number1: Scalars['Float']['input'];
  number2: Scalars['Float']['input'];
};


export type QueryClosestColorArgs = {
  hexa: Scalars['String']['input'];
};


export type QueryDivideArgs = {
  number1: Scalars['Float']['input'];
  number2: Scalars['Float']['input'];
};


export type QueryDoctorsArgs = {
  specialities?: InputMaybe<Array<Speciality>>;
};


export type QueryGetArticleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetCommentsByArticleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetLikesByArticleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetProfileArgs = {
  username: Scalars['String']['input'];
};


export type QueryMultiplyArgs = {
  number1: Scalars['Float']['input'];
  number2: Scalars['Float']['input'];
};


export type QuerySubstractArgs = {
  number1: Scalars['Float']['input'];
  number2: Scalars['Float']['input'];
};

export type SignInResponse = {
  __typename?: 'SignInResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export enum Speciality {
  Ophtalmologist = 'OPHTALMOLOGIST',
  Psychologist = 'PSYCHOLOGIST'
}

export type Track = {
  __typename?: 'Track';
  author?: Maybe<User>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  numberOfLikes?: Maybe<Scalars['Int']['output']>;
  numberOfViews?: Maybe<Scalars['Int']['output']>;
  thumbnail: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  photo?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Article: ResolverTypeWrapper<Article>;
  ArticleResponse: ResolverTypeWrapper<ArticleResponse>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Comment: ResolverTypeWrapper<Comment>;
  CommentResponse: ResolverTypeWrapper<CommentResponse>;
  CreateUserResponse: ResolverTypeWrapper<CreateUserResponse>;
  Doctor: ResolverTypeWrapper<Doctor>;
  Film: ResolverTypeWrapper<FilmModel>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  IncrementNumberOfLikesReponse: ResolverTypeWrapper<Omit<IncrementNumberOfLikesReponse, 'track'> & { track?: Maybe<ResolversTypes['Track']> }>;
  IncrementTrackViewReponse: ResolverTypeWrapper<Omit<IncrementTrackViewReponse, 'track'> & { track?: Maybe<ResolversTypes['Track']> }>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Like: ResolverTypeWrapper<Like>;
  LikeResponse: ResolverTypeWrapper<LikeResponse>;
  Mutation: ResolverTypeWrapper<{}>;
  People: ResolverTypeWrapper<PeopleModel>;
  Query: ResolverTypeWrapper<{}>;
  SignInResponse: ResolverTypeWrapper<SignInResponse>;
  Speciality: Speciality;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Track: ResolverTypeWrapper<TrackModel>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Article: Article;
  ArticleResponse: ArticleResponse;
  Boolean: Scalars['Boolean']['output'];
  Comment: Comment;
  CommentResponse: CommentResponse;
  CreateUserResponse: CreateUserResponse;
  Doctor: Doctor;
  Film: FilmModel;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  IncrementNumberOfLikesReponse: Omit<IncrementNumberOfLikesReponse, 'track'> & { track?: Maybe<ResolversParentTypes['Track']> };
  IncrementTrackViewReponse: Omit<IncrementTrackViewReponse, 'track'> & { track?: Maybe<ResolversParentTypes['Track']> };
  Int: Scalars['Int']['output'];
  Like: Like;
  LikeResponse: LikeResponse;
  Mutation: {};
  People: PeopleModel;
  Query: {};
  SignInResponse: SignInResponse;
  String: Scalars['String']['output'];
  Track: TrackModel;
  User: User;
};

export type ArticleResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']> = {
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Like']>>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ArticleResponse'] = ResolversParentTypes['ArticleResponse']> = {
  article?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  article?: Resolver<ResolversTypes['Article'], ParentType, ContextType>;
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CommentResponse'] = ResolversParentTypes['CommentResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CreateUserResponse'] = ResolversParentTypes['CreateUserResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DoctorResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Doctor'] = ResolversParentTypes['Doctor']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  speciality?: Resolver<Maybe<ResolversTypes['Speciality']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilmResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Film'] = ResolversParentTypes['Film']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  people?: Resolver<Array<Maybe<ResolversTypes['People']>>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IncrementNumberOfLikesReponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['IncrementNumberOfLikesReponse'] = ResolversParentTypes['IncrementNumberOfLikesReponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  track?: Resolver<Maybe<ResolversTypes['Track']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IncrementTrackViewReponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['IncrementTrackViewReponse'] = ResolversParentTypes['IncrementTrackViewReponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  track?: Resolver<Maybe<ResolversTypes['Track']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Like'] = ResolversParentTypes['Like']> = {
  article?: Resolver<ResolversTypes['Article'], ParentType, ContextType>;
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikeResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LikeResponse'] = ResolversParentTypes['LikeResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  like?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  commentArticle?: Resolver<Maybe<ResolversTypes['CommentResponse']>, ParentType, ContextType, RequireFields<MutationCommentArticleArgs, 'articleId' | 'content'>>;
  createArticle?: Resolver<Maybe<ResolversTypes['ArticleResponse']>, ParentType, ContextType, RequireFields<MutationCreateArticleArgs, 'content' | 'title'>>;
  createUser?: Resolver<ResolversTypes['CreateUserResponse'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'password' | 'username'>>;
  deleteArticle?: Resolver<Maybe<ResolversTypes['ArticleResponse']>, ParentType, ContextType, RequireFields<MutationDeleteArticleArgs, 'id'>>;
  deleteComment?: Resolver<Maybe<ResolversTypes['CommentResponse']>, ParentType, ContextType, RequireFields<MutationDeleteCommentArgs, 'id'>>;
  incrementNumberOfLikes?: Resolver<ResolversTypes['IncrementNumberOfLikesReponse'], ParentType, ContextType, RequireFields<MutationIncrementNumberOfLikesArgs, 'id'>>;
  incrementTrackView?: Resolver<ResolversTypes['IncrementTrackViewReponse'], ParentType, ContextType, RequireFields<MutationIncrementTrackViewArgs, 'id'>>;
  likeArticle?: Resolver<Maybe<ResolversTypes['LikeResponse']>, ParentType, ContextType, RequireFields<MutationLikeArticleArgs, 'id'>>;
  removeLikeArticle?: Resolver<Maybe<ResolversTypes['LikeResponse']>, ParentType, ContextType, RequireFields<MutationRemoveLikeArticleArgs, 'id'>>;
  signIn?: Resolver<ResolversTypes['SignInResponse'], ParentType, ContextType, RequireFields<MutationSignInArgs, 'password' | 'username'>>;
  updateArticle?: Resolver<Maybe<ResolversTypes['ArticleResponse']>, ParentType, ContextType, RequireFields<MutationUpdateArticleArgs, 'id'>>;
};

export type PeopleResolvers<ContextType = Context, ParentType extends ResolversParentTypes['People'] = ResolversParentTypes['People']> = {
  eyeColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  films?: Resolver<Array<Maybe<ResolversTypes['Film']>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  add?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<QueryAddArgs, 'number1' | 'number2'>>;
  closestColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryClosestColorArgs, 'hexa'>>;
  divide?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<QueryDivideArgs, 'number1' | 'number2'>>;
  doctors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Doctor']>>>, ParentType, ContextType, Partial<QueryDoctorsArgs>>;
  getArticle?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType, RequireFields<QueryGetArticleArgs, 'id'>>;
  getArticles?: Resolver<Array<Maybe<ResolversTypes['Article']>>, ParentType, ContextType>;
  getArticlesByAuthor?: Resolver<Array<Maybe<ResolversTypes['Article']>>, ParentType, ContextType>;
  getCommentsByArticle?: Resolver<Array<Maybe<ResolversTypes['Comment']>>, ParentType, ContextType, RequireFields<QueryGetCommentsByArticleArgs, 'id'>>;
  getFilms?: Resolver<Array<Maybe<ResolversTypes['Film']>>, ParentType, ContextType>;
  getLikesByArticle?: Resolver<Array<Maybe<ResolversTypes['Like']>>, ParentType, ContextType, RequireFields<QueryGetLikesByArticleArgs, 'id'>>;
  getPeople?: Resolver<Array<Maybe<ResolversTypes['People']>>, ParentType, ContextType>;
  getProfile?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetProfileArgs, 'username'>>;
  getTracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>;
  multiply?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<QueryMultiplyArgs, 'number1' | 'number2'>>;
  substract?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<QuerySubstractArgs, 'number1' | 'number2'>>;
};

export type SignInResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SignInResponse'] = ResolversParentTypes['SignInResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TrackResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Track'] = ResolversParentTypes['Track']> = {
  author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  numberOfLikes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numberOfViews?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Article?: ArticleResolvers<ContextType>;
  ArticleResponse?: ArticleResponseResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  CommentResponse?: CommentResponseResolvers<ContextType>;
  CreateUserResponse?: CreateUserResponseResolvers<ContextType>;
  Doctor?: DoctorResolvers<ContextType>;
  Film?: FilmResolvers<ContextType>;
  IncrementNumberOfLikesReponse?: IncrementNumberOfLikesReponseResolvers<ContextType>;
  IncrementTrackViewReponse?: IncrementTrackViewReponseResolvers<ContextType>;
  Like?: LikeResolvers<ContextType>;
  LikeResponse?: LikeResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  People?: PeopleResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SignInResponse?: SignInResponseResolvers<ContextType>;
  Track?: TrackResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

