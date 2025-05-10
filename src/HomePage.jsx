import React from "react";

export default function HomePage() {
  return (
    <div className="font-roboto bg-green-50 text-gray-800">
      <header className="bg-green-700 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">Green & Clean Services</h1>
        <p className="mt-2">Professional Gardening and Cleaning for Homes & Offices</p>
      </header>

      <nav className="bg-green-600 flex justify-center py-3">
        <a href="#services" className="mx-4 text-white font-bold hover:underline">Services</a>
        <a href="#about" className="mx-4 text-white font-bold hover:underline">About</a>
        <a href="#contact" className="mx-4 text-white font-bold hover:underline">Contact</a>
      </nav>

      <section className="bg-cover bg-center text-white text-center py-20 px-4" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')" }}>
        <h1 className="text-5xl font-bold mb-4">Bringing Nature and Cleanliness to You</h1>
        <p className="text-lg">Your one-stop solution for garden care and cleaning services</p>
      </section>

      <section id="services" className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { title: "Garden Maintenance", desc: "Lawn mowing, weeding, pruning, and seasonal planting." },
            { title: "Home Cleaning", desc: "Deep cleaning for all areas of your home including kitchens and bathrooms." },
            { title: "Office Cleaning", desc: "Reliable and thorough cleaning to keep your workspace spotless." },
            { title: "Gutter Cleaning", desc: "Safe and efficient removal of debris from your gutters." }
          ].map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow p-6 max-w-xs">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="py-12 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="max-w-2xl mx-auto">
          With over 10 years of experience, Green & Clean Services is committed to delivering high-quality gardening and cleaning services. We pride ourselves on eco-friendly practices, reliability, and exceptional customer service.
        </p>
      </section>

      <section id="contact" className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p>Email: contact@greenandclean.com | Phone: 07532755177</p>
        <p>Serving the Greater Liverpool Area, Mon–Sat: 8am – 6pm</p>
      </section>

      <footer className="bg-green-700 text-white text-center py-4">
        <p>&copy; 2025 Green & Clean Services. All rights reserved.</p>
      </footer>
    </div>
  );
}
