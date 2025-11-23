export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          Costantino
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mt-2">
            Contemporary Art
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 text-balance">
          Coming Soon
        </p>
        <div className="flex justify-center">
          <a
            href="#signup"
            className="inline-block px-8 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors duration-200"
          >
            Get Notified
          </a>
        </div>
      </div>
    </section>
  );
}
