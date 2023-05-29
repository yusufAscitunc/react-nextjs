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

const getCountryData = async () => {
  const res = await fetch("https://restcountries.com/v3.1/region/europe");
  const countries = await res.json();
  return countries;
};
const country = getCountryData();
const posts = getData();
const users = getUserData();

const Page = async () => {
  //const [posts, users] = await Promise.all([getData(), getUserData()]);

  const resData = await Promise.all([country, posts, users]);
  console.log(resData);

  return (
    <>
      <pre>{JSON.stringify(resData, null, 2)}</pre>
    </>
  );
};

export default Page;
