import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MoreThanCamera from './components/MoreThanCamera';
import KeySpecs from './components/KeySpecs';
import MakeItYours from './components/MakeItYours';
import Testimonials from './components/Testimonials';
import FeaturedIn from './components/FeaturedIn';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#08090C] text-white selection:bg-[#1D75FE] selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main>
        {/* Landing Hero Section */}
        <Hero />

        {/* 01, 02, 03 Narrative Feature Sections */}
        <Features />

        {/* More Than A Camera & Pilot / Motion Tracker */}
        <MoreThanCamera />

        {/* Key Specs */}
        <KeySpecs />

        {/* Make It Yours Colorways */}
        <MakeItYours />

        {/* Why People Love Kestrel - Testimonials */}
        <Testimonials />

        {/* Press / Media Logos Strip */}
        <FeaturedIn />

        {/* Bottom CTA Section */}
        <Community />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
