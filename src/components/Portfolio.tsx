import React from 'react';
import { Brain, LineChart, DollarSign, File, MessageCircle, Phone, ClipboardList , Package , UserCheck    } from 'lucide-react';

const projects = [
  {
    icon: <Brain className="h-12 w-12" />,
    title: "Personality Trait Analysis",
    description: "Advanced deep learning algorithm that analyzes customer behavior through conversation patterns, enabling predictive personality insights.",
    tags: ["Deep Learning", "NLP", "Behavioral Analysis"],
    highlight: "98% accuracy in trait predictions."
  },
  {
    icon: <DollarSign className="h-12 w-12" />,
    title: "Financial Bot",
    description: "Sophisticated LLM-powered bot handling complex financial transactions and ledger management with enterprise-grade security along with user friendliness.",
    tags: ["LLM", "FinTech", "Automation"],
    highlight: "Handles $2M+ in daily transactions."
  },
  {
    icon: <MessageCircle  className="h-12 w-12" />,
    title: "Sales Assistant Bot",
    description: "AI-driven chatbot leveraging LLM technology to streamline sales processes and provide instant support to agents and customers.",
    tags: ["Sales", "Customer Support", "LLM"],
    highlight: "Boosts conversion rates by 45%."
  },
  {
    icon: <Phone  className="h-12 w-12" />,
    title: "WhatsApp Insight Chatbot",
    description: "An intelligent chatbot that integrates with your database, providing instant insights and results directly via WhatsApp.",
    tags: ["Chatbot", "WhatsApp", "Data Insights"],
    highlight: "Delivers real-time data insights via chat."
  },
  {
    icon: <File className="h-12 w-12" />,
    title: "Invoice Reader",
    description: "Advanced technology that automates the extraction and conversion of financial reports into system-compatible formats.",
    tags: ["OCR", "LLM", "Financial Reporting"],
    highlight: "Reduces tax filing work by 40%."
  },
  {
    icon: <ClipboardList  className="h-12 w-12" />,
    title: "Scraper Analytics",
    description: "Automates competitor website scraping to generate market-driven sales packages, keeping your business ahead of the curve.",
    tags: ["Scraping", "LLM", "API"],
    highlight: "Adapts 30% faster to market changes."
  },
  {
    icon: <Package  className="h-12 w-12" />,
    title: "Recommendation Engine",
    description: "AI-driven recommendation system for ecommerce platforms that analyzes user data and compares vendor offers to suggest the best deals for customers.",
    tags: ["Recommendation Systems", "Ecommerce", "Data Science"],
    highlight: "Increases customer engagement by 25%."
  },
  {
    icon: <UserCheck  className="h-12 w-12" />,
    title: "AI Chatbot Sales Agent",
    description: "Developed a chatbot that extracts relevant context from previous chats and uses RAG (retrieval-augmented generation) to generate real-time, informed responses, acting as a mini sales agent.",
    tags: ["Chatbot", "AI", "Sales", "RAG"],
    highlight: "Automates 70% of customer inquiries."
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