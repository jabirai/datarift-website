import React, { useState } from 'react';
import { X, Loader2 } from 'lucide-react';

interface DemoFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoForm({ isOpen, onClose }: DemoFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceInterest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
          setFormData({
            name: '',
            email: '',
            company: '',
            serviceInterest: '',
            message: ''
          });
        }, 1500);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl w-full max-w-lg p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold mb-6">Schedule a Demo</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form fields for name, email, company, serviceInterest, message */}
          {/* Same fields as before */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : submitStatus === 'success' ? (
              'Demo Requested!'
            ) : submitStatus === 'error' ? (
              'Error - Try Again'
            ) : (
              'Request Demo'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
