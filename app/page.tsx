import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Intro />
      <EmailCapture />
      <Footer />
    </main>
  );
}
