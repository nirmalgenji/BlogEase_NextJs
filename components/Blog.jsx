"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const Blog = ({ blog, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const handleProfileClick = () => {
    if (blog.creator._id === session?.user.id) return router.push("/profile");
  };

  const truncateWords = (blog, wordLength) => {
    let words = blog.split(/\s+/);
    if (words.length > wordLength) {
      return words.slice(0, wordLength).join(" ") + "...";
    } else {
      return blog;
    }
  };

  const handleViewBlog = () => {
    router.push(`/blog?id=${blog._id}`);
  };

  return (
    <div className="blog_card relative">
      {session?.user.id === blog.creator._id && pathName === "/profile" && (
        <div className="absolute top-2 right-2 flex gap-2">
          <div className="mt-5 flex-center gap-4 border-l pl-2 border-gray-100">
            <p
              className="font-inter text-sm green_gradient cursor-pointer"
              onClick={handleEdit}
            >
              Edit
            </p>
            <p
              className="font-inter text-sm orange_gradient cursor-pointer"
              onClick={handleDelete}
            >
              Delete
            </p>
          </div>
        </div>
      )}
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
          onClick={handleProfileClick}
        >
          <Image
            src={blog.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-roboto font-semibold text-gray-900">
              {blog.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {blog.creator.email}
            </p>
          </div>
        </div>
      </div>
      <p
        className="my-2 font-roboto text-lg text-gray-900 cursor-pointer"
        onClick={handleViewBlog}
      >
        {truncateWords(blog.title, 3)}
      </p>
      <p
        className="my-2 font-roboto text-sm text-gray-700 cursor-pointer"
        onClick={handleViewBlog}
      >
        {truncateWords(blog.description, 20)}
      </p>
      <div className="flex flex-wrap gap-2">
        {blog.tags?.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Blog;
