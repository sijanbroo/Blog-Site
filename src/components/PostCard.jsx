import React from "react";
import service from "../appwrite/config";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function PostCard({ $id, title, featuredImage }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  // Get the preview URL - Appwrite returns a URL object
  const imageUrl = service.getFilePreview(featuredImage);
  const fallbackImage =
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop";

  return (
    <Link to={`/post/${$id}`} className="block h-full">
      <div
        ref={ref}
        className={`group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-lg shadow-purple-900/20 transition-all duration-900 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } hover:-translate-y-1 hover:shadow-purple-500/30`}
      >
        <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 via-transparent to-pink-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative mb-4 overflow-hidden rounded-xl border border-white/10">
          <img
            src={imageUrl || fallbackImage}
            alt={title}
            className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-105 group-hover:rotate-[0.5deg]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90 border border-white/10">
            Featured
          </span>
        </div>

        <div className="relative flex flex-1 flex-col">
          <h2 className="text-lg font-semibold text-white line-clamp-2 group-hover:text-purple-100">
            {title}
          </h2>

          <div className="mt-auto flex items-center gap-2 text-sm text-purple-200/80">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            <span>Read post</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
