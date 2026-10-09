import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Training from '@/components/Training';
import Tools from '@/components/Tools';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-[#fdf8f0] text-[#12100e] antialiased relative">
            {/* subtle halftone strip at top */}
            <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.035] dots-bg" aria-hidden />
            <Navbar />
            <main className="relative z-10">
                <Hero />
                <Services />
                <Training />
                <Tools />
                <About />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}

export default App;
