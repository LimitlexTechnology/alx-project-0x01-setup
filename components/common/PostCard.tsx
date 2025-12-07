import React from 'react'

type PostCardProps = {
  title: string
  excerpt?: string
  author?: string
}

const PostCard: React.FC<PostCardProps> = ({ title, excerpt, author }) => (
  <div className="border rounded-lg p-4 shadow-sm">
    <h2 className="text-2xl font-semibold">{title}</h2>
    {excerpt && <p className="text-sm text-gray-600 mt-2">{excerpt}</p>}
    {author && <p className="text-xs text-gray-500 mt-3">By {author}</p>}
  </div>
)

export default PostCard
