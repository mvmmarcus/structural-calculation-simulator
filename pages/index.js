import React from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  typeof window !== "undefined" && router.push("/home");

  return <div />;
};

export default Home;
