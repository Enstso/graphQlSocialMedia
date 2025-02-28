import React from "react";
import { useMutation } from "@apollo/client";
import FormCreateArticle from "../components/article/FormCreate";
import { graphql } from "../gql";

// Définition de la mutation GraphQL
const CREATE_ARTICLE = graphql(`
  mutation createArticle($title: String!, $content: String!) {
    createArticle(title: $title, content: $content) {
      code
      message
      success
    }
  }
`);

const CreateArticle: React.FC = () => {
  const [createArticle, { data, loading, error }] = useMutation(CREATE_ARTICLE);

  const handleSubmit = async (formData: { title: string; content: string }) => {
    try {
      const response = await createArticle({
        variables: {
          title: formData.title,
          content: formData.content,
        },
      });
      console.log("Response:", response);
    } catch (err) {
      console.error("Error creating article:", err);
    }
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-6">Article Creation</h1>
      <FormCreateArticle handleSubmit={handleSubmit} />
      {loading && <p className="text-blue-500">Submitting...</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}
      {data && data.createArticle && data.createArticle.success && (
        <p className="text-green-500">{data.createArticle.message}</p>
      )}
    </div>
  );
};

export default CreateArticle;
