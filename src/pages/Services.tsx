import { motion } from 'framer-motion';
import { Image, FileText, Video, Database, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Image,
    title: 'Image Annotation',
    description: 'Comprehensive computer vision data labeling services including bounding boxes, semantic segmentation, and object detection for training accurate visual recognition models.',
    features: ['Bounding Boxes', 'Semantic Segmentation', 'Object Detection', 'Keypoint Annotation', 'Polygon Annotation'],
  },
  {
    icon: FileText,
    title: 'Text Annotation',
    description: 'Natural language processing data labeling including entity recognition, sentiment analysis, and NLP labeling to power your language models and text analysis systems.',
    features: ['Named Entity Recognition', 'Sentiment Analysis', 'Text Classification', 'Intent Labeling', 'Part-of-Speech Tagging'],
  },
  {
    icon: Video,
    title: 'Video Annotation',
    description: 'Frame-by-frame video labeling services for action recognition, temporal analysis, and motion tracking to train your video understanding AI models.',
    features: ['Frame-by-Frame Labeling', 'Action Recognition', 'Temporal Analysis', 'Object Tracking', 'Event Detection'],
  },
  {
    icon: Database,
    title: 'Dataset Preparation',
    description: 'End-to-end data collection, cleaning, and formatting services to ensure your datasets match your model requirements and training specifications.',
    features: ['Data Collection', 'Data Cleaning', 'Format Conversion', 'Quality Validation', 'Dataset Splitting'],
  },
];

export default function Services() {
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
              <Sparkles size={16} className="text-[#FF8C00]" />
              <span className="text-sm text-[#A0A0A0]">Our Expertise</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive <span className="gradient-text">Annotation Services</span>
            </h1>
            <p className="text-lg text-[#A0A0A0]">
              End-to-end data labeling solutions tailored to your AI and machine learning needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 card-glow h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[#A0A0A0] leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <span
                        key={fIndex}
                        className="px-3 py-1 text-xs rounded-full bg-white/5 text-[#A0A0A0] border border-white/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 text-[#FF8C00] hover:text-[#FF4500] transition-colors duration-300"
                  >
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Workflows Section */}
      <section className="section-padding bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF8C00]/10 rounded-full blur-[100px]" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Custom Workflows
                </h3>
                <p className="text-[#A0A0A0] leading-relaxed">
                  Tailored annotation processes designed for your specific project needs. We adapt our workflows to match your unique requirements, tools, and quality standards.
                </p>
              </div>
              <Link
                to="/contact"
                className="btn-primary flex items-center space-x-2 whitespace-nowrap"
              >
                <span>Discuss Your Project</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="section-padding bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="gradient-text">Quality Standards</span>
            </h2>
            <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
              Every annotation goes through rigorous quality checks to ensure accuracy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Multi-Stage Review', desc: 'Each annotation is reviewed by multiple team members' },
              { title: 'Consensus Validation', desc: 'Disputed labels are resolved through team consensus' },
              { title: 'Automated Checks', desc: 'AI-powered validation catches common errors' },
              { title: 'Client Feedback Loop', desc: 'Continuous improvement based on your feedback' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/10"
              >
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-[#A0A0A0] text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
