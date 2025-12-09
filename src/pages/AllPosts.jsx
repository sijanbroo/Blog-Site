import React, { useState, useEffect } from "react";
import { Container, PostCard, AnimatedWrapper } from "../components/index";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8 px-6">
      <Container>
        <AnimatedWrapper animation="fadeInUp" delay={0}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
            All{" "}
            <span className="bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Posts
            </span>
          </h1>
        </AnimatedWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-max">
          {posts.map((post, index) => {
            return (
              <div key={post.$id}>
                <PostCard {...post} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
