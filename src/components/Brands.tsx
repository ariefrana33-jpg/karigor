import { Building2 } from 'lucide-react';

function Brands() {
  const brands = [
    { name: "EMCH" },
    { name: "POLLUX" },
    { name: "Kholapari" },
    { name: "BGITCL" },
    { name: "IDEA" },
    { name: "Pigment" },
    { name: "Jazz Pharma" },
    { name: "Zeemart" },
    { name: "Greenesh" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-500 text-sm font-semibold uppercase tracking-wider mb-2">
            Top clients
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            We worked with brands.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-center">
                <Building2 className="mx-auto mb-2 text-gray-400" size={40} />
                <p className="text-gray-700 font-semibold">{brand.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
