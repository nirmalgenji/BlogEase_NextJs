"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";

const UpdateBlog = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const blogId = searchParams.get("id");

  const [blog, setBlog] = useState({ title: "", description: "", tags: [] });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getBlogDetails = async () => {
      const response = await fetch(`/api/blog/${blogId}`);
      const data = await response.json();
      setBlog({
        title: data.title,
        description: data.description,
        tags: data.tags,
        comments: data.comments,
      });
    };

    if (blogId) getBlogDetails();
  }, [blogId]);

  const handleUpdateBlog = async () => {
    setIsSubmitting(true);

    if (!blogId) return alert("Missing Blog Id!");

    try {
      const response = await fetch(`/api/blog/${blogId}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: blog.title,
          description: blog.description,
          tags: blog.tags,
          comments: blog.comments,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      blog={blog}
      setBlog={setBlog}
      submitting={submitting}
      handleSubmitBlog={handleUpdateBlog}
    />
  );
};

export default UpdateBlog;
