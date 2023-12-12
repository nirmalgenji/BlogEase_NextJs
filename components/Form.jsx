import React, { useState } from "react";
import Link from "next/link";

const Form = ({ type, blog, setBlog, submitting, handleSubmitBlog }) => {
  const [tag, setTag] = useState([]);

  const addTag = () => {
    if (tag && !blog.tags.includes(tag)) {
      setBlog({ ...blog, tags: [...blog.tags, tag] });
      setTag("");
    }
  };

  // const removeTag = (removeTag) => {
  //   setBlog({ ...blog, tags: blog.tags.filter((t) => t !== removeTag) });
  // };

  const removeTag = (removeTag) => {
    const updatedTags = blog.tags.filter((t) => t !== removeTag);
    setBlog({ ...blog, tags: updatedTags });
  };

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Blog</span>
      </h1>
      <form className="mt-8 w-full flex flex-col gap-7 newblog">
        <label>
          <span className="span_header">Title of Your Blog</span>
          <input
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
            type="text"
            placeholder="Enter the title of your blog"
            required
            className="form_input"
          />
        </label>

        <label>
          <span className="span_header">Your Blog Content</span>

          <textarea
            value={blog.description}
            onChange={(e) => setBlog({ ...blog, description: e.target.value })}
            placeholder="Write your post content here"
            required
            className="form_textarea"
          />
        </label>

        <label>
          <span className="span_header">Tag your Blog</span>
          <div className="flex flex-wrap gap-2">
            {blog.tags?.map((t) => (
              <span key={t} className="tag">
                {t}{" "}
                <button className="p-1 text-white" onClick={() => removeTag(t)}>
                  x
                </button>
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 mt-2">
            <input
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              type="text"
              placeholder="#Tag"
              className="form_input flex-grow"
            />
            <button
              type="button"
              onClick={addTag}
              className="primary-btn"
              disabled={!tag}
            >
              Add
            </button>
          </div>
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="secondary-btn">
            Cancel
          </Link>
          <button
            type="button"
            disabled={submitting}
            className="primary-btn"
            onClick={() => handleSubmitBlog()}
          >
            Publish
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
