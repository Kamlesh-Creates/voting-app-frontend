import React from 'react';

const HomePage = () => {
  const candidates = [
    {
      id: 1,
      name: 'John Doe',
      description: 'Running for Student President',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80',
      votes: 120,
    },
    {
      id: 2,
      name: 'Jane Smith',
      description: 'Running for Treasurer',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80',
      votes: 95,
    },
    {
      id: 3,
      name: 'Alex Johnson',
      description: 'Running for Cultural Head',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
      votes: 75,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-blue-50">

      {/* Navbar */}
      <header className="bg-gradient-to-r from-indigo-700 to-blue-600 shadow-lg text-white">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold tracking-tight drop-shadow-md">Voting<span className="text-yellow-400">App</span></h1>
          <nav className="space-x-8 font-semibold text-lg">
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Home</a>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Create</a>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Candidates</a>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Admin</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500 text-white py-28 px-6 text-center overflow-hidden">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg mb-4 max-w-4xl mx-auto">
          Cast Your Vote. <br /> Make It Count.
        </h2>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 drop-shadow-md">
          Secure. Transparent. Real-Time Voting Platform Built for You.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="#"
            className="bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300 rounded-full px-8 py-3 font-bold text-lg shadow-lg shadow-yellow-300/50"
          >
            Create Election
          </a>
          <a
            href="#"
            className="border-4 border-white hover:border-yellow-400 transition-colors duration-300 rounded-full px-8 py-3 font-semibold text-lg hover:text-yellow-400"
          >
            View Candidates
          </a>
        </div>
        {/* D */}
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-yellow-300 opacity-20 blur-3xl"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-indigo-800 opacity-30 blur-3xl"></div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { label: 'Total Candidates', value: candidates.length },
            { label: 'Total Votes', value: 290 },
            { label: 'Active Elections', value: 1 },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 cursor-default"
            >
              <h3 className="text-lg text-indigo-600 font-semibold mb-2">{stat.label}</h3>
              <p className="text-5xl font-extrabold text-indigo-900">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Candidates Grid */}
      <section className="bg-gradient-to-t from-white to-blue-50 py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-extrabold text-indigo-800 mb-12 text-center tracking-wide">
            Meet the Candidates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {candidates.map(({ id, name, description, image, votes }) => (
              <div
                key={id}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.03] transition-transform duration-300"
              >
                <img
                  src={image}
                  alt={name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-indigo-900 mb-2">{name}</h3>
                  <p className="text-indigo-700 mb-4">{description}</p>
                  <div className="flex justify-between items-center text-indigo-600 font-semibold">
                    <span>Votes: {votes}</span>
                    <button className="bg-yellow-400 text-indigo-900 font-bold px-4 py-2 rounded-lg shadow-md hover:bg-yellow-500 transition-colors duration-300">
                      Vote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 text-indigo-100 text-center py-8 mt-auto">
        <p className="text-sm font-light tracking-wide">
          &copy; {new Date().getFullYear()} VotingApp. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
