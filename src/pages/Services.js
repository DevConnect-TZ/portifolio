import { useState } from 'react';
import { addContactSubmission } from '../firebase/firestore';
import { sendContactEmail } from '../services/emailService';
import { CodeIcon, ToolsIcon, ComputerIcon, LightBulbIcon, ServerIcon, DeviceMobileIcon, CogIcon, ShieldCheckIcon } from '../components/Icons';
import SEO from '../components/SEO';

const Services = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  const services = [
    {
      title: 'Enterprise Software Solutions',
      description: 'Comprehensive enterprise solutions including ERP systems, CRM platforms, and business management software. We build scalable systems that streamline operations and drive efficiency for large organizations.',
      icon: ServerIcon,
      features: [
        'Custom ERP Development',
        'CRM Solutions',
        'Business Intelligence',
        'Workflow Automation',
        'Enterprise Integration',
      ],
    },
    {
      title: 'Web Design & Development',
      description: 'We create beautiful, responsive, and user-friendly websites tailored to your business needs. From simple landing pages to complex web applications, we bring your vision to life with modern design and cutting-edge technology.',
      icon: CodeIcon,
      features: [
        'Responsive design for all devices',
        'Modern UI/UX design',
        'Custom web applications',
        'E-commerce solutions',
        'Content management systems',
      ],
    },
    {
      title: 'Mobile Application Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. We create intuitive, high-performance apps that engage users and deliver exceptional mobile experiences for your business.',
      icon: DeviceMobileIcon,
      features: [
        'iOS Native Development',
        'Android Native Development',
        'Cross-platform Solutions',
        'App Store Deployment',
        'Ongoing App Maintenance',
      ],
    },
    {
      title: 'Automation & RPA',
      description: 'Transform your business operations with intelligent automation solutions. We implement Robotic Process Automation (RPA) and custom automation workflows that reduce manual tasks and increase productivity.',
      icon: CogIcon,
      features: [
        'Process Automation',
        'RPA Implementation',
        'Data Pipeline Automation',
        'System Integration',
        'Custom Workflow Solutions',
      ],
    },
    {
      title: 'System Maintenance & Support',
      description: 'Keep your website and systems running smoothly with our comprehensive maintenance services. We ensure optimal performance, security updates, and regular backups to protect your digital assets.',
      icon: ToolsIcon,
      features: [
        'Regular security updates',
        'Performance optimization',
        'Backup and recovery',
        'Bug fixes and troubleshooting',
        '24/7 monitoring and support',
      ],
    },
    {
      title: 'Payment Integrations',
      description: 'Seamlessly integrate secure payment gateways into your website or application. We support multiple payment methods and ensure PCI compliance for safe and reliable transactions.',
      icon: ComputerIcon,
      features: [
        'Multiple payment gateway support',
        'Mobile money integration',
        'Credit/debit card processing',
        'Secure transaction handling',
        'Payment analytics and reporting',
      ],
    },
    {
      title: 'Security & Compliance',
      description: 'Protect your digital assets with our comprehensive security solutions. We provide security audits, compliance consulting, and implementation of best practices to safeguard your business.',
      icon: ShieldCheckIcon,
      features: [
        'Security Audits',
        'Data Protection',
        'Compliance Consulting',
        'Penetration Testing',
        'Security Implementation',
      ],
    },
    {
      title: 'Technical Consulting',
      description: 'Strategic technology consulting to help you make informed decisions. From digital transformation strategies to technology stack selection, we guide you toward the right solutions for your business.',
      icon: LightBulbIcon,
      features: [
        'Digital Transformation Strategy',
        'Technology Stack Selection',
        'Architecture Design',
        'Performance Optimization',
        'Technical Roadmap Planning',
      ],
    },
  ];

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setFormLoading(true);

    try {
      const submissionData = {
        ...formData,
        source: 'services',
      };
      // Save to Firestore first
      await addContactSubmission(submissionData);
      
      // Try to send email (don't fail if email fails)
      try {
        await sendContactEmail(submissionData);
      } catch (emailError) {
        console.warn('Email sending failed, but message was saved:', emailError);
        // Continue anyway - message is saved to Firestore
      }
      
      setFormSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setTimeout(() => setFormSuccess(false), 5000);
    } catch (err) {
      console.error('Error submitting message:', err);
      setFormError('Failed to send message. Please try again.');
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Our Services - DevTZ"
        description="Professional software solutions including enterprise systems, web development, mobile apps, automation, and digital services. Get in touch to discuss your project needs."
        keywords="software solutions Tanzania, enterprise software, web development, mobile apps, automation, DevTZ services, custom software development"
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive software solutions to help your business thrive in the digital world. 
              From enterprise systems to personal applications, we deliver excellence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Message Form Section */}
          <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Interested in our services? Have questions or want to discuss your project? We'd love to hear from you!
              </p>
            </div>

            {formSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
                <p className="font-medium">✓ Message sent successfully! We'll get back to you soon.</p>
              </div>
            )}

            {formError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg">
                <p className="font-medium">{formError}</p>
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  placeholder="What service are you interested in?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={formLoading}
                className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
