import Link from "next/link";

const mockUrls = [
  "https://sgpwe047h0.ufs.sh/f/4p1H00xokry358mYd9MtLu2HjAYWwDkMV09xZNEz4i8po3vT",
  "https://sgpwe047h0.ufs.sh/f/4p1H00xokry35hSCuzMtLu2HjAYWwDkMV09xZNEz4i8po3vT",
  "https://sgpwe047h0.ufs.sh/f/4p1H00xokry3LffxndkeSIgmtoRZjCwATX5FxK7vNBysr8Qi",
  "https://sgpwe047h0.ufs.sh/f/4p1H00xokry35tifrSMtLu2HjAYWwDkMV09xZNEz4i8po3vT"
]


const mockImages = mockUrls.map((url,index) => ({id: index + 1, url,}))
export default function HomePage() {
  return (
    <main className ="">
      <div className = "flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
