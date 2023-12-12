# BlogEase

BlogEase is a Next.js application that enables users to write and share blogs, add tags, and engage in discussions through comments. It provides an easy-to-use platform for tech enthusiasts and writers to share their insights, experiences, and knowledge with the community..

## Features

- Write and publish blogs with ease
- Add tags to categorize your blogs
- Engage with the community through comments
- User-friendly interface for a seamless blogging experience

# Application Setup

This project is a Next.js application. Follow the steps below to set up your development environment and get the application running.

## Step 1: Authentication Setup with Next-Auth.js and Google

To enable authentication in your Next.js application using Google, you'll need to perform the following steps:

1. Create a Google OAuth Client ID and Client Secret by following the instructions [here](https://developers.google.com/identity/protocols/oauth2).
2. Set the following environment variables in your project:
   - `GOOGLE_ID`: Your Google OAuth Client ID
   - `GOOGLE_CLIENT_SECRET`: Your Google OAuth Client Secret

## Step 2: Deploy a Free Cluster on MongoDB Atlas

To store your application's data, you can use MongoDB Atlas. Here's how to deploy a free cluster:

1. Sign up for a MongoDB Atlas account if you don't have one already.
2. Create a new cluster and follow the setup instructions.
3. Get the MongoDB connection URI, which will look like this:
   `mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>`
4. Set the following environment variable in your project:
   - `MONGODB_URI`: The MongoDB connection URI you obtained.

## Step 3: Running the Next.js Application

Follow these steps to run your Next.js application:

1. Install project dependencies using npm:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

Your Next.js application should now be running locally at http://localhost:3000. You can access it in your web browser.

# BlogEase

BlogEase is a Next.js application that enables users to write and share blogs, add tags, and engage in discussions through comments. It provides an easy-to-use platform for tech enthusiasts and writers to share their insights, experiences, and knowledge with the community.

## Features

- Write and publish blogs with ease
- Add tags to categorize your blogs
- Engage with the community through comments
- User-friendly interface for a seamless blogging experience

# Application Setup

This project is a Next.js application. Follow the steps below to set up your development environment and get the application running.

## Step 1: Authentication Setup with Next-Auth.js and Google

To enable authentication in your Next.js application using Google, you'll need to perform the following steps:

1. Create a Google OAuth Client ID and Client Secret by following the instructions [here](https://developers.google.com/identity/protocols/oauth2).
2. Set the following environment variables in your project:
   - `GOOGLE_ID`: Your Google OAuth Client ID
   - `GOOGLE_CLIENT_SECRET`: Your Google OAuth Client Secret

## Step 2: Deploy a Free Cluster on MongoDB Atlas

To store your application's data, you can use MongoDB Atlas. Here's how to deploy a free cluster:

1. Sign up for a MongoDB Atlas account if you don't have one already.
2. Create a new cluster and follow the setup instructions.
3. Get the MongoDB connection URI, which will look like this:
   `mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>`
4. Set the following environment variable in your project:
   - `MONGODB_URI`: The MongoDB connection URI you obtained.

## Step 3: Running the Next.js Application

Follow these steps to run your Next.js application:

1. Install project dependencies using npm:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

Your Next.js application should now be running locally at http://localhost:3000. You can access it in your web browser.
