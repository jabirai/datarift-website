import React from 'react';
import { Brain, Bot, BarChart, Network, Shield, Workflow, Code, Database } from 'lucide-react';

const services = [
  {
    icon: <Brain className="h-12 w-12" />,
    title: "Custom LLM Development",
    description: "Tailored large language models designed specifically for your business needs, from customer service to content generation.",
    tags: ["GPT Fine-tuning", "Custom Training", "Domain Adaptation"]
  },
  {
    icon: <Bot className="h-12 w-12" />,
    title: "Intelligent Virtual Assistants",
    description: "Advanced AI assistants that understand context, handle complex queries, and learn from interactions.",
    tags: ["NLP", "Conversational AI", "Knowledge Base Integration"]
  },
  {
    icon: <BarChart className="h-12 w-12" />,
    title: "Predictive Analytics",
    description: "Deep learning models that forecast trends, analyze patterns, and provide actionable business insights.",
    tags: ["Machine Learning", "Forecasting", "Pattern Recognition"]
  },
  {
    icon: <Network className="h-12 w-12" />,
    title: "Neural Network Solutions",
    description: "Custom neural networks for complex problem-solving, from image recognition to natural language understanding.",
    tags: ["Deep Learning", "Computer Vision", "NLP"]
  },
  {
    icon: <Code className="h-12 w-12" />,
    title: "AI Integration Services",
    description: "Seamless integration of AI capabilities into your existing systems and workflows.",
    tags: ["API Development", "System Integration", "Cloud Deployment"]
  },
  {
    icon: <Database className="h-12 w-12" />,
    title: "Data Intelligence",
    description: "Transform raw data into intelligent insights using advanced AI algorithms and analytics.",
    tags: ["Big Data", "Analytics", "Machine Learning"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Enterprise-Grade
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> AI Services</span>
          </h2>
          <p className="text-gray-400 text-lg">Transforming businesses with state-of-the-art AI solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              
              <div className="relative">
                <div className="text-purple-400 mb-6">{service.icon}</div>
                
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-500/10 text-purple-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}