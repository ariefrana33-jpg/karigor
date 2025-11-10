import { useState } from 'react';

function About() {
  const [activeTab, setActiveTab] = useState('philosophy');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team working"
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          <div>
            <p className="text-cyan-500 text-sm font-semibold uppercase tracking-wider mb-2">
              About Our Company
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About us
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Karigor Digital Ltd is a web design and development company that helps businesses grow online. We offer a range of top-quality services, from website design and development to Graphics Design, Motion Graphic, SEO, social media marketing, and more. Our team of experts are dedicated to providing our clients with the highest level of service possible, ensuring their satisfaction every step of the way. With over 9 years of experience in the industry, we're proud to be one of the leading providers of digital solutions in Bangladesh.
            </p>

            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setActiveTab('philosophy')}
                className={`px-6 py-3 rounded-full font-semibold transition ${
                  activeTab === 'philosophy'
                    ? 'bg-cyan-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Our Philosophy
              </button>
              <button
                onClick={() => setActiveTab('mission')}
                className={`px-6 py-3 rounded-full font-semibold transition ${
                  activeTab === 'mission'
                    ? 'bg-cyan-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Mission
              </button>
              <button
                onClick={() => setActiveTab('vision')}
                className={`px-6 py-3 rounded-full font-semibold transition ${
                  activeTab === 'vision'
                    ? 'bg-cyan-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Vision
              </button>
              <button
                onClick={() => setActiveTab('policy')}
                className={`px-6 py-3 rounded-full font-semibold transition ${
                  activeTab === 'policy'
                    ? 'bg-cyan-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Policy
              </button>
            </div>

            {activeTab === 'philosophy' && (
              <p className="text-gray-600 leading-relaxed">
                Our philosophy is focused on providing the best possible experience for our clients. We work as a team to understand your business needs and choose the right technologies to help you achieve your goals. We are always looking for ways to improve and grow so that we can provide the best possible service for our clients.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
