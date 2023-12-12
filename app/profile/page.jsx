"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [myBlogs, setMyBlogs] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/user/${session?.user.id}/blogs`);
      const data = await response.json();

      setMyBlogs(data);
    };

    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

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
    <Profile
      blogs={myBlogs}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
