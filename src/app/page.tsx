import Link from "next/link";
import { db } from "~/server/db";
const dynamic = "force-dynamic";



export default async function HomePage() {

  const images = await db.query.images.findMany({
    orderBy: (images, { desc }) => [desc(images.id)],
  });
  return (
    <main className ="">
      <div className = "flex flex-wrap gap-4">
        {images.map((post) => (<div key={post.id}> {post.name}</div>))}
        {[...images, ...images, ...images, ...images].map((image, idx) => (
          <div key={image.id + "-" + idx} className="w-48">
            <img src={image.url} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
