import { useState, useEffect } from 'react';
import { getMissionVision } from '../firebase/firestore';
import { TargetIcon, EyeIcon, HandshakeIcon, CodeIcon, LightBulbIcon, RocketIcon } from '../components/Icons';
import SEO from '../components/SEO';

const About = () => {
  const [missionVision, setMissionVision] = useState({
    mission: '',
    vision: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMissionVision();
        setMissionVision(data);
      } catch (error) {
        console.error('Error fetching mission/vision:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="About DevTZ - Software Solutions Company"
        description="Learn about DevTZ's mission to deliver premium software solutions for enterprises and individuals. Discover our vision for digital transformation in Tanzania."
        keywords="DevTZ about, software company Tanzania, enterprise software solutions, digital transformation, custom software development"
      />
      <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About DevTZ
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading software solutions company dedicated to empowering businesses 
            and individuals through innovative technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Mission */}
          <div className="relative bg-gradient-to-br from-white to-primary-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-primary-100 overflow-hidden group animate-slide-up">
            {/* Decorative background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-200 opacity-10 rounded-full -mr-16 -mt-16 group-hover:opacity-20 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-300 opacity-10 rounded-full -ml-12 -mb-12 group-hover:opacity-20 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center mr-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <TargetIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-1">Our Mission</h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-primary-600 to-primary-400 rounded-full"></div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-primary-300 rounded-full opacity-50"></div>
                <p className="text-gray-700 text-lg leading-relaxed pl-4 relative z-10">
                  {missionVision.mission || 
                    'To deliver innovative, high-quality software solutions that empower businesses and individuals to achieve their goals. We are committed to excellence, reliability, and creating technology that makes a real difference.'}
                </p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="relative bg-gradient-to-br from-white to-primary-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-primary-100 overflow-hidden group animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            {/* Decorative background pattern */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary-200 opacity-10 rounded-full -ml-16 -mt-16 group-hover:opacity-20 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary-300 opacity-10 rounded-full -mr-12 -mb-12 group-hover:opacity-20 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center mr-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <EyeIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-1">Our Vision</h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-primary-600 to-primary-400 rounded-full"></div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-primary-300 rounded-full opacity-50"></div>
                <p className="text-gray-700 text-lg leading-relaxed pl-4 relative z-10">
                  {missionVision.vision || 
                    'To become Tanzania\'s most trusted technology partner, known for delivering transformative software solutions that drive business success and digital innovation across all industries.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Excellence',
                description: 'We strive for excellence in every solution we deliver.',
                Icon: RocketIcon,
              },
              {
                title: 'Innovation',
                description: 'We embrace creativity and innovative thinking in problem solving.',
                Icon: LightBulbIcon,
              },
              {
                title: 'Partnership',
                description: 'We build lasting relationships with our clients.',
                Icon: HandshakeIcon,
              },
            ].map((value, index) => {
              const IconComponent = value.Icon;
              return (
              <div key={index} className="text-center p-6 hover:transform hover:scale-105 transition-all duration-300">
                <div className="mb-4 flex justify-center text-primary-600 relative">
                  <IconComponent className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
            })}
          </div>
        </div>

        {/* What We Do */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Enterprise Solutions', desc: 'Custom ERP, CRM, and business management systems' },
              { title: 'Web Development', desc: 'Modern websites and web applications' },
              { title: 'Mobile Apps', desc: 'iOS and Android applications' },
              { title: 'Automation', desc: 'Process automation and RPA solutions' },
              { title: 'Consulting', desc: 'Technology strategy and digital transformation' },
              { title: 'Support', desc: '24/7 maintenance and technical support' },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all">
                <CodeIcon className="w-8 h-8 mb-3" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-primary-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
