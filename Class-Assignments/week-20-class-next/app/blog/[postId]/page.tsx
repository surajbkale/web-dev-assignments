import axios from "axios";

export default async function BlogPost({
  params,
}: {
  params: {
    postId: string;
  };
}) {
  const blogId = (await params).postId;

  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${blogId}`
  );

  return (
    <div>
      <h1>Title: {response.data.title}</h1>
      <h1> Description: {response.data.body}</h1>
    </div>
  );
}
