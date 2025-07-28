import React from 'react';

import './Login.css';
import './Home.css';
import RoleRegistration from './RoleRegistration';

const Home = () => {
  return (
    <div className="home-page">
      {/* Header */}
      <header className="bg-blue-800 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Versatales</h1>
          <nav>
            <ul className="flex gap-6">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/register" className="hover:underline">Role Registration</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* About Section */}
      <section className="about bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4 text-center">About Versatales </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Welcome to Versatales — a company dedicated to delivering innovative solutions in software, design, and data-driven services.
            We blend creativity, logic, and modern technology to empower businesses of all sizes with scalable web and enterprise tools.
          </p>
        </div>
      </section>

      


      {/* Footer */}
      <footer className="bg-blue-800 text-white py-6 mt-10">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Versatiles. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
