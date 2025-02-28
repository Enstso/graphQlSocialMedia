import React from "react";
import ListComment from "../components/comment/commentList";
import { graphql } from "../gql";
import { useQuery } from "@apollo/client";

interface User {
  username: string;
  photo?: string | null;
}

interface Comment {
  content: string;
  author: User;
}

interface Article {
  title: string;
  content: string;
  author: User;
  likes?: { id: string }[] | null;
  comments?: Comment[] | null;
}

const GET_ARTICLE_BY_ID = graphql(`
  query GetArticle($getArticleId: ID!) {
    getArticle(id: $getArticleId) {
      id
      title
      content
      author {
        username
        photo
      }
      likes {
        id
      }
      comments {
        content
        author {
          username
          photo
        }
      }
    }
  }
`);

const DetailArticle: React.FC<{ id: string }> = ({ id }) => {
  const { loading, error, data } = useQuery(GET_ARTICLE_BY_ID, {
    variables: { getArticleId: id },
  });

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error || !data?.getArticle) {
    return <p className="text-center text-red-500">Article not found.</p>;
  }

  const article: Article = {
    ...data.getArticle,
    likes: data.getArticle.likes?.filter((like) => like !== null) ?? [],
    comments: data.getArticle.comments?.filter((comment) => comment !== null) ?? [],
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">{article.title}</h1>
      <h3 className="text-xl text-gray-600 mb-4">By {article.author.username}</h3>
      <p className="text-gray-700 mb-6">{article.content}</p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h2>
        <ListComment comments={article.comments || []} />
      </div>
    </div>
  );
};

export default DetailArticle;
