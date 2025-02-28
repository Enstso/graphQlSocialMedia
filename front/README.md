
# Social Network Frontend

Ce projet est la partie frontend d'un réseau social permettant aux utilisateurs de s'inscrire, publier des articles, commenter et liker les publications.


Le back est fonctionnel

## 🚀 Technologies utilisées

- **React** - Framework pour la construction de l'interface utilisateur
- **Apollo Client** - Gestion des requêtes GraphQL
- **GraphQL Codegen** - Génération automatique des hooks/types à partir du schéma GraphQL
- **TailwindCSS** - Pour le stylisme de l'interface
- **React Router** - Gestion de la navigation
- **JWT (JSON Web Token)** - Gestion de l'authentification

## 📌 Fonctionnalités

- **Authentification des Utilisateurs**
  - Inscription et connexion avec validation
  - Gestion des sessions utilisateur via JWT

- **Gestion des Articles**
  - Création, affichage, modification et suppression d'articles
  - Affichage des articles avec leur auteur, contenu, commentaires et likes

- **Interactions avec les Articles**
  - Ajout et affichage des commentaires
  - Système de "like" pour les articles

- **Navigation et Filtrage**
  - Vue des derniers articles publiés sur la page d'accueil
  - Filtrage des articles par auteur ou popularité (nombre de likes)

## 📦 Installation et Configuration

1. **Cloner le dépôt**
   ```bash
   git clone  https://github.com/Enstso/graphQlSocialMedia.git
   cd graphQlSocialMedia
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

4. **Lancer l'application**
   ```bash
   npm run dev
   ```

## 📂 Structure du Projet

```
/social-network-frontend
│-- /src
│   │-- /components  # Composants UI réutilisables
│   │-- /views       # Pages principales (Accueil, Connexion, etc.)
│   │-- /gql         # Hooks et requêtes GraphQL
│-- /public         # Assets publics (images, favicon...)
│-- .env.example    # Exemple de configuration d'environnement
│-- package.json    # Fichier de configuration npm
│-- README.md       # Documentation du projet
```

## 🛠️ Requêtes GraphQL

Les requêtes et mutations GraphQL sont définies dans `/src/gql/queries.ts` et `/src/gql/mutations.ts`, puis utilisées avec Apollo Client.

Exemple de requête pour récupérer les articles :
```graphql
query GetArticles {
  articles {
    id
    title
    content
    author {
      name
    }
    likes {
      id
    }
  }
}
```

# Routes à tester

- http://localhost:5173/
- http://localhost:5173/articles
- http://localhost:5173/login
- http://localhost:5173/register
- http://localhost:5173/articles/create
- http://localhost:5173/articles/update/1127e1cc-49f0-424b-8044-5ae54dfb53cf
- http://localhost:5173/article/1127e1cc-49f0-424b-8044-5ae54dfb53cf

## ✅ Améliorations futures
- le like n'est pas fonctionnel
