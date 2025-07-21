import ContactSection from "@/components/sections/contact-section";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-secondary mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with innovative technology solutions? 
            Let's discuss your project and explore how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Email Us</h3>
              <p className="text-gray-600">hello@mkrop.com</p>
              <p className="text-gray-600">support@mkrop.com</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-gray-600">+1 (555) 987-6543</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Tech Avenue</p>
              <p className="text-gray-600">San Francisco, CA 94105</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Office Hours</h3>
              <p className="text-gray-600">Mon - Fri: 9AM - 6PM</p>
              <p className="text-gray-600">Sat: 10AM - 4PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">Located in the heart of San Francisco's tech district</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Interactive map would be embedded here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-secondary mb-3">How quickly can you start a project?</h3>
              <p className="text-gray-600">We typically can start new projects within 1-2 weeks, depending on the scope and our current capacity. Contact us for specific timelines.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-secondary mb-3">Do you work with clients globally?</h3>
              <p className="text-gray-600">Yes, we serve clients across Europe and America, with teams experienced in remote collaboration and different time zones.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-secondary mb-3">What is your typical project timeline?</h3>
              <p className="text-gray-600">Project timelines vary based on complexity, but most projects range from 3-12 months. We provide detailed estimates during our initial consultation.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-secondary mb-3">Do you provide ongoing support?</h3>
              <p className="text-gray-600">Yes, we offer comprehensive support and maintenance packages to ensure your solutions continue to perform optimally after deployment.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
