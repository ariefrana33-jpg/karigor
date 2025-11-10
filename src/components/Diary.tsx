function Diary() {
  const posts = [
    {
      category: "Development",
      title: "7 Reasons Why Your Business Needs a Website",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      category: "Traffic",
      title: "5 Tips To Increase Your Website Traffic",
      image: "https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      category: "Development",
      title: "7 Tips to Make Your Small Business Website Stand Out",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-500 text-sm font-semibold uppercase tracking-wider mb-2">
            what's stories on
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Diary
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some posts that you might also be interested in.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-gray-300 text-sm mb-2">{post.category}</p>
                  <h3 className="text-white text-xl font-bold">{post.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Diary;
