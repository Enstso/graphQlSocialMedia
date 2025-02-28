import React from "react";
import ListComment from "../components/comment/commentList";
import { graphql } from "../gql";
import { useQuery } from "@apollo/client";
import { useParams } from 'react-router-dom';

// Query to get article details
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
    }
  }
`);

// Query to get comments for the article
const GET_COMMENTS_BY_ARTICLE_ID = graphql(`
  query GetComments($getCommentsByArticleId: ID!) {
    getCommentsByArticle(id: $getCommentsByArticleId) {
      author {
        username
        photo
      }
      content
      id
    }
  }
`);

const DetailArticle: React.FC = () => {
  const { id } = useParams(); // Get article ID from route params

  // Fetch article details
  const { loading, error, data } = useQuery(GET_ARTICLE_BY_ID, {
    variables: { getArticleId: id ? id : '1' },
  });

  // Fetch comments for the article
  const { data: commentsData, loading: commentsLoading, error: commentsError } = useQuery(GET_COMMENTS_BY_ARTICLE_ID, {
    variables: { getCommentsByArticleId: id ? id : '1' },
  });

  // Loading state
  if (loading || commentsLoading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  // Error state
  if (error || commentsError) {
    console.error("GraphQL Error:", error || commentsError);
    return (
      <p className="text-center text-red-500">
        An error occurred while fetching the article or comments.
      </p>
    );
  }

  // If no article is found
  if (!data?.getArticle) {
    return <p className="text-center text-red-500">Article not found.</p>;
  }

  // Destructure article and comments data
  const article = data.getArticle;
  const comments = commentsData?.getCommentsByArticle || [];

  // Transform comments data to remove __typename and handle possible null values
  const transformedComments = comments
    .filter((comment): comment is { id: string; content: string; author: { username: string } } => comment !== null)
    .map(comment => ({
      id: comment.id,
      content: comment.content,
      author: { username: comment.author.username }
    }));

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        {article.title}
      </h1>
      <div className="flex items-center gap-4 mb-4">
        {article.author.photo && (
          <img
            src={article.author.photo}
            alt={article.author.username}
            className="w-10 h-10 rounded-full"
          />
        )}
        <h3 className="text-xl text-gray-600">By {article.author.username}</h3>
      </div>
      <p className="text-gray-700 mb-6">{article.content}</p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h2>
        <ListComment comments={transformedComments} />
      </div>
    </div>
  );
};

export default DetailArticle;
