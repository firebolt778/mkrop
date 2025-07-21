import ServiceCard from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Code, Users, TrendingUp, Bot, Globe, Smartphone } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored solutions to meet your unique business requirements with cutting-edge technology and best practices.",
  },
  {
    icon: Users,
    title: "Talent Provision",
    description: "Access top-tier developers and IT professionals to scale your team quickly and efficiently.",
  },
  {
    icon: TrendingUp,
    title: "IT Consulting",
    description: "Strategic guidance to optimize your technology infrastructure and drive digital transformation.",
  },
  {
    icon: Bot,
    title: "AI Software Development",
    description: "Leverage artificial intelligence and machine learning to automate processes and gain competitive advantages.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Scalable web applications, SaaS products, and e-commerce solutions with modern frameworks.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary dark:text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive software development services designed to empower businesses across industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-white hover:bg-blue-700 px-8 py-4">
              Contact Us for More Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
