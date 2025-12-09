import React, { useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard, PostForm, AnimatedWrapper } from "../components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const [posts, setPosts] = React.useState([]);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) setPosts(posts.documents);
    });
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-pink-500/30 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center mt-30">
          <AnimatedWrapper animation="fadeInDown" delay={0}>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
              Welcome to{" "}
              <span className="bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                SijanBlog
              </span>
            </h1>
          </AnimatedWrapper>
          <AnimatedWrapper animation="fadeInUp" delay={100}>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Share your thoughts, ideas, and stories with the world. Create
              beautiful blog posts with rich content and stunning images.
            </p>
          </AnimatedWrapper>
          <AnimatedWrapper animation="fadeInUp" delay={200}>
            <div className="flex gap-4 justify-center mb-16">
              <button className="bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-purple-500/50 transition-all transform hover:scale-105">
                {authStatus ? (
                  <Link to="/add-post">Get Started</Link>
                ) : (
                  <Link to="/signup">Sign Up Now</Link>
                )}
              </button>

              <Link to="/all-posts">
                <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105">
                  Explore Posts
                </button>
              </Link>
            </div>
          </AnimatedWrapper>{" "}
          {/* Feature Cards with Images */}
          <AnimatedWrapper animation="fadeInUp" delay={300}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all transform hover:scale-105 shadow-xl">
                <div className="w-full h-48 mb-4 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=300&fit=crop"
                    alt="Writing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Rich Text Editor
                </h3>
                <p className="text-gray-300">
                  Create beautiful posts with our powerful editor. Add
                  formatting, images, and more.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all transform hover:scale-105 shadow-xl">
                <div className="w-full h-48 mb-4 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop"
                    alt="Community"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Join Community
                </h3>
                <p className="text-gray-300">
                  Connect with writers and readers from around the world. Share
                  your unique perspective.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all transform hover:scale-105 shadow-xl">
                <div className="w-full h-48 mb-4 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop"
                    alt="Technology"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Modern Platform
                </h3>
                <p className="text-gray-300">
                  Built with cutting-edge technology for a seamless writing and
                  reading experience.
                </p>
              </div>
            </div>
          </AnimatedWrapper>
          {/* Stats Section */}
          <AnimatedWrapper animation="fadeInUp" delay={400}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-20">
              <div className="text-center">
                <div className="text-5xl font-bold text-transparent bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text mb-2">
                  10K+
                </div>
                <div className="text-gray-400 text-lg">Active Writers</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-transparent bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text mb-2">
                  50K+
                </div>
                <div className="text-gray-400 text-lg">Stories Published</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-transparent bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text mb-2">
                  100K+
                </div>
                <div className="text-gray-400 text-lg">Monthly Readers</div>
              </div>
            </div>
          </AnimatedWrapper>
          {/* CTA Section */}
          <AnimatedWrapper animation="fadeInUp" delay={500}>
            <div className="bg-linear-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-white/20 rounded-3xl p-12 mt-20 mb-20">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Start Writing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of writers sharing their stories on MegaBlog
              </p>

              <button className="bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-12 rounded-xl shadow-lg shadow-purple-500/50 transition-all transform hover:scale-105">
                {authStatus ? (
                  <Link to="/add-post">Write Posts Now</Link>
                ) : (
                  <Link to="/signup">Sign Up Now</Link>
                )}
              </button>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </div>
  );
}

export default Home;
