import Blog from "@components/Blog";

const Profile = ({ blogs, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">My Blogs</span>
      </h1>

      <div className="mt-10 blog_layout">
        {blogs?.map((blog) => (
          <Blog
            key={blog._id}
            blog={blog}
            handleEdit={() => handleEdit(blog)}
            handleDelete={() => handleDelete(blog)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
