import React from "react";

type Props = {
  title?: string;
  body?: string;
};

const PostCard: React.FC<Props> = ({ title = "Post Title", body = "Post body" }) => {
  return (
    <div className="border rounded p-4 shadow-sm bg-white">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{body}</p>
    </div>
  );
};

export default PostCard;
