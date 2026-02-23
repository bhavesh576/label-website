import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Shield, Clock, HeartHandshake, MapPin, Award, Sparkles, Zap } from 'lucide-react';

const whyChooseUs = [
  {
    icon: HeartHandshake,
    title: 'Flexibility',
    description: 'Collaborative communication and responsive coordination. We adapt our workflows to match your needs and maintain open channels throughout the project.',
  },
  {
    icon: Target,
    title: 'Attention to Detail',
    description: 'Focused execution with documented quality checks. Every annotation is reviewed multiple times to ensure accuracy and consistency.',
  },
  {
    icon: Lightbulb,
    title: 'Research-Driven',
    description: 'Operational setup informed by current AI practices. We stay updated with the latest annotation techniques and industry standards.',
  },
];

const values = [
  {
    icon: Shield,
    title: 'Data Security',
    description: 'Strict NDA protocols with secure data handling practices to protect your intellectual property.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Clear milestone tracking and consistent progress updates to keep your project on schedule.',
  },
  {
    icon: Award,
    title: 'Quality First',
    description: 'Uncompromising quality standards with multi-stage reviews and thorough documentation.',
  },
];

export default function Company() {
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
              <Users size={16} className="text-[#FF8C00]" />
              <span className="text-sm text-[#A0A0A0]">About Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="gradient-text">Labelburo</span>
            </h1>
            <p className="text-lg text-[#A0A0A0]">
              Building quality training data that helps AI teams move faster and ship better models
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-[#A0A0A0] text-lg leading-relaxed mb-6">
                We're focused on building quality training data that helps AI teams move faster and ship better models. In the rapidly evolving world of artificial intelligence, we understand that the quality of your training data directly impacts the performance of your models.
              </p>
              <p className="text-[#A0A0A0] text-lg leading-relaxed">
                That's why we've built Labelburo with a singular focus: delivering precise, accurate, and reliable data annotations that power the next generation of AI applications. From computer vision to natural language processing, we provide the foundation your models need to succeed.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FF8C00]/20 rounded-full blur-[50px]" />
                <div className="space-y-6">
                  {[
                    { icon: Sparkles, title: 'Quality Focused', desc: 'Meticulous attention to every annotation' },
                    { icon: Zap, title: 'Startup Agility', desc: 'Quick adaptation to your evolving needs' },
                    { icon: HeartHandshake, title: 'Personal Touch', desc: 'Direct communication with our team' },
                    { icon: Target, title: 'Continuous Learning', desc: 'Improving with every project we take on' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                        <item.icon size={22} className="text-white" />
                      </div>
                      <div>
                        <div className="text-white font-medium">{item.title}</div>
                        <div className="text-[#A0A0A0] text-sm">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
              A dedicated team passionate about quality data annotation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 text-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#FF8C00]/10 rounded-full blur-[60px]" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6">
                  <Users size={40} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Dedicated Technical Team
                </h3>
                
                <p className="text-[#A0A0A0] leading-relaxed mb-6">
                  Labelburo is driven by a passionate technical team operating out of Pune, India. Each team member brings expertise in data annotation, quality assurance, and AI/ML workflows to ensure your projects receive the focused attention they deserve.
                </p>
                
                <div className="flex items-center justify-center space-x-2 text-[#A0A0A0]">
                  <MapPin size={18} className="text-[#FF8C00]" />
                  <span>Pune, India</span>
                </div>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why <span className="gradient-text">Choose Us</span>
            </h2>
            <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
              What sets Labelburo apart in the data annotation landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Values Section */}
      <section className="section-padding bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/10 text-center"
              >
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-[#A0A0A0] text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
