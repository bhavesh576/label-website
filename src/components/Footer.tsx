import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import logo from "../assets/logo.gif";

const footerLinks = {
  services: [
    { label: 'Image Annotation', path: '/services' },
    { label: 'Text Annotation', path: '/services' },
    { label: 'Video Annotation', path: '/services' },
    { label: 'Dataset Preparation', path: '/services' },
  ],
  company: [
    { label: 'About Us', path: '/company' },
    { label: 'Our Process', path: '/process' },
    { label: 'Contact', path: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >{/* Logo */}
<Link to="/" className="flex items-center gap-0 group">
  <img
    src={logo}
    alt="Labelburo Logo"
    className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
  />
  
  <span className="text-1xl  tracking-tight">
    <span className="text-white">Label</span>
    <span className="text-orange-500">buro</span>
  </span>
</Link>
            <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6">
              High-accuracy data annotation and labeling services built for AI and ML development teams.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com/company/Labelburo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#A0A0A0] hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-[#A0A0A0] text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-[#A0A0A0] text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#FF8C00] mt-0.5 flex-shrink-0" />
                <span className="text-[#A0A0A0] text-sm">Pune, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#FF8C00] flex-shrink-0" />
                <a
                  href="mailto:labelburo.services@gmail.com"
                  className="text-[#A0A0A0] text-sm hover:text-white transition-colors duration-300"
                >
                  labelburo.services@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[#FF8C00] flex-shrink-0" />
                <a
                  href="tel:+919021471034"
                  className="text-[#A0A0A0] text-sm hover:text-white transition-colors duration-300"
                >
                  +91 9021471034
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-[#A0A0A0] text-sm">
            © {new Date().getFullYear()} Labelburo. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-[#A0A0A0] text-xs">Based in Pune, India</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
