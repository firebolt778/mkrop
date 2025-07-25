import { useQuery } from "@tanstack/react-query";
import PortfolioCard from "@/components/ui/portfolio-card";
import { Skeleton } from "@/components/ui/skeleton";
import type { PortfolioProject } from "@shared/schema";
import { useState } from "react";
import { Link } from "wouter";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const { data: projects, isLoading } = useQuery<PortfolioProject[]>({
    queryKey: ["/api/portfolio-projects"],
  });

  const categories = ["all", "Web Development", "Mobile Development", "Data Analytics", "DevOps", "AI/ML", "Healthcare"];
  
  const filteredProjects = projects?.filter(project => 
    selectedCategory === "all" || project.category === selectedCategory
  );

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-secondary dark:text-white mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our diverse range of successful projects spanning multiple industries and technologies. 
            Each project showcases our commitment to excellence and innovation.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      {/* <section className="py-8 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {category === "all" ? "All Projects" : category}
              </button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
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
                ))}
            </div>
          ) : filteredProjects && filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <PortfolioCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600 dark:text-gray-300">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-secondary dark:text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's discuss how we can bring your vision to life with our expertise and dedication.
          </p>
          <Link
            href="/contact" 
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
