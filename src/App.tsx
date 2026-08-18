import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import DemoForm from './components/DemoForm';
import Footer from './components/Footer';

const trustStats = [
  { value: '24/7', label: 'lead response coverage' },
  { value: '2x', label: 'faster follow-up' },
  { value: '70%', label: 'less repetitive admin' },
  { value: '1 wk', label: 'pilot launch window' }
];

const offerPillars = [
  {
    title: 'Respond to leads faster',
    text: 'Capture inquiries and respond instantly before interest cools off or your competitor gets the call first.',
    accent: 'from-purple-500/20 to-pink-500/20'
  },
  {
    title: 'Keep sales moving',
    text: 'Automate follow-ups, answer common questions, and qualify prospects without constant manual effort.',
    accent: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    title: 'Reduce admin drag',
    text: 'Cut repetitive work, document handling, and reporting tasks so your team can focus on growth.',
    accent: 'from-green-500/20 to-emerald-500/20'
  }
];

const proofPoints = [
  'Fewer missed inquiries',
  'Faster sales follow-up',
  'Less manual admin work',
  'Clearer operational flow'
];

const processSteps = [
  'Audit your current bottlenecks and lead flow',
  'Design a focused AI workflow for one business problem',
  'Launch a pilot, test results, and improve based on real usage',
  'Scale the automation into a repeatable revenue system'
];

function App() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <Navbar onDemoClick={() => setIsDemoFormOpen(true)} />
      <Hero onDemoClick={() => setIsDemoFormOpen(true)} />

      <section className="bg-gray-950 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-gray-800 bg-black/40 p-6">
                <div className="text-3xl font-bold text-purple-400">{stat.value}</div>
                <div className="mt-2 text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-purple-400 mb-4">What Datarift solves</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              More replies. <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Less manual work.</span> Better sales momentum.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {offerPillars.map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl border border-gray-800 bg-gradient-to-b ${item.accent} p-[1px]`}
              >
                <div className="h-full rounded-2xl bg-black/90 p-8">
                  <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-purple-400 mb-4">How we work</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Start with one real bottleneck, then scale from there.
              </h2>

              <div className="space-y-5">
                {processSteps.map((step, index) => (
                  <div key={step} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/15 text-purple-300 font-bold flex items-center justify-center border border-purple-500/30">
                      {index + 1}
                    </div>
                    <p className="text-lg text-gray-300 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-gray-800 bg-gray-900/80 p-8 shadow-2xl shadow-purple-950/20">
              <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.2em] text-green-400">Example opportunity</p>
                <h3 className="mt-3 text-2xl font-bold">A business loses leads because replies are slow.</h3>
              </div>

              <div className="space-y-4 text-gray-300">
                <div className="rounded-xl bg-black/40 border border-gray-800 p-4">
                  <div className="text-sm text-gray-400">Before</div>
                  <div className="mt-2 font-medium">Manual follow-ups, missed inquiries, delayed responses.</div>
                </div>
                <div className="rounded-xl bg-purple-500/10 border border-purple-500/30 p-4">
                  <div className="text-sm text-purple-300">After</div>
                  <div className="mt-2 font-medium">Instant qualification, fast replies, and a clear next step for every lead.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-purple-500/25 bg-gradient-to-r from-purple-500/10 via-black to-pink-500/10 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-purple-300 mb-4">Why businesses contact Datarift</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">You do not need a giant AI project to start seeing results.</h2>
                <p className="text-lg text-gray-300 max-w-xl">
                  The fastest wins usually come from fixing one obvious bottleneck: slow replies, missed inquiries, or too much repetitive admin.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {proofPoints.map((point) => (
                  <div key={point} className="rounded-2xl border border-gray-700 bg-black/40 px-4 py-5 text-sm font-medium text-gray-200">
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-purple-400 mb-4">Ready to explore the fit?</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            See where your business is losing time or leads.
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Book a short call and we will identify one practical automation opportunity you could act on immediately.
          </p>
          <button
            onClick={() => setIsDemoFormOpen(true)}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-all"
          >
            Book a free 15-minute audit
          </button>
        </div>
      </section>

      <Services />
      <Portfolio />
      <DemoForm isOpen={isDemoFormOpen} onClose={() => setIsDemoFormOpen(false)} />
      <Footer />
    </div>
  );
}

export default App;