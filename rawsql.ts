import { prisma } from "./lib/prisma";

async function main(){
  // SELECT文
  const users = await prisma.$queryRaw`
    SELECT * FROM User;
  `;
  console.log(users)

  // INSERT文
  const result = await prisma.$executeRaw`
    INSERT INTO User (name, email)
    VALUES ('Charlie', 'charlie@hoge.com');
  `;
  console.log(result);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
