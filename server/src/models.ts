import { Article, Comment, Like, User } from "@prisma/client";

export type TrackModel = {
  id: string;
  title: string;
  authorId: string;
  thumbnail: string;
  length: number;
  modulesCount: number;
};

export type AuthorModel = {
  id: string;
  name: string;
  photo: string;
};

export type FilmModel = {
  id: string;
  title: string;
  people: string[]
}
export type PeopleModel = {
  id: string;
  name: string;
  eye_color: string;
  films: string[]
}

export type UserModel = User
export type CommentModel = Comment
export type LikeModel = Like
export type ArticleModel = Article