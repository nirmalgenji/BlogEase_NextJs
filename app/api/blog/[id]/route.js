import Blog from "@models/blog";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB()

    const blog = await Blog.findById(params.id).populate("creator")
    if (!blog) return new Response("Blog Not Found", { status: 404 });

    return new Response(JSON.stringify(blog), { status: 200 })

  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
}

export const PATCH = async (request, { params }) => {
  const { title, description, tags, comments } = await request.json();

  try {
    await connectToDB();

    const existingBlog = await Blog.findById(params.id);

    if (!existingBlog) {
      return new Response("Blog not found", { status: 404 });
    }

    existingBlog.title = title;
    existingBlog.description = description;
    existingBlog.tags = tags;
    existingBlog.comments = comments;

    await existingBlog.save();

    return new Response("Successfully updated the Blog", { status: 200 });
  } catch (error) {
    return new Response("Error Updating Blog", { status: 500 });
  }
};


export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    await Blog.findByIdAndRemove(params.id);

    return new Response("Blog deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error while deleting blog", { status: 500 });
  }
};
