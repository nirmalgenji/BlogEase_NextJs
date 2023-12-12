"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import CommentForm from "@components/CommentForm";

const ViewBlog = () => {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const blogId = searchParams.get("id");
  const [blog, setBlog] = useState({});
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (blogId) getBlogDetails();
  }, [blogId]);

  const getBlogDetails = async () => {
    const response = await fetch(`/api/blog/${blogId}`);
    const data = await response.json();
    setBlog(data);
  };

  const handleAddComment = async (newComment) => {
    if (!blogId) return alert("Missing Blog Id!");
    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/blog/${blogId}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: blog.title,
          description: blog.description,
          tags: blog.tags,
          comments: [...blog.comments, newComment],
        }),
      });

      if (response.ok) {
        getBlogDetails();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{blog?.title}</span>
      </h1>
      <div className="mt-8 w-full flex flex-col gap-7 newblog">
        <label>
          <p className="form_textarea">{blog?.description}</p>
        </label>

        <label>
          <div className="flex flex-wrap gap-2">
            {blog?.tags?.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </label>
      </div>
      {blog?.creator && blog?.creator?._id !== session?.user.id && (
        <CommentForm onAddComment={handleAddComment} submitting={submitting} />
      )}
      <div className="mt-4 w-full">
        <h2 className="text-lg font-semibold mb-2">Comments</h2>
        {blog?.comments?.map((comment, index) => (
          <div key={index} className="border-t border-gray-200 py-2">
            <p className="text-sm">{comment.text}</p>
            <p className="text-xs text-gray-500">{`By User ${
              comment.userName
            } on ${
              comment.date && new Date(comment.date).toLocaleDateString()
            }`}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ViewBlog;
