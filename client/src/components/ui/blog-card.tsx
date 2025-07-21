import type { BlogPost } from "@shared/schema";
import { format } from "date-fns";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow blog-card">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="text-sm text-primary font-semibold mb-2">{post.category}</div>
        <h3 className="text-xl font-bold text-secondary mb-3">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {format(new Date(post.publishedAt), "MMMM d, yyyy")}
          </span>
          <a href="#" className="text-primary font-semibold hover:underline">
            Read More →
          </a>
        </div>
      </div>
    </article>
  );
}
