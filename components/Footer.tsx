export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-l px-m bg-canvas-cream border-t border-iron-gray/20">
      <div className="max-w-6xl mx-auto text-center font-body text-small text-iron-gray">
        <p>© {currentYear} Costantino Art. All rights reserved.</p>
      </div>
    </footer>
  );
}
