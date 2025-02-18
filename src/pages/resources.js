import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-900 text-white">
        <Navbar />
      <div className="flex-grow">
        <div className="max-w-4xl mx-auto py-12 px-4 text-center">
          <h1 className="text-4xl font-bold mb-8">Resources</h1>
          <p className="text-zinc-400 mb-12">
            Choose from a variety of learning tools to enhance your
            understanding!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-700 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold mb-4">Flashcards</h2>
              <p className="text-zinc-400 mb-4">
                Practice key concepts with interactive flashcards.
              </p>
              <a
                href="/flashcards/home"
                className="text-zinc-300 hover:text-zinc-100 transition"
              >
                Explore Flashcards &rarr;
              </a>
            </div>

            <div className="bg-zinc-700 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold mb-4">Code Snippets</h2>
              <p className="text-zinc-400 mb-4">
                Browse reusable code snippets for common algorithms.
              </p>
              <a
                href="#"
                className="text-zinc-300 hover:text-zinc-100 transition"
              >
                Explore Code Snippets &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
