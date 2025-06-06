import Link from "next/link";
import { db } from "~/server/db";
const dynamic = "force-dynamic";
import { SignedOut,SignedIn } from "@clerk/nextjs"


async function Images(){

  const images = await db.query.images.findMany({
    orderBy: (images, { desc }) => [desc(images.id)],
  });

  return (<div className = "flex flex-wrap gap-4">
        {images.map((post) => (<div key={post.id}> {post.name}</div>))}
        {[...images, ...images, ...images, ...images].map((image, idx) => (
          <div key={image.id + "-" + idx} className="w-48">
            <img src={image.url} />
            <div>{image.name}</div>
          </div>
        ))}

      </div>)
}
export default async function HomePage() {

  
  return (
    <main className ="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images/>
      </SignedIn>
    </main>
  );
}
