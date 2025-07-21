import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="pt-20 hero-gradient">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-secondary dark:text-white leading-tight mb-6">
              Software Development
              <span className="block">& IT Consulting</span>
              <span className="block text-primary">Company</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Empower your business with our seasoned engineers and deep tech expertise. 
              We deliver innovative solutions across Europe and America.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-white hover:bg-blue-700 px-8 py-4 text-lg">
                  Schedule a Call
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Software development team collaborating"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">150+ Projects Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
