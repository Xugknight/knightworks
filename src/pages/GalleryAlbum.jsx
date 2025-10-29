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
        {images.map((img, i) => {
          const caption = img.caption ?? img.alt ?? `${album.title} screenshot ${i + 1}`;
          return (
            <a
              key={i}
              href={img.src}
              target="_blank"
              rel="noreferrer"
              className="block rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] hover:opacity-95 focus-visible:focus-ring overflow-hidden"
            >
              <figure>
                <div className="aspect-[16/9] bg-[color:var(--accent-muted)]">
                  <img
                    src={img.src}
                    srcSet={img.srcSet}
                    sizes={img.sizes}
                    alt={img.alt || caption}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="p-3 text-sm text-[color:var(--subtext)]">
                  {caption}
                </figcaption>
              </figure>
            </a>
          );
        })}
      </div>
    </main>
  );
}