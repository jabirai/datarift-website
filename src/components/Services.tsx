import React from 'react';
import { Brain, Bot, BarChart, Workflow, Shield, Database } from 'lucide-react';

const services = [
  {
    icon: <Brain className="h-12 w-12" />,
    title: "Lead response automation",
    description: "Answer inquiries instantly, qualify prospects, and route them to the right next step without losing momentum.",
    tags: ["WhatsApp", "Chatbots", "Lead Qualification"]
  },
  {
    icon: <Bot className="h-12 w-12" />,
    title: "Sales follow-up automation",
    description: "Keep leads engaged with timely reminders, consistent follow-up, and better sales coverage even outside business hours.",
    tags: ["Sales", "Follow-up", "Automation"]
  },
  {
    icon: <BarChart className="h-12 w-12" />,
    title: "AI reporting & insights",
    description: "Transform your data into useful insights so your team makes decisions from patterns, not guesswork.",
    tags: ["Reporting", "Forecasting", "Insights"]
  },
  {
    icon: <Workflow className="h-12 w-12" />,
    title: "Admin workflow automation",
    description: "Cut repetitive tasks, reduce delays, and free your team to focus on actual business growth.",
    tags: ["Operations", "Efficiency", "Automation"]
  },
  {
    icon: <Database className="h-12 w-12" />,
    title: "Document & data processing",
    description: "Extract and organize information from forms, invoices, and business documents without manual rewriting and re-entry.",
    tags: ["OCR", "Forms", "Efficiency"]
  },
  {
    icon: <Shield className="h-12 w-12" />,
    title: "Business-ready AI setup",
    description: "Implement systems that fit your current tools, team setup, and commercial goals without unnecessary complexity.",
    tags: ["Integration", "Deployment", "Support"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Datarift helps you
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> improve</span>
          </h2>
          <p className="text-gray-400 text-lg">Quicker replies, fewer missed opportunities, and less manual work.</p>
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