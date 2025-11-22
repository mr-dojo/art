'use client';

import { FormEvent, useState } from 'react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      return;
    }

    // For now, just show success message
    // In the future, this can be connected to a backend service
    console.log('Email submitted:', email);
    setStatus('success');
    setEmail('');

    // Reset after 3 seconds
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="signup" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
          Stay Updated
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Be the first to know when we launch our gallery.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
              required
              disabled={status === 'success'}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'success'}
            className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'success' ? 'Thank You!' : 'Notify Me'}
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-center text-green-600 dark:text-green-400 text-sm">
            Successfully subscribed! We&apos;ll be in touch soon.
          </p>
        )}

        {status === 'error' && (
          <p className="mt-4 text-center text-red-600 dark:text-red-400 text-sm">
            Please enter a valid email address.
          </p>
        )}
      </div>
    </section>
  );
}
