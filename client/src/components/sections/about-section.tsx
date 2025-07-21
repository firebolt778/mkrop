export default function AboutSection() {
  const stats = [
    { value: "150+", label: "Projects Delivered" },
    { value: "80+", label: "Happy Clients" },
    { value: "10+", label: "Years Experience" },
    { value: "50+", label: "Team Members" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-secondary mb-6">About MKrop.com</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over a decade of experience in software development and IT consulting, 
              MKrop.com has been empowering businesses across Europe and America with innovative technology solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of seasoned engineers combines deep technical expertise with business acumen 
              to deliver solutions that drive real results for our clients.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Business consulting meeting with technology professionals"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -top-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
