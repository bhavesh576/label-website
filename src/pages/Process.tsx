import { motion } from 'framer-motion';
import { MessageSquare, FileCheck, PenTool, Search, Send, Workflow } from 'lucide-react';

const processSteps = [
  {
    icon: MessageSquare,
    title: 'Requirement Understanding',
    description: 'We begin by discussing your project scope, annotation formats, and technical expectations. This foundational step ensures we fully understand your needs before starting.',
    details: ['Project scope definition', 'Annotation format specification', 'Technical requirements gathering', 'Timeline and milestone planning'],
  },
  {
    icon: FileCheck,
    title: 'Guideline Preparation',
    description: 'Our team defines comprehensive annotation instructions and quality standards tailored to your project. Clear guidelines ensure consistency across all labeled data.',
    details: ['Annotation guidelines document', 'Quality standards definition', 'Edge case handling rules', 'Sample annotation review'],
  },
  {
    icon: PenTool,
    title: 'Annotation Execution',
    description: 'Data labeling is performed using structured tools and workflows by our trained annotation team. We maintain strict adherence to the established guidelines.',
    details: ['Structured annotation tools', 'Trained annotation team', 'Progress tracking', 'Regular check-ins'],
  },
  {
    icon: Search,
    title: 'Review & Quality Check',
    description: 'Internal verification processes ensure accuracy and consistency. Multiple review stages catch errors before delivery to maintain high-quality standards.',
    details: ['Multi-stage review process', 'Error detection and correction', 'Consistency validation', 'Quality metrics reporting'],
  },
  {
    icon: Send,
    title: 'Delivery',
    description: 'Prepared datasets are shared in your preferred format, ready for integration into your ML pipeline. We provide comprehensive documentation with each delivery.',
    details: ['Format customization', 'Dataset documentation', 'Delivery via secure channels', 'Post-delivery support'],
  },
];

export default function Process() {
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
              <Workflow size={16} className="text-[#FF8C00]" />
              <span className="text-sm text-[#A0A0A0]">How We Work</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="gradient-text">Workflow Process</span>
            </h1>
            <p className="text-lg text-[#A0A0A0]">
              A streamlined approach to delivering high-quality annotated datasets
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-[#050505]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line transform md:-translate-x-1/2" />

            {/* Process Steps */}
            <div className="space-y-12 md:space-y-24">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ml-20 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'
                  }`}>
                    <div className={`p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 card-glow ${
                      index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                    }`} style={{ maxWidth: '480px' }}>
                      <div className={`flex items-center space-x-3 mb-4 ${
                        index % 2 === 0 ? 'md:flex-row-reverse md:space-x-reverse' : ''
                      }`}>
                        <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                          <step.icon size={24} className="text-white" />
                        </div>
                        <span className="text-[#FF8C00] font-semibold text-sm">
                          Step {index + 1}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[#A0A0A0] leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <ul className={`space-y-2 ${
                        index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                      }`}>
                        {step.details.map((detail, dIndex) => (
                          <li
                            key={dIndex}
                            className={`text-sm text-[#A0A0A0] flex items-center ${
                              index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full bg-[#FF8C00] ${
                              index % 2 === 0 ? 'md:ml-2' : 'mr-2'
                            }`} />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#0A0A0A] border-4 border-[#FF8C00] flex items-center justify-center z-10">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>

                  {/* Empty Space for Layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Communication Section */}
      <section className="section-padding bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Regular Updates',
                desc: 'Stay informed with weekly progress reports and milestone updates throughout your project.',
              },
              {
                title: 'Direct Communication',
                desc: 'Work directly with our team through your preferred communication channels for quick responses.',
              },
              {
                title: 'Flexible Scheduling',
                desc: 'We adapt to your timezone and meeting preferences to ensure smooth collaboration.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/10 text-center"
              >
                <h4 className="text-lg font-semibold text-white mb-3">{item.title}</h4>
                <p className="text-[#A0A0A0] text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
