import React from 'react';
import { Brain, Bot, BarChart, Workflow, Shield, Database } from 'lucide-react';

const services = [
  {
    icon: <Brain className="h-12 w-12" />,
    title: "Lead response automation",
    description: "AI systems that answer inquiries instantly, qualify leads, and route them to the right next step without delay.",
    tags: ["WhatsApp", "Chatbots", "Qualification"]
  },
  {
    icon: <Bot className="h-12 w-12" />,
    title: "Sales assistant bots",
    description: "Conversational agents that handle common sales questions, provide product info, and keep conversations moving 24/7.",
    tags: ["Sales", "Support", "Automation"]
  },
  {
    icon: <BarChart className="h-12 w-12" />,
    title: "AI analytics dashboards",
    description: "Translate raw business data into actionable insights so decisions are based on patterns, not guesswork.",
    tags: ["Reporting", "Forecasting", "Insights"]
  },
  {
    icon: <Workflow className="h-12 w-12" />,
    title: "Workflow automation",
    description: "Connect your tools, streamline operations, and reduce repetitive work across your business functions.",
    tags: ["CRM", "Operations", "Speed"]
  },
  {
    icon: <Database className="h-12 w-12" />,
    title: "Document processing",
    description: "Extract information from invoices, forms, and business documents to reduce manual errors and time spent on admin.",
    tags: ["OCR", "Forms", "Efficiency"]
  },
  {
    icon: <Shield className="h-12 w-12" />,
    title: "Business-ready AI setup",
    description: "Practical implementation that fits your current systems, team structure, and growth goals without complexity.",
    tags: ["Integration", "Deployment", "Support"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Solutions built for
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> real business problems</span>
          </h2>
          <p className="text-gray-400 text-lg">Better response times, less manual work, and more reliable operations.</p>
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