import { useQuery } from "@tanstack/react-query";
import PortfolioCard from "@/components/ui/portfolio-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Skeleton } from "@/components/ui/skeleton";
import type { PortfolioProject } from "@shared/schema";

export default function PortfolioSection() {
  const { data: projects, isLoading } = useQuery<PortfolioProject[]>({
    queryKey: ["/api/portfolio-projects/featured"],
  });

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Portfolio of IT Projects</h2>
          <p className="text-xl text-gray-600">Showcasing our expertise across diverse industries and technologies</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? Array(3)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <Skeleton className="w-full h-48" />
                    <div className="p-6 space-y-4">
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-full" />
                      <div className="flex gap-2">
                        <Skeleton className="h-6 w-16" />
                        <Skeleton className="h-6 w-20" />
                        <Skeleton className="h-6 w-14" />
                      </div>
                    </div>
                  </div>
                ))
            : projects?.map((project) => <PortfolioCard key={project.id} project={project} />)}
        </div>

        <div className="text-center mt-12">
          <Link href="/portfolio">
            <Button size="lg" className="bg-primary text-white hover:bg-blue-700 px-8 py-4">
              View More Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
