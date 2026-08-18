import React from 'react';
import { Brain, ArrowRight, Bot, Sparkles, Shield } from 'lucide-react';

interface HeroProps {
  onDemoClick: () => void;
}

export default function Hero({ onDemoClick }: HeroProps) {
  return (
    <div className="relative overflow-hidden bg-black text-white">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black" />

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px),
                           linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-center space-x-2 text-purple-400">
            <Brain className="h-6 w-6" />
            <span className="text-sm font-medium">AI automation for growing businesses</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Turn leads, follow-ups, and admin work
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> into revenue</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We build AI-powered systems that reply faster, qualify leads, automate repetitive work, and help businesses close more deals without adding more team overhead.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onDemoClick}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium flex items-center space-x-2 transition-all"
            >
              <span>Get a free automation audit</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <a
              href="#services"
              className="px-8 py-4 border border-gray-700 hover:border-purple-500 rounded-lg font-medium transition-all"
            >
              View solutions
            </a>
          </div>
        </div>

        {/* Features grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Bot className="h-6 w-6" />,
              title: "Faster lead response",
              description: "AI assistants that reply instantly, qualify prospects, and book calls without delay."
            },
            {
              icon: <Sparkles className="h-6 w-6" />,
              title: "Workflow automation",
              description: "Connect your tools, automate repetitive tasks, and reduce manual admin across your team."
            },
            {
              icon: <Shield className="h-6 w-6" />,
              title: "Business-ready systems",
              description: "Practical AI solutions designed for real operations, teams, and measurable outcomes."
            }
          ].map((feature, index) => (
            <div key={index} className="p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all">
              <div className="text-purple-400 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}