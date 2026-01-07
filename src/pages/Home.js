import { Link } from 'react-router-dom';
import { AcademicCapIcon, UserGroupIcon, CodeIcon, MentorIcon, ToolsIcon, RocketIcon } from '../components/Icons';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <>
      <SEO
        title="DevConnect Tanzania - Empowering Tanzanian Developers | Community, Learning & Collaboration"
        description="Join DevConnect Tanzania, the largest developer community in Tanzania. We offer bootcamps, meetups, workshops, mentorship programs, open source projects, and hackathons to help developers grow and collaborate."
        keywords="DevConnect Tanzania, Tanzanian developers, developer community, tech Tanzania, coding bootcamp, developer meetup, software development training, open source Tanzania, hackathons Tanzania, tech mentorship, developer community Tanzania"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'DevConnect Tanzania',
          url: 'https://devconnecttz.site',
          logo: 'https://devconnecttz.site/DevConnect.png',
          description: 'Empowering Tanzanian developers through community, learning, and collaboration.',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Dar es Salaam',
            addressCountry: 'TZ',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            email: 'support@devconnecttz.site',
          },
          sameAs: [
            'https://github.com/DevConnect-TZ',
            'https://linkedin.com/company/devconnect-tanzania',
          ],
        }}
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
              Welcome to DevConnect Tanzania
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Empowering Tanzanian developers through community, learning, and collaboration.
              Join us in building the future of tech in Tanzania.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 hover:text-primary-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Learn More
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Get Involved
              </Link>
              <Link
                to="/hire-us"
                className="px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-400 transition-all transform hover:scale-105 shadow-lg"
              >
                Hire Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Bootcamps',
                description: 'Intensive training programs to level up your skills',
                Icon: AcademicCapIcon,
              },
              {
                title: 'Meetups',
                description: 'Regular community gatherings to network and learn',
                Icon: UserGroupIcon,
              },
              {
                title: 'Workshops',
                description: 'Hands-on coding sessions on latest technologies',
                Icon: CodeIcon,
              },
              {
                title: 'Mentorship',
                description: 'One-on-one guidance from experienced developers',
                Icon: MentorIcon,
              },
              {
                title: 'Open Source',
                description: 'Collaborate on meaningful open-source projects',
                Icon: ToolsIcon,
              },
              {
                title: 'Hackathons',
                description: 'Build innovative solutions in competitive events',
                Icon: RocketIcon,
              },
            ].map((feature, index) => {
              const IconComponent = feature.Icon;
              return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="mb-4 text-primary-600 flex justify-center">
                  <IconComponent className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Connect with fellow developers and grow your skills together.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;

