// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../src/modules/auth';

const prisma = new PrismaClient();

async function main() {

  // Créer un nouvel utilisateur
  const user = await prisma.user.create({
    data: {
      username: 'john_doe',
      password: await hashPassword('securepassword123'),
    },
  });

  // Créer un article
  const article = await prisma.article.create({
    data: {
      title: 'My First Article',
      content: 'This is the content of my first article.',
      authorId: user.id,
    },
  });

  // Créer un commentaire
  const comment = await prisma.comment.create({
    data: {
      content: 'Great article!',
      articleId: article.id,
      authorId: user.id,
    },
  });

  console.log('User, article, and comment created:', { user, article, comment });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

//npx prisma generate
//npx ts-node prisma/seed.ts
