import { useParams, Link } from "react-router";
import Meta from "../components/Meta";
import albums from "../data/gallery-albums.json";
import { galleryImages } from "../data/galleryImages";

export default function GalleryAlbum() {
  const { slug } = useParams();
  const album = albums.find(a => a.slug === slug);
  const images = galleryImages[slug] ?? [];

  if (!album) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-10">
        <p>Album not found. <Link to="/gallery" className="underline">Back to gallery</Link></p>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <Meta title={`${album.title} — Gallery`} description={album.desc || `Screenshots for ${album.title}.`} canonical={`https://knightworks.dev/gallery/${slug}`} />
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-3xl font-semibold">{album.title}</h1>
        <Link to="/gallery" className="text-sm text-[color:var(--subtext)] underline decoration-dotted">All albums</Link>
      </div>
      <p className="text-[color:var(--subtext)] mb-6">{album.desc}</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <a key={i} href={img.src} target="_blank" rel="noreferrer" className="block rounded-xl overflow-hidden border border-[color:var(--border)]">
            <img src={img.src} srcSet={img.srcSet} sizes={img.sizes} alt={img.alt || `${album.title} screenshot ${i+1}`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
          </a>
        ))}
      </div>
    </main>
  );
}
