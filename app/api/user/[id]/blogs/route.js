import Blog from "@models/blog";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB()

    const blogs = await Blog.find({ creator: params.id }).populate("creator")

    return new Response(JSON.stringify(blogs), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch blogs created by user", { status: 500 })
  }
} 