import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Cpu, FlaskConical, Building2, ArrowRight, HeartHandshake, Target, Sparkles, Zap } from 'lucide-react';

const trustBadges = [
  'Based in Pune, India',
  'Human-in-the-loop QA',
  'Startup-Friendly Approach',
];

const targetAudience = [
  {
    icon: Cpu,
    title: 'AI Startups & ML Developers',
    description: 'Scale your training data pipeline with precision annotation services that keep pace with your development cycles.',
  },
  {
    icon: FlaskConical,
    title: 'Research Teams',
    description: 'Get meticulously labeled datasets for your experiments with detailed documentation and quality focus.',
  },
  {
    icon: Building2,
    title: 'Enterprise Clients',
    description: 'Enterprise-grade data labeling with dedicated focus and seamless integration into your workflows.',
  },
];

const whyChooseUs = [
  {
    icon: HeartHandshake,
    title: 'Personalized Service',
    description: 'As a startup ourselves, we understand your needs. You work directly with our team, not through layers of bureaucracy.',
  },
  {
    icon: Target,
    title: 'Attention to Detail',
    description: 'Every annotation is reviewed multiple times with documented quality checks to ensure accuracy and consistency.',
  },
  {
    icon: Zap,
    title: 'Startup Agility',
    description: 'We adapt quickly to your changing requirements. Flexible workflows that evolve with your project needs.',
  },
  {
    icon: Sparkles,
    title: 'Continuous Improvement',
    description: 'We learn from every project and constantly refine our processes to deliver better results for your team.',
  },
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[#0A0A0A]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#FF8C00]/5 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF8C00]/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF4500]/10 rounded-full blur-[128px]" />
        </div>

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-[#A0A0A0]">Available for new projects</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Precision At Input.
              <br />
              <span className="gradient-text">Quality In Output.</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#A0A0A0] max-w-2xl mx-auto mb-10"
            >
              High-accuracy data annotation and labeling services built for AI and ML development teams.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/contact" className="btn-primary flex items-center space-x-2">
                <span>Get a Quote</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-[#0A0A0A]/80 backdrop-blur-xl"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Check size={18} className="text-[#FF8C00]" />
                  <span className="text-sm text-[#A0A0A0]">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Target Audience Section */}
      <section className="section-padding bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Built for <span className="gradient-text">Innovators</span>
            </h2>
            <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
              We serve teams at every stage of the AI development lifecycle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targetAudience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 card-glow h-full">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[#A0A0A0] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Why <span className="gradient-text">Choose Us</span>
            </h2>
            <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
              We're a startup that understands startups. Quality, flexibility, and personal attention come standard.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 card-glow h-full">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[#A0A0A0] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF8C00]/10 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to accelerate your AI development?
            </h2>
            <p className="text-[#A0A0A0] text-lg mb-10">
              Let's discuss how Labelburo can help you build high-quality training datasets that power your models.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Start a Conversation</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
