import { Button } from "../ui/Button/Button";
import { useEffect, useState } from "react";
import type { Movie } from "../../lib/movie";
import { BACKDROP } from "../../lib/api";

export default function MovieHero({ movie }: { movie: Movie }) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.4); // parallax strength
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="h-120 bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${BACKDROP}${movie.backdrop_path})`,
        backgroundPositionY: `${offsetY}px`,
      }}
    >
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
      {/* Content */}
      <div className="absolute bottom-10 left-0 px-6 max-w-xl">
        <h1 className="text-3xl font-bold text-white">{movie.title}</h1>
        <p className="text-sm text-gray-300 mt-2 line-clamp-3">
          {movie.overview}
        </p>

        <div className="mt-6flex items-center gap-4">
          <Button>
            Watch Trailer
            <img src="/src/assets/Play.svg" alt="Play" className="w-4 h-4" />
          </Button>

          <button className="border border-gray-500 px-6 py-2 rounded-full text-white">
            See Detail
          </button>
        </div>
      </div>
    </section>
  );
}
