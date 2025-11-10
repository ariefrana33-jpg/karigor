function Testimonial() {
  const testimonials = [
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We have worked with Karigor on several projects and they have always been able to help us stay ahead of our competition digitally. Their creative solutions and attention to detail have helped us reach our goals, and their customer service is exceptional. We would highly recommend Karigor for any digital needs.
            </p>
            <div>
              <p className="text-cyan-600 font-bold text-lg">DR. ENAMUR RAHMAN, MP</p>
              <p className="text-gray-500 text-sm">State Minister, Ministry of Disaster Mgt. & Relief</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {testimonials.map((image, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-md">
                <img
                  src={image}
                  alt={`Testimonial ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
