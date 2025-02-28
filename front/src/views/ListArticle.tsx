import { useState } from "react";
import { Heart } from "lucide-react"; // Import de l'icône cœur de Lucid
import { useQuery, useMutation } from "@apollo/client";
import { graphql } from "../gql";
import { useNavigate } from "react-router-dom"; // Import du hook useNavigate pour la navigation

// Définir la requête GraphQL pour récupérer les articles
const GET_ARTICLES = graphql(`
  query GetArticles {
    getArticles {
      id
      content
      title
      author {
        username
      }
    }
  }
`);
const LIKE_ARTICLE = graphql(`
  mutation LikeArticle($likeArticleId: ID!) {
    likeArticle(id: $likeArticleId) {
      code
      message
      success
    }
  }
`);

// Définir la mutation GraphQL pour supprimer un like d'un article
const REMOVE_LIKE_ARTICLE = graphql(`
  mutation RemoveLikeArticle($removeLikeArticleId: ID!) {
    removeLikeArticle(id: $removeLikeArticleId) {
      code
      message
      success
    }
  }
`);
// Définir la mutation GraphQL pour supprimer un article
const DELETE_ARTICLE = graphql(`
  mutation DeleteArticle($deleteArticleId: ID!) {
    deleteArticle(id: $deleteArticleId) {
      code
      message
      success
    }
  }
`);

export default function Articles() {
  const { data, loading, error, refetch } = useQuery(GET_ARTICLES); // Récupérer les articles
  const [deleteArticle] = useMutation(DELETE_ARTICLE); // Mutation pour supprimer l'article
  const [likedArticles, setLikedArticles] = useState<any>([]); // État pour gérer les articles likés
  const navigate = useNavigate(); // Hook de navigation

  // Fonction pour gérer les likes
  const toggleLike = (articleId: string) => {
    setLikedArticles((prevState: any) => {
      if (prevState.includes(articleId)) {
        return prevState.filter((id: string) => id !== articleId); // Retirer du tableau si déjà liké
      } else {
        return [...prevState, articleId]; // Ajouter au tableau des articles likés
      }
    });
  };

  // Fonction pour supprimer un article
  const handleDelete = async (articleId: string) => {
    try {
      const response = await deleteArticle({ variables: { deleteArticleId: articleId } });
      if (response.data?.deleteArticle?.success) {
        // Recharger la liste des articles après la suppression
        refetch();
        alert("Article supprimé avec succès !");
      } else {
        alert("Erreur lors de la suppression de l'article.");
      }
    } catch (error) {
      console.error("Erreur de suppression d'article:", error);
      alert("Une erreur est survenue.");
    }
  };

  // Affichage du contenu en fonction de l'état de la requête
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Articles</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.getArticles?.map((article: any) => (
          <div key={article.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="text-sm text-gray-500 mt-2">
              By {article.author.username}
            </p>
            <div className="mt-4 flex justify-between text-sm text-gray-600">
              <button
                onClick={() => navigate(`/article/${article.id}`)} // Navigation vers la page de détail
                className="text-blue-500 hover:underline"
              >
                View article
              </button>
              <button
                onClick={() => toggleLike(article.id)}
                className="text-gray-500 hover:text-red-500"
              >
                <Heart
                  className={`h-6 w-6 ${
                    likedArticles.includes(article.id)
                      ? "text-red-500"
                      : "text-gray-500"
                  }`}
                  fill={likedArticles.includes(article.id) ? "red" : "none"}
                />
              </button>
              <button
                onClick={() => handleDelete(article.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
