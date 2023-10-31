import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/configer";
import { Container, PostCard } from "../components";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  });

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            {posts.map((psot) => {
              <div key={post.id} className="py-2">
                <PostCard {...post} />
              </div>;
            })}
          </div>
        </Container>
      </div>
    );
  }
};

export default Home;
