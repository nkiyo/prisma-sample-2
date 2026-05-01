import { prisma } from "./lib/prisma";

async function main() {
  // Create user
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Alice",
  //     email: "alice@prisma.io",
  //   },
  // });
  const user = await prisma.user.create({
    data: {
      name: "Bob",
      email: "bob@prisma.io",
    },
  });
  // console.log("Created user:", user);

  // Create post
  // const post = await prisma.post.create({
  //   data: {
  //     title: "ほげ",
  //     authorId: 3
  //   }
  // })
  // console.log(post)

  // Delete User
  // cascadeの場合はPostも全部消える
  // const u = await prisma.user.delete({
  //   where: {
  //     id: 2,
  //   }
  // })
  // console.log(u)

  // const p = await prisma.post.delete({
  //   where: {
  //     id: 3
  //   }
  // })
  // console.log(p)
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
