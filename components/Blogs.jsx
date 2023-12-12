"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Blog from "./Blog";

const Blogs = () => {
  const router = useRouter();
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response = await fetch("/api/blog");
    const data = await response.json();
    setAllBlogs(data);
  };

  const handleEdit = (blog) => {
    router.push(`/update-blog?id=${blog._id}`);
  };

  const handleDelete = async (blog) => {
    const hasConfirmed = confirm("Are you sure you want to delete this blog?");

    if (hasConfirmed) {
      try {
        await fetch(`/api/blog/${blog._id}`, {
          method: "DELETE",
        });

        const filteredBlogs = allBlogs.filter((item) => item._id !== blog._id);

        setAllBlogs(filteredBlogs);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section className="blog">
      {/* <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form> */}

      {
        <div className="blog_layout">
          {allBlogs?.map((blog) => (
            <Blog
              key={blog._id}
              blog={blog}
              handleEdit={() => handleEdit(blog)}
              handleDelete={() => handleDelete(blog)}
              className="blog-card"
            />
          ))}
        </div>
      }
    </section>
  );
};

export default Blogs;
