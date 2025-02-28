import { useState } from "react";
import { Heart } from "lucide-react"; // Import de l'icône cœur de Lucid
import { useQuery } from "@apollo/client";
import { graphql } from "../gql";

// Définir la requête GraphQL
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

export default function Articles() {
  const { data, loading, error } = useQuery(GET_ARTICLES); // Récupérer les articles
  console.log(error);
  const [likedArticles, setLikedArticles] = useState<any>([]); // État pour gérer les articles likés

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
              <button className="text-blue-500 hover:underline">
                View article
              </button>
              <button
                onClick={() => toggleLike(article.id)}
                className="text-gray-500 hover:text-red-500"
              >
                {/* Afficher l'icône remplie si l'article est liké, sinon vide */}
                <Heart
                  className={`h-6 w-6 ${
                    likedArticles.includes(article.id)
                      ? "text-red-500"
                      : "text-gray-500"
                  }`}
                  fill={likedArticles.includes(article.id) ? "red" : "none"} // Définit la couleur de l'icône
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
