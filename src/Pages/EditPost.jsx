import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/configer";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [posts, setPosts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          console.log(post);
        } else {
          navigate("/");
        }
      });
    }
  }, [slug, navigate]);

  return psot ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
