import ServicesSection from "@/components/sections/services-section";
import { Code, Users, TrendingUp, Bot, Globe, Smartphone, Shield, Cloud, TestTube, Heart, Cpu, Database } from "lucide-react";

const detailedServices = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "With MKrop's assistance, you will gain a competitive advantage in the market, empowered with effective solutions at all the significant stages of your workflow.",
    features: ["Legacy System Modernization", "Enterprise Applications", "Microservices Architecture", "API Development"]
  },
  {
    icon: Bot,
    title: "AI Software Development", 
    description: "Make the most of the latest AI tech in computer vision, natural language processing, intelligent automation, and more with MKrop.",
    features: ["Machine Learning Models", "Computer Vision", "Natural Language Processing", "Intelligent Automation"]
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "From custom web applications and SaaS products to e-commerce solutions, we deliver scalable, secure, high-performance web app development services.",
    features: ["Progressive Web Apps", "E-commerce Platforms", "SaaS Solutions", "Custom Web Applications"]
  },
  {
    icon: Database,
    title: "Data Management and Analysis",
    description: "We harness leading-edge tools for data management, visualization, and performance analytics to provide data solutions and valuable insights for informed decision-making.",
    features: ["Data Warehousing", "Business Intelligence", "Real-time Analytics", "Data Visualization"]
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "At MKrop, we leverage our technical expertise to deliver tailored mobile app development solutions that cater to our clients' unique business requirements, regardless of their complexity.",
    features: ["iOS Development", "Android Development", "Cross-platform Apps", "React Native"]
  },
  {
    icon: Cloud,
    title: "DevOps and Cloud Solutions",
    description: "Going along with the industry trends for scalability and security of infrastructures, we will empower your business with robust and cost-effective solutions.",
    features: ["Cloud Migration", "Infrastructure as Code", "CI/CD Pipelines", "Container Orchestration"]
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    description: "Shield your business from cyber threats, protect sensitive data, and ensure uninterrupted operations.",
    features: ["Security Audits", "Penetration Testing", "Compliance Management", "Security Training"]
  },
  {
    icon: TestTube,
    title: "Software Testing Services",
    description: "With MKrop's end-to-end QA outsourcing services, your development team can focus on innovation while we ensure reliable products through comprehensive testing — from functionality to security.",
    features: ["Automated Testing", "Performance Testing", "Security Testing", "Quality Assurance"]
  },
  {
    icon: Heart,
    title: "Healthcare Software Development",
    description: "We employ advanced technologies to align all the processes at your enterprise within an easy-to-manage platform, minimize effort and maximize value for your business.",
    features: ["HIPAA Compliance", "Electronic Health Records", "Telemedicine Platforms", "Medical Device Software"]
  },
  {
    icon: Cpu,
    title: "IoT Development Services",
    description: "From smart device firmware and edge computing to cloud integration, we build robust scalable secure, high-performance IoT solutions for industries.",
    features: ["Embedded Systems", "Edge Computing", "IoT Platforms", "Sensor Networks"]
  },
  {
    icon: Users,
    title: "Talent Provision",
    description: "Access top-tier developers and IT professionals to scale your team quickly and efficiently.",
    features: ["Staff Augmentation", "Dedicated Teams", "Technical Recruiting", "Remote Development Teams"]
  },
  {
    icon: TrendingUp,
    title: "IT Consulting",
    description: "Strategic guidance to optimize your technology infrastructure and drive digital transformation.",
    features: ["Digital Strategy", "Technology Assessment", "Architecture Design", "Project Management"]
  },
];

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-secondary dark:text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive software development services designed to empower businesses across industries. 
            Whether you need to fill skill gaps, meet deadlines, or scale operations, we offer tailored solutions 
            to transform your digital capabilities and achieve your business goals.
          </p>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {detailedServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-secondary dark:text-white mb-3">{service.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-secondary dark:text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Contact us to discuss your project requirements and how we can help you achieve your goals.
          </p>
          <a 
            href="/contact" 
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
