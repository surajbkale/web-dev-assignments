import React from "react";
import useRefetching from "../hooks/useRefetching";

function UseRefetching() {
  const { data, loading, error, fetchData } = useRefetching(
    "https://jsonplaceholder.typicode.com/posts/"
  );

  if (loading) return <h2>Loding...</h2>;
  if (error) return <h3>error</h3>;

  console.log(data);

  return (
    <div>
      <h2>Post</h2>
      <button onClick={fetchData}>Refresh</button>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseRefetching;
