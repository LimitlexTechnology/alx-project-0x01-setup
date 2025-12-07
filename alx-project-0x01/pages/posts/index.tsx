import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PostCard from "@/components/common/PostCard";

const PostsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto p-6 space-y-4">
        <h2 className="text-3xl font-thin mb-4">Posts</h2>
        <PostCard title="First Post" body="This is a sample post." />
        <PostCard title="Second Post" body="Another sample post." />
      </main>
      <Footer />
    </>
  );
};

export default PostsPage;

