function Projects() {
  const projects = [
    {
      category: "Development",
      title: "EMCH Web",
      image: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      category: "Brand Development",
      title: "AMARA BRAND SOLUTION",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      category: "Development",
      title: "BGITCL Web Solution",
      image: "https://images.pexels.com/photos/5842621/pexels-photo-5842621.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-500 text-sm font-semibold uppercase tracking-wider mb-2">
            We're always up for a new challenge!
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Successful Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've worked with some of the biggest brands and we're experts in driving results for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-gray-300 text-sm mb-2">{project.category}</p>
                  <h3 className="text-white text-2xl font-bold mb-4">{project.title}</h3>
                  <button className="px-6 py-2 border-2 border-white text-white rounded hover:bg-white hover:text-gray-900 transition">
                    Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-4 bg-cyan-600 text-white rounded-full font-semibold hover:bg-cyan-700 transition">
            EXPLORE MORE
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
