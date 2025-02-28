import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useParams, useNavigate } from 'react-router-dom';
import FormUpdateArticle from '../components/article/FormUpdate'; // Assurez-vous d'importer votre composant enfant
import { graphql } from '../gql'; // Assurez-vous que votre fonction `graphql` est bien définie

// Définition de la mutation GraphQL
const UPDATE_ARTICLE = graphql(`
  mutation updateArticle($updateArticleId: ID!, $title: String, $content: String) {
    updateArticle(id: $updateArticleId, title: $title, content: $content) {
      code
      message
      success
      article {
        content
        id
      }
    }
  }
`);

const UpdateArticle: React.FC = () => {
  const { id } = useParams(); // Récupérer l'ID de l'article depuis l'URL
  const navigate = useNavigate();
  
  const [articleData, setArticleData] = useState({ title: '', content: '' }); // État pour stocker les données de l'article
  const [updateArticle, { data, loading, error }] = useMutation(UPDATE_ARTICLE);

  useEffect(() => {
    if (id) {
      setArticleData({ title: 'Initial Title', content: 'Initial Content' }); // Remplacer par une récupération d'article en fonction de l'ID
    }
  }, [id]);

  const handleUpdate = async (formData: { title: string; content: string }) => {
    if (!id) {
      console.error('Article ID is missing!');
      return;
    }
    
    try {
      const response = await updateArticle({
        variables: {
          updateArticleId: id, // Utiliser l'ID de l'article dans l'URL
          title: formData.title,
          content: formData.content,
        },
      });
      console.log('Update Response:', response);
      
      if (response.data?.updateArticle?.success) {
        alert('Article updated successfully!');
        navigate('/articles'); // Rediriger vers la liste des articles après la mise à jour
      }
    } catch (err) {
      console.error('Error updating article:', err);
    }
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-6">Update Article</h1>
      <FormUpdateArticle
        handleUpdate={handleUpdate}
        initialTitle={articleData.title}
        initialContent={articleData.content}
      />
      {loading && <p className="text-blue-500">Updating...</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}
      {data && data.updateArticle?.success && (
        <p className="text-green-500">{data.updateArticle.message}</p>
      )}
    </div>
  );
};

export default UpdateArticle;
