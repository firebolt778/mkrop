import AboutSection from "@/components/sections/about-section";
import TechStackSection from "@/components/sections/tech-stack";
import { Users, Award, Globe, Target } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every project, delivering solutions that exceed expectations and drive real business value."
  },
  {
    icon: Users,
    title: "Collaboration", 
    description: "We work closely with our clients as true partners, ensuring transparent communication and aligned goals throughout the project lifecycle."
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We stay at the forefront of technology trends, continuously learning and adopting new tools and methodologies to deliver cutting-edge solutions."
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Our solutions empower businesses across Europe and America, contributing to digital transformation and economic growth worldwide."
  }
];

const team = [
  {
    name: "Michael Krop",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    description: "With over 15 years of experience in software development and business strategy, Michael leads our vision of redefining software development worldwide."
  },
  {
    name: "Sarah Johnson", 
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b077?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    description: "Sarah brings deep technical expertise in cloud architecture and AI, driving our technology innovation and ensuring we stay ahead of industry trends."
  },
  {
    name: "David Chen",
    role: "VP of Engineering",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300", 
    description: "David oversees our engineering teams and ensures the highest quality standards in all our development projects and client deliverables."
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Business Development",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    description: "Emily leads our client relationships and business growth initiatives, ensuring we understand and exceed our clients' expectations."
  }
];

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-secondary mb-6">About MKrop.com</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate engineers and technology experts dedicated to transforming businesses 
            through innovative software solutions and strategic IT consulting.
          </p>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Our experienced leaders bring together decades of expertise in technology and business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-secondary mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-6">Ready to Work with Us?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our expertise and values can drive your business forward.
          </p>
          <a 
            href="/contact" 
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
}
