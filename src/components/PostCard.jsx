import React from "react";
import service from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  // Get the preview URL - Appwrite returns a URL object
  const imageUrl = service.getFilePreview(featuredImage);

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-white/10 backdrop-blur-md rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:shadow-xl hover:shadow-purple-500/20">
        <div className="w-full justify-center mb-4 overflow-hidden rounded-lg">
          <img
            src={imageUrl}
            alt={title}
            className="rounded-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
