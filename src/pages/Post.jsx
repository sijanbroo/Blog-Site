import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-8 px-6">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="w-full flex justify-center mb-8 relative">
            <div className="w-full max-w-2xl rounded-2xl overflow-visible">
              <div className="relative">
                <img
                  src={appwriteService.getFilePreview(post.featuredImage)}
                  alt={post.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl shadow-purple-500/20 border border-white/10"
                />
                {isAuthor && (
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Link to={`/edit-post/${post.$id}`}>
                      <Button
                        bgColor="bg-green-500 hover:bg-green-600"
                        className="text-white font-semibold py-2 px-6 rounded-lg transition-all shadow-lg"
                      >
                        Edit
                      </Button>
                    </Link>
                    <Button
                      bgColor="bg-red-500 hover:bg-red-600"
                      onClick={deletePost}
                      className="text-white font-semibold py-2 px-5 rounded-lg transition-all shadow-lg"
                    >
                      Delete
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-full mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded\"></div>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="text-gray-200 leading-relaxed">
              {parse(post.content)}
            </div>
          </div>
        </div>
      </Container>
    </div>
  ) : null;
}
