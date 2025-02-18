import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-800 text-gray-800">
      <Navbar />
      <section className="flex flex-col items-center justify-center h-screen text-center px-4 bg-gradient-to-br bg-zinc-900">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
          Data Structures and Algorithms
        </h1>
        <p className="text-lg md:text-xl mb-6 text-zinc-400 drop-shadow-md">
          Your one-stop resource for flashcards, code snippets, and more!
        </p>
        <button className="bg-zinc-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-zinc-500 transition">
          Get Started
        </button>
      </section>

      <section className="py-12 bg-zinc-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-zinc-300">
            Explore Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-700 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2 text-white">
                Flashcards
              </h3>
              <p className="text-zinc-400 mb-4">
                Memorize key concepts with interactive flashcards.
              </p>
              <a
                href="#"
                className="text-zinc-300 hover:text-zinc-100 transition"
              >
                Learn More &rarr;
              </a>
            </div>
            <div className="bg-zinc-700 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2 text-white">
                Code Snippets
              </h3>
              <p className="text-zinc-400 mb-4">
                Explore reusable code snippets for common algorithms.
              </p>
              <a
                href="#"
                className="text-zinc-300 hover:text-zinc-100 transition"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
