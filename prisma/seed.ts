import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  const email = "ras@rasfincher.com";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const user = await prisma.user.create({
    data: {
      email,
      name: "Ras Fincher",
      authUserId: "user_2NnB7oQTpyYmhq7yzEsFvnR4K0f",
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
