import { Send } from 'lucide-react';

function AboutPage() {
  return (
    <div>
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          }}
        />
        <h1 className="relative z-10 text-cyan-400 text-5xl md:text-6xl font-bold">About</h1>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex gap-6 order-2 md:order-1">
              <div className="w-1/3">
                <img
                  src="https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Team 1"
                  className="rounded-lg shadow-lg h-48 object-cover"
                />
              </div>
              <div className="w-2/3 flex flex-col gap-6">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Team 2"
                  className="rounded-lg shadow-lg h-64 object-cover"
                />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
                  <Send size={20} className="text-white" />
                </div>
                <span className="text-cyan-600 font-semibold">Karigor Digital Limited</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Turn your dreams into a reality.
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our company, Karigor Digital Limited, specializes in website and app development. We help people turn their ideas into successful brands. We're especially skilled in creating custom solutions that users love.
                </p>
                <p>
                  We believe that technology can be an integral part of any organization's success. We're passionate about helping others unleash their potential with innovative services. And we're always looking to build iconic brands.
                </p>
                <p>
                  In short, we're a company that knows how to turn great ideas into successful businesses. So if you have an idea for an app, don't hesitate to get in touch. We'd love to help you make it a reality.
                </p>
              </div>

              <button className="mt-8 px-8 py-3 bg-cyan-600 text-white rounded font-semibold hover:bg-cyan-700 transition">
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-cyan-500 text-sm font-semibold uppercase tracking-wider mb-2">
              Smart ideas. Simple Delivery
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Creating Brands for the Future
            </h2>
            <p className="text-gray-600 mt-4">Your Success is Our Success</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zM16 16a5 5 0 01-8 0" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">290+</h3>
              <p className="text-gray-600">Projects Delivered</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10+</h3>
              <p className="text-gray-600">Years Of Industry Experience</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">99%</h3>
              <p className="text-gray-600">Certified & Expert Programmers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
