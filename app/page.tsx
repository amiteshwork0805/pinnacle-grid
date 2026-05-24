import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Expertise from '@/components/Expertise';
import Process from '@/components/Process';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Expertise Section */}
        <Expertise />

        {/* Process Section */}
        <Process />

        {/* Services Section */}
        <section id="services">
          <Services />
        </section>

        {/* Pricing Section */}
        <section id="pricing">
          <Pricing />
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
        <section id="faq">
          <FAQ />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
