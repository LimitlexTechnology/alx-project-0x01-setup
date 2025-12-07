import React from 'react'
import PostCard from '../../components/common/PostCard'

const PostsPage: React.FC = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl mb-6">Posts</h1>
    <div className="grid gap-4 md:grid-cols-2">
      <PostCard title="First Post" excerpt="This is the excerpt for the first post." author="Author A" />
      <PostCard title="Second Post" excerpt="Excerpt for second post" author="Author B" />
    </div>
  </div>
)

export default PostsPage
