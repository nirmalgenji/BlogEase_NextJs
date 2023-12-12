"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const CreateBlog = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setIsSubmitting] = useState(false);
  const [blog, setBlog] = useState({ title: "", description: "", tags: [] });

  const handleCreateBlog = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/blog/create", {
        method: "POST",
        body: JSON.stringify({
          title: blog.title,
          description: blog.description,
          userId: session?.user.id,
          tags: blog.tags,
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
      type="Write"
      blog={blog}
      setBlog={setBlog}
      submitting={submitting}
      handleSubmitBlog={handleCreateBlog}
    />
  );
};

export default CreateBlog;
