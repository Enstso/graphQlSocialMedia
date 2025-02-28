# Backend - Réseau Social GraphQL

## Description
Ce projet est un réseau social où les utilisateurs peuvent s'inscrire, publier des articles, commenter les publications d'autres utilisateurs, et "liker" des articles.

Le backend utilise **Apollo Server**, **GraphQL**, et **Prisma** pour la gestion de la base de données, ainsi que **JWT** pour l'authentification des utilisateurs.

## Technologies Utilisées
- **Node.js** avec **TypeScript**
- **Apollo Server** pour le serveur GraphQL
- **Prisma** pour la gestion de la base de données
- **MariaDB** comme base de données
- **GraphQL Codegen** pour générer automatiquement les types et les requêtes
- **bcrypt** pour le hachage des mots de passe
- **jsonwebtoken** pour l'authentification des utilisateurs
- **Docker** pour le déploiement local avec **MariaDB** et **phpMyAdmin**

---

## Installation et Configuration

### Prérequis
- **Node.js** et **npm**
- **Docker** et **Docker Compose** (optionnel pour exécuter la base de données en conteneur)

### 1. Cloner le projet
```sh
git clone https://github.com/ton-repo/ton-projet.git
cd ton-projet/server
```

### 2. Installer les dépendances
```sh
npm install
```

### 3. Configurer l'environnement
Créer un fichier `.env` à la racine du projet et y ajouter :
```env
DB_PASSWORD=tonmotdepasse
DB_DATABASE=tonbasededonnees
JWT_SECRET=tonsecret
```

### 4. Lancer la base de données avec Docker (obligatoire)
Si vous souhaitez exécuter MariaDB et phpMyAdmin en conteneur Docker, utilisez la commande suivante :
```sh
docker-compose up -d
```
La base de données sera accessible sur `localhost:3310` et phpMyAdmin sur `http://localhost:8089`

### 5. Générer le client Prisma et exécuter les migrations
```sh
npx prisma generate
npx prisma migrate dev --name init
```

### 6. Lancer le serveur en mode développement
```sh
npm run dev
```
Le serveur tournera sur `http://localhost:4000`

---

## Fonctionnalités Implémentées

### Authentification des utilisateurs
- Inscription (`createUser`)
- Connexion (`signIn`) avec gestion des sessions via JWT

### Gestion des articles
- Création (`createArticle`)
- Lecture (`getArticles`, `getArticle`)
- Mise à jour (`updateArticle`)
- Suppression (`deleteArticle`)

### Interaction avec les articles
- Ajout de commentaires (`commentArticle`)
- Suppression de commentaires (`deleteComment`)
- Ajout de likes (`likeArticle`)
- Suppression de likes (`removeLikeArticle`)

---

## API GraphQL
Le schéma GraphQL est défini dans [`typeDefs.ts`](src/graphql/typeDefs.ts).

### Exemples de requêtes

#### Récupérer les articles
```graphql
query {
  getArticles {
    id
    title
    content
    author {
      username
    }
    comments {
      content
    }
    likes {
      author {
        username
      }
    }
  }
}
```

#### Ajouter un article
```graphql
mutation {
  createArticle(title: "Mon Premier Article", content: "Ceci est un test") {
    code
    success
    message
    article {
      id
      title
      content
    }
  }
}
```

---

## Scripts utiles

| Commande | Description |
|----------|------------|
| `npm run dev` | Lancer le serveur en mode développement |
| `npm run start` | Compiler et exécuter le serveur |
| `npm run compile` | Compiler le projet TypeScript |
| `npm run prisma` | Exécuter Prisma CLI |
| `npm run generate` | Générer les types GraphQL |
| `npm run seed` | Exécuter le script de seed Prisma |

---

## Contributions
Les contributions sont les bienvenues ! Assurez-vous de suivre les bonnes pratiques et d'inclure des tests lorsque nécessaire.

---

## Licence
Ce projet est sous licence MIT.

---

## Auteur
- **Ton Nom** - [Ton GitHub](https://github.com/ton-github)

