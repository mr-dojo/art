export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-m py-xxl bg-canvas-cream">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-heading text-h1 mb-l text-gallery-black">
          Costantino
          <span className="block mt-s text-lahaina-coral">
            Four Generations
          </span>
        </h1>
        <p className="font-body text-body text-iron-gray mb-xl">
          From iron to canvas. Opening soon.
        </p>
        <div className="flex justify-center">
          <a
            href="#signup"
            className="inline-block px-xl py-m bg-scroll-gold text-gallery-black font-body font-medium rounded-full hover:opacity-90 transition-opacity duration-200"
          >
            Get Notified
          </a>
        </div>
      </div>
    </section>
  );
}
