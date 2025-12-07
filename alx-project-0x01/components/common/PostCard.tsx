import React from "react";

type PostCardProps = {
  title: string;
  body: string;
};

const PostCard: React.FC<PostCardProps> = ({ title, body }) => {
  return (
    <article className="border rounded p-4 shadow-sm bg-white">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{body}</p>
    </article>
  );
};

export default PostCard;

