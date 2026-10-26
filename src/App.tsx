import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Training from '@/components/Training';
import Tools from '@/components/Tools';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.15,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        const rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#faf7f2] text-[#14110f] antialiased relative">
            <div className="grain" aria-hidden="true" />
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
