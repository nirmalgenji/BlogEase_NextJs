"use client";

import Blogs from "@components/Blogs";
import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Dive & Document
        <br />
        <span className="blue_gradient text-center">Tech Talks & Tales</span>
      </h1>
      <p className="desc text-center">
        Tech space to write, tag, and share. Explore tech talks, tales, and
        engage with a community of enthusiasts.
      </p>
      {session?.user && <Blogs />}
    </section>
  );
};

export default Home;
