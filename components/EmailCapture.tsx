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
    <section id="signup" className="py-xxl px-m bg-canvas-cream">
      <div className="max-w-md mx-auto">
        <h2 className="font-heading text-h3 mb-m text-gallery-black text-center">
          Stay Updated
        </h2>
        <p className="font-body text-body text-center text-iron-gray mb-l">
          Be the first to know when we launch our gallery.
        </p>

        <form onSubmit={handleSubmit} className="space-y-m">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-m py-m rounded-lg border border-iron-gray bg-canvas-cream text-gallery-black placeholder-iron-gray/60 focus:outline-none focus:ring-2 focus:ring-maui-blue font-body"
              required
              disabled={status === 'success'}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'success'}
            className="w-full px-l py-m bg-scroll-gold text-gallery-black font-body font-medium rounded-lg hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'success' ? 'Thank You!' : 'Notify Me'}
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-m text-center text-maui-blue font-body text-small">
            Successfully subscribed! We&apos;ll be in touch soon.
          </p>
        )}

        {status === 'error' && (
          <p className="mt-m text-center text-lahaina-coral font-body text-small">
            Please enter a valid email address.
          </p>
        )}
      </div>
    </section>
  );
}
