/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, FooterCTA } from './components/Layout';
import { Hero } from './components/HeroDemo';
import { HowItWorks, UseCases } from './components/Features';
import { Testimonials } from './components/SocialProof';
import { FAQ } from './components/FAQ';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-indigo/30 selection:text-white pb-0">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <UseCases />
        <Testimonials />
        <FAQ />
      </main>
      <FooterCTA />
    </div>
  );
}
