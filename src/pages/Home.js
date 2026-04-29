import { Link } from 'react-router-dom';
import { CodeIcon, DeviceMobileIcon, ServerIcon, CogIcon, GlobeIcon, ShieldCheckIcon } from '../components/Icons';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <>
      <SEO
        title="DevTZ - Software Solutions & Digital Services | Enterprise & Personal"
        description="DevTZ provides premium software solutions and digital services for enterprises and individuals. We specialize in custom applications, web development, mobile apps, automation, and enterprise software solutions."
        keywords="DevTZ, software solutions Tanzania, enterprise software, custom applications, web development, mobile apps, automation, digital services, software company Tanzania, business automation"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'DevTZ',
          url: 'https://devtz.site',
          logo: 'https://devtz.site/DevConnect.png',
          description: 'Premium software solutions and digital services for enterprises and individuals.',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Dar es Salaam',
            addressCountry: 'TZ',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            email: 'info@devtz.site',
          },
          sameAs: [
            'https://github.com/DevTZ',
            'https://linkedin.com/company/devtz',
          ],
        }}
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-sm font-medium text-primary-100">Innovative Software Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up leading-tight">
              Transform Your Ideas<br />Into Digital Reality
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-primary-100 max-w-3xl mx-auto leading-relaxed">
              DevTZ delivers cutting-edge software solutions for enterprises and individuals. 
              From custom applications to automation, we build technology that drives growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 hover:text-primary-700 transition-all transform hover:scale-105 shadow-lg text-lg"
              >
                Our Services
              </Link>
              <Link
                to="/hire-us"
                className="px-8 py-4 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-400 transition-all transform hover:scale-105 shadow-lg text-lg"
              >
                Start a Project
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-16" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Delivered' },
              { number: '30+', label: 'Enterprise Clients' },
              { number: '99%', label: 'Client Satisfaction' },
              { number: '5+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive software solutions tailored to your business needs, 
              from enterprise systems to personal applications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Enterprise Software',
                description: 'Custom enterprise solutions including ERP, CRM, and business management systems.',
                Icon: ServerIcon,
                features: ['ERP Systems', 'CRM Solutions', 'Business Intelligence', 'Workflow Automation'],
              },
              {
                title: 'Web Development',
                description: 'Modern, responsive websites and web applications built with cutting-edge technology.',
                Icon: GlobeIcon,
                features: ['Custom Web Apps', 'E-commerce', 'CMS Solutions', 'API Development'],
              },
              {
                title: 'Mobile Applications',
                description: 'Native and cross-platform mobile apps for iOS and Android devices.',
                Icon: DeviceMobileIcon,
                features: ['iOS Apps', 'Android Apps', 'Cross-platform', 'App Maintenance'],
              },
              {
                title: 'Automation Solutions',
                description: 'Streamline your operations with intelligent automation and RPA solutions.',
                Icon: CogIcon,
                features: ['Process Automation', 'RPA Implementation', 'Data Pipelines', 'System Integration'],
              },
              {
                title: 'Custom Software',
                description: 'Tailored software solutions designed specifically for your unique business requirements.',
                Icon: CodeIcon,
                features: ['Desktop Apps', 'Cloud Solutions', 'SaaS Products', 'Legacy Modernization'],
              },
              {
                title: 'Security & Compliance',
                description: 'Robust security solutions to protect your digital assets and ensure compliance.',
                Icon: ShieldCheckIcon,
                features: ['Security Audits', 'Data Protection', 'Compliance Consulting', 'Penetration Testing'],
              },
            ].map((service, index) => {
              const IconComponent = service.Icon;
              return (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="mb-6 text-primary-600">
                  <IconComponent className="w-14 h-14" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose DevTZ?</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We combine technical expertise with business understanding to deliver solutions 
                that not only work flawlessly but also drive real business results.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Expert Team', desc: 'Skilled developers with enterprise experience' },
                  { title: 'Agile Approach', desc: 'Flexible development with regular updates' },
                  { title: 'Quality Assurance', desc: 'Rigorous testing and quality standards' },
                  { title: 'Ongoing Support', desc: '24/7 support and maintenance services' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Our Development Process</h3>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Discovery', desc: 'Understanding your requirements' },
                  { step: '02', title: 'Planning', desc: 'Architecture and roadmap design' },
                  { step: '03', title: 'Development', desc: 'Agile implementation' },
                  { step: '04', title: 'Testing', desc: 'Quality assurance & testing' },
                  { step: '05', title: 'Deployment', desc: 'Launch and go-live' },
                  { step: '06', title: 'Support', desc: 'Ongoing maintenance' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center bg-gray-700 p-4 rounded-lg">
                    <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-sm">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Let's discuss your project and turn your vision into a powerful digital solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/hire-us"
              className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 text-lg"
            >
              Start Your Project
            </Link>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-400 transition-all transform hover:scale-105 text-lg border-2 border-white/30"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
