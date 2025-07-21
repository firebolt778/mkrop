import { useQuery } from "@tanstack/react-query";
import BlogCard from "@/components/ui/blog-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Skeleton } from "@/components/ui/skeleton";
import type { BlogPost } from "@shared/schema";

export default function BlogSection() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"],
  });

  const displayPosts = posts?.slice(0, 3);

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary dark:text-white mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Stay updated with the latest trends in software development and IT consulting
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? Array(3)
                .fill(0)
                .map((_, i) => (
                  <article key={i} className="bg-gray-50 rounded-xl overflow-hidden">
                    <Skeleton className="w-full h-48" />
                    <div className="p-6 space-y-4">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-6 w-full" />
                      <Skeleton className="h-16 w-full" />
                      <div className="flex justify-between">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                    </div>
                  </article>
                ))
            : displayPosts?.map((post) => <BlogCard key={post.id} post={post} />)}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button size="lg" className="bg-primary text-white hover:bg-blue-700 px-8 py-4">
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
