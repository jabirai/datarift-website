import React from 'react';
import { Brain, MessageSquare, LineChart, DollarSign } from 'lucide-react';

const projects = [
  {
    icon: <Brain className="h-12 w-12" />,
    title: "Personality Trait Analysis",
    description: "Advanced deep learning algorithm that analyzes customer behavior through conversation patterns, enabling predictive personality insights.",
    tags: ["Deep Learning", "NLP", "Behavioral Analysis"],
    highlight: "98% accuracy in trait prediction"
  },
  {
    icon: <DollarSign className="h-12 w-12" />,
    title: "Financial Bot",
    description: "Sophisticated LLM-powered bot handling complex financial transactions and ledger management with enterprise-grade security.",
    tags: ["LLM", "FinTech", "Automation"],
    highlight: "Processes $2M+ transactions daily"
  },
  {
    icon: <MessageSquare className="h-12 w-12" />,
    title: "Sales Assistant Bot",
    description: "AI-driven chatbot leveraging LLM technology to streamline sales processes and provide instant support to agents and customers.",
    tags: ["Sales", "Customer Support", "LLM"],
    highlight: "45% increase in conversion rate"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforming Industries with
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> AI Innovation</span>
          </h2>
          <p className="text-gray-400 text-lg">Discover how our AI solutions are revolutionizing businesses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              
              <div className="relative">
                <div className="text-purple-400 mb-6">{project.icon}</div>
                
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-500/10 text-purple-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-2">
                  <LineChart className="h-5 w-5 text-green-400" />
                  <span className="text-green-400 font-medium">{project.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}