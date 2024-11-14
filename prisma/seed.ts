import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.deleteMany();
  await prisma.user.create({
    data: {
      email: 'zainudin@gmail.com',
      name: 'Muhammad Zydane',
      password: await bcrypt.hash('12345', 10),
      role: 'ADMIN',
    },
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
