import AboutSection from "@/components/sections/about-section";
import TechStackSection from "@/components/sections/tech-stack";
import { Users, Award, Globe, Target } from "lucide-react";
import { Link } from "wouter";

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
    name: "Oleh Panchenko",
    role: "Chief Executive Officer",
    image: "/assets/ceo.png",
    description: "With over 10 years of experience in software development and business strategy, Oleh leads our vision of redefining software development worldwide."
  },
  {
    name: "Serhii Panchenko", 
    role: "Chief Technology Officer",
    image: "/assets/cto.png",
    description: "Serhii brings deep technical expertise in AI, Web, Mobile, IoT and Cloud Engineering, driving our technology innovation and ensuring we stay ahead of industry trends."
  },
  {
    name: "Mykhailo Lobov",
    role: "Chief Operating Officer",
    image: "/assets/coo.png",
    description: "As Chief Operating Officer, our COO drives operational excellence and ensures seamless execution across all departments."
  }
];

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-secondary dark:text-white mb-6">About MKrop</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are a team of passionate engineers and technology experts dedicated to transforming businesses 
            through innovative software solutions and strategic IT consulting.
          </p>
        </div>
      </section>

      {/* About Section */}
      {/* <AboutSection /> */}

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary dark:text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary dark:text-white mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary dark:text-white mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our experienced leaders bring together decades of expertise in technology and business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-secondary dark:text-white mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-secondary dark:text-white mb-6">Ready to Work with Us?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's discuss how our expertise and values can drive your business forward.
          </p>
          <Link
            href="/contact" 
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
