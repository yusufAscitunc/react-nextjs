import React from "react";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts;
};

const getUserData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
};

const Page = async () => {
  const [posts, users] = await Promise.all([getData(), getUserData()]);

  return (
    <>
      {posts.map((post: any) => (
        <div key={post.id}>{post.title}</div>
      ))}
      {users.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
};

export default Page;
