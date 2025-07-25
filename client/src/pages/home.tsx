import HeroSection from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import TechStackSection from "@/components/sections/tech-stack";
import AboutSection from "@/components/sections/about-section";
import BlogSection from "@/components/sections/blog-section";
import ContactSection from "@/components/sections/contact-section";
import { Quote } from "lucide-react";

// Certifications/Badges Section
function CertificationsSection() {
  const certifications = [
    "AWS Partner",
    "Microsoft Certified",
    "ISO 9001",
    "ISO 27001", 
    "Salesforce Partner",
    "Top Developer"
  ];

  return (
    <section className="py-12 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300">Trusted by leading organizations worldwide</h3>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-950 dark:text-white px-6 py-3 rounded-lg">
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Quote/Vision Section
function VisionSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
          </div>
          <blockquote className="text-2xl lg:text-3xl font-bold text-secondary dark:text-white mb-8 leading-relaxed">
            "Our vision is to redefine software development worldwide and inspire teams to deliver top results with in-house-like dedication."
          </blockquote>
          
          <div className="flex items-center justify-center space-x-6">
            <img
              src="/src/assets/ceo.png"
              alt="CEO headshot"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="text-left">
              <div className="font-bold text-secondary dark:text-white">Oleh Panchenko</div>
              <div className="text-gray-600 dark:text-gray-300">Co-founder & CEO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <CertificationsSection />
      <ServicesSection />
      <VisionSection />
      <PortfolioSection />
      <TechStackSection />
      {/* <AboutSection /> */}
      {/* <BlogSection /> */}
      <ContactSection />
    </div>
  );
}
