import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.pexels.com/photos/3184463/pexels-photo-3184463.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          }}
        />
        <h1 className="relative z-10 text-cyan-400 text-5xl md:text-6xl font-bold">Contact With Us</h1>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-cyan-500 text-sm font-semibold uppercase tracking-wider mb-2">
              We are here!
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Get in Touch
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Phone className="text-cyan-600" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Number</h3>
              <p className="text-gray-600">+88 01955 144594</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Mail className="text-cyan-600" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@karigor.com.bd</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <MapPin className="text-cyan-600" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
              <p className="text-gray-600">200/B, Ambagan Bazar Rd, Savar, Dhaka-1344</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-cyan-500 text-sm font-semibold uppercase tracking-wider mb-2">
                Let's Say Hi
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 mb-8">We are just a message away!</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Your Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
                />

                <textarea
                  name="message"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-cyan-600 text-white rounded font-semibold hover:bg-cyan-700 transition disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Now'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-600 font-semibold">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 font-semibold">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>

            <div className="space-y-6">
              <img
                src="https://images.pexels.com/photos/3184363/pexels-photo-3184363.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Contact"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
