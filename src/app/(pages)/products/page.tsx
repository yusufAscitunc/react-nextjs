import React from "react";

const getData = async () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
};

const getUserData = async () => {
  return fetch("https://jsonplaceholder.typicode.com/users", {
    next: {
      revalidate: 10,
    },
  }).then((res) => res.json());
};

const getCountryData = async () => {
  return fetch("https://restcountries.com/v3.1/region/europe", {
    cache: "no-store",
  }).then((res) => res.json());
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
