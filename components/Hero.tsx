export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          Costantino
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 mt-2">
            Contemporary Art
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 text-balance">
          Coming Soon
        </p>
        <div className="flex justify-center">
          <a
            href="#signup"
            className="inline-block px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
          >
            Get Notified
          </a>
        </div>
      </div>
    </section>
  );
}
