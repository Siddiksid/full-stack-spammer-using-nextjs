import MessageBox from "@/components/MessageBox";
import NewMessage from "@/components/NewMessage";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const posts = await prisma.posts.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <h1>Spammer</h1>
      <NewMessage />
      <MessageBox posts={posts} />
    </div>
  );
}
