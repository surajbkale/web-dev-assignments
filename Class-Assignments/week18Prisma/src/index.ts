import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function createUser() {
  const user = await client.user.findFirst({
    where: {
      id: 1,
    },
    include: {
      todos: true,
    },
  });
  console.log(user);
}

createUser();
