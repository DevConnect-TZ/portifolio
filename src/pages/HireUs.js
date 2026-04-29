import { useState } from 'react';
import { addHireRequest } from '../firebase/firestore';
import { sendHireRequestEmail } from '../services/emailService';
import SEO from '../components/SEO';

const HireUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectName: '',
    sampleLink: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Save to Firestore first
      await addHireRequest(formData);
      
      // Try to send email (don't fail if email fails)
      try {
        await sendHireRequestEmail(formData);
      } catch (emailError) {
        console.warn('Email sending failed, but request was saved:', emailError);
        // Continue anyway - request is saved to Firestore
      }
      
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectName: '',
        sampleLink: '',
        description: '',
      });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error('Error submitting hire request:', err);
      setError('Failed to submit request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Hire DevTZ - Professional Software Development Services"
        description="Hire DevTZ for your software development projects. Our team of skilled developers can help bring your enterprise applications, web platforms, mobile apps, and automation solutions to life."
        keywords="hire DevTZ, software development Tanzania, enterprise software, web development, mobile app development, custom software, automation solutions"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Software Development Services',
          provider: {
            '@type': 'Organization',
            name: 'DevTZ',
            url: 'https://devtz.site',
          },
          areaServed: {
            '@type': 'Country',
            name: 'Tanzania',
          },
          offers: {
            '@type': 'Offer',
            description: 'Professional software development services including enterprise software, web applications, mobile apps, and automation solutions.',
          },
        }}
      />
      <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Start Your Project
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's work together to bring your software vision to life. Fill out the form below and we'll get back to you soon.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
              <p className="font-medium">✓ Request submitted successfully! We'll review your project and get back to you soon.</p>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg">
              <p className="font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
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
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                placeholder="+255 123 456 789"
              />
            </div>

            <div>
              <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-2">
                Project Name *
              </label>
              <input
                type="text"
                id="projectName"
                required
                value={formData.projectName}
                onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                placeholder="e.g., Enterprise CRM System, E-commerce Website, Mobile App, etc."
              />
            </div>

            <div>
              <label htmlFor="sampleLink" className="block text-sm font-medium text-gray-700 mb-2">
                Sample Link (Optional)
              </label>
              <input
                type="url"
                id="sampleLink"
                value={formData.sampleLink}
                onChange={(e) => setFormData({ ...formData, sampleLink: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                placeholder="https://example.com or link to similar service you need"
              />
              <p className="mt-1 text-sm text-gray-500">
                Share a link to a similar website or service that you'd like us to reference
              </p>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Project Description *
              </label>
              <textarea
                id="description"
                required
                rows="6"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                placeholder="Tell us about your project: features, requirements, timeline, budget range, etc."
              />
            </div>

            <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
              <p className="text-sm text-primary-800">
                <strong>What happens next?</strong> After you submit this form, our team will review your project requirements and contact you within 24-48 hours to discuss the details and provide a quote.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default HireUs;
