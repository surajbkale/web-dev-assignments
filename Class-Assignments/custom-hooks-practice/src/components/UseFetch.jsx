import React from "react";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import { useEffect } from "react";

function UseFetch() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  console.log(data);

  return (
    <div>
      <h2>Post Titles</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseFetch;
