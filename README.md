Here’s the combined README for the full social network project (both backend and frontend) in English:

---

# Social Network GraphQL

This project is a complete social network where users can register, post articles, comment on other users' posts, and "like" articles. It is divided into two parts: the **Backend** and the **Frontend**.

## 🚀 Technologies Used

### Backend
- **Node.js** with **TypeScript**
- **Apollo Server** for the GraphQL server
- **Prisma** for database management
- **MariaDB** as the database
- **JWT** for user authentication
- **bcrypt** for password hashing
- **Docker** for local deployment with **MariaDB** and **phpMyAdmin**

### Frontend
- **React** - Framework for building the user interface
- **Apollo Client** - GraphQL query management
- **GraphQL Codegen** - Automatic generation of hooks/types from the GraphQL schema
- **TailwindCSS** - For UI styling
- **React Router** - For navigation management
- **JWT** (JSON Web Token) - User authentication management

---

## 📦 Installation and Setup

### Backend

1. **Clone the project**
   ```bash
   git clone https://github.com/Enstso/graphQlSocialMedia.git
   cd graphQlSocialMedia
   ```

2. **Install dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Configure the environment**
   Rename the `.env.exemple` file to `.env` and adjust the variables based on your local setup.

4. **Run the database with Docker** (optional)
   To run MariaDB and phpMyAdmin in Docker containers, use:
   ```bash
   docker-compose up -d
   ```
   The database will be available at `localhost:3310`, and phpMyAdmin at `http://localhost:8089`.

5. **Generate the Prisma client and run migrations**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

6. **Run the seeder to populate the database with test data**
   ```bash
   npm run seed
   ```

7. **Run the server in development mode**
   ```bash
   npm run dev
   ```
   The server will be available at `http://localhost:4000`.

### Frontend

1. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Run the application**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

---

## 🔑 Features Implemented

### Backend
- **User Authentication**:
  - Sign up (`createUser`)
  - Sign in (`signIn`) with session management using JWT

- **Article Management**:
  - Create (`createArticle`)
  - Read (`getArticles`, `getArticle`)
  - Update (`updateArticle`)
  - Delete (`deleteArticle`)

- **Interactions with Articles**:
  - Add comments (`commentArticle`)
  - Delete comments (`deleteComment`)
  - Add likes (`likeArticle`)
  - Remove likes (`removeLikeArticle`)

### Frontend
- **User Authentication**:
  - Sign up and sign in with validation
  - Session management using JWT

- **Article Management**:
  - Create, display, update, and delete articles
  - Display articles with their author, content, comments, and likes

- **Interactions with Articles**:
  - Add and display comments
  - Like system for articles

- **Navigation and Filtering**:
  - View the latest published articles on the homepage
  - Filter articles by author or popularity (number of likes)

---

## 📂 Project Structure

```
/graphQlSocialMedia
│-- /server          # Backend - Social Network GraphQL
│   │-- /src
│   │   │-- /graphql # GraphQL code (resolvers, schemas, etc.)
│   │   │-- /prisma  # Prisma (models and migrations)
│   │-- .env         # Environment variables
│   │-- package.json # Backend dependencies and scripts
│
│-- /frontend        # Frontend - User Interface
│   │-- /src
│   │   │-- /components  # Reusable UI components
│   │   │-- /views       # Main pages (Home, Login, etc.)
│   │   │-- /gql         # GraphQL hooks and queries
│   │-- .env.example      # Example environment configuration
│   │-- package.json      # Frontend dependencies and scripts
│
└── README.md         # Project documentation
```

---

## 📚 GraphQL API

The GraphQL schema is defined in the backend in the file [`typeDefs.ts`](server/src/graphql/typeDefs.ts). Here are some examples of queries and mutations:

### Example query to get articles:
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

### Example mutation to add an article:
```graphql
mutation {
  createArticle(title: "My First Article", content: "This is a test") {
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

## 🛠️ Useful Scripts

| Command               | Description                          |
|------------------------|--------------------------------------|
| `npm run dev`           | Start the server in development mode |
| `npm run start`         | Compile and run the server          |
| `npm run compile`       | Compile the TypeScript project      |
| `npm run prisma`        | Run Prisma CLI                      |
| `npm run generate`      | Generate GraphQL types              |
| `npm run seed`          | Run the Prisma seed script          |

---

## ✅ Future Improvements
- The like feature is currently not functional on the frontend.

---
