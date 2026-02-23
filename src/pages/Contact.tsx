import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Send, MessageSquare, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';

const datasetTypes = [
  'Image Annotation',
  'Text Annotation',
  'Video Annotation',
  'Dataset Preparation',
  'Custom Workflow',
  'Not Sure Yet',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    datasetType: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs
    .send(
      "label_860012",      // replace
      "template_pb4dxcc",     // replace
      {
        name: formData.name,
        email: formData.email,
        datasetType: formData.datasetType,
        message: formData.message,
      },
      "IuvZnn2l5YrW8xJq5"       // replace
    )
    .then(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        datasetType: '',
        message: '',
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    })
    .catch((error) => {
      console.error("Email failed:", error);
      alert("Failed to send message. Please try again.");
    });
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Header Section */}
      <section className="section-padding bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF8C00]/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF4500]/10 rounded-full blur-[128px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <MessageSquare size={16} className="text-[#FF8C00]" />
              <span className="text-sm text-[#A0A0A0]">Get in Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-lg text-[#A0A0A0]">
              Ready to start your data annotation project? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/10">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Send us a message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                      <Check size={32} className="text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-[#A0A0A0]">
                      We'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#A0A0A0] focus:outline-none focus:border-[#FF8C00] focus:ring-1 focus:ring-[#FF8C00] transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#A0A0A0] focus:outline-none focus:border-[#FF8C00] focus:ring-1 focus:ring-[#FF8C00] transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="datasetType" className="block text-sm font-medium text-white mb-2">
                        Dataset Type
                      </label>
                      <select
                        id="datasetType"
                        name="datasetType"
                        value={formData.datasetType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FF8C00] focus:ring-1 focus:ring-[#FF8C00] transition-all duration-300 appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#0A0A0A]">Select a service</option>
                        {datasetTypes.map((type) => (
                          <option key={type} value={type} className="bg-[#0A0A0A]">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#A0A0A0] focus:outline-none focus:border-[#FF8C00] focus:ring-1 focus:ring-[#FF8C00] transition-all duration-300 resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary flex items-center justify-center space-x-2"
                    >
                      <span>Send Message</span>
                      <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Contact Information
                </h2>
                <p className="text-[#A0A0A0] leading-relaxed mb-8">
                  Reach out to us through any of the channels below. We're always ready to discuss your data annotation needs and how we can help accelerate your AI development.
                </p>
              </div>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                    <p className="text-[#A0A0A0]">Pune, India</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <a
                      href="mailto:labelburo.services@gmail.com"
                      className="text-[#A0A0A0] hover:text-[#FF8C00] transition-colors duration-300"
                    >
                      labelburo.services@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <a
                      href="tel:+919021471034"
                      className="text-[#A0A0A0] hover:text-[#FF8C00] transition-colors duration-300"
                    >
                      +91 9021471034
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <Linkedin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">LinkedIn</h3>
                    <a
                      href="https://linkedin.com/company/Labelburo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A0A0A0] hover:text-[#FF8C00] transition-colors duration-300"
                    >
                      linkedin.com/company/Labelburo
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-white font-medium">Quick Response</span>
                </div>
                <p className="text-[#A0A0A0] text-sm">
                  We prioritize timely communication to keep your projects moving forward.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'What types of data can you annotate?',
                a: 'We specialize in image, text, and video annotation, as well as comprehensive dataset preparation services. Contact us for custom requirements.',
              },
              {
                q: 'How do you ensure data security?',
                a: 'We follow strict data handling protocols with NDA agreements in place. Your data is never shared or used for any purpose other than the agreed annotation work.',
              },
              {
                q: 'What is your typical turnaround time?',
                a: 'Turnaround time depends on project size and complexity. We provide detailed timelines during the requirement understanding phase and maintain regular progress updates.',
              },
              {
                q: 'Can you handle large-scale projects?',
                a: 'Yes, we can scale our resources to handle projects of various sizes. Our dedicated team ensures focused attention on your project, regardless of scope.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/10"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{faq.q}</h4>
                <p className="text-[#A0A0A0]">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
