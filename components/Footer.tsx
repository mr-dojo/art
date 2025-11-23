export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-gray-200">
      <div className="max-w-6xl mx-auto text-center text-sm text-gray-600">
        <p>© {currentYear} Costantino Art. All rights reserved.</p>
      </div>
    </footer>
  );
}
