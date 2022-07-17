import React, { useState, useEffect } from "react";

function DataFetching() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
}
export default DataFetching;
