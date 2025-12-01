import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PostCard from "@/components/common/PostCard";

const PostsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-8 space-y-4">
        <h2 className="text-3xl font-thin">Posts</h2>
        <PostCard />
      </main>
      <Footer />
    </div>
  );
};

export default PostsPage;
