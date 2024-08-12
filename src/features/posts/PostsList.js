import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import React from "react";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  // gets all post in our state

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring((0, 100))}</p>
      {/* displays the first 100 characters */}
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
