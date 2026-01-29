import { useEffect, useState } from "react";
import api from "../services/api";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const deletePost = async (id) => {
  await api.delete(`posts/${id}/`);
  setPosts(posts.filter(p => p.id !== id));
};

  useEffect(() => {
    api.get("posts/")
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <small>By {post.author}</small>
            <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
