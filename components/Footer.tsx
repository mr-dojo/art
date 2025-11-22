export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto text-center text-sm text-gray-600 dark:text-gray-400">
        <p>© {currentYear} Costantino Art. All rights reserved.</p>
      </div>
    </footer>
  );
}
