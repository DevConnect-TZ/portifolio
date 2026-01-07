import { useState, useEffect } from 'react';
import { getMembers } from '../firebase/firestore';
import SEO from '../components/SEO';

const Team = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const data = await getMembers();
        // Sort members: Founder/CEO first, then others
        const sortedMembers = [...data].sort((a, b) => {
          const roleA = (a.role || '').toLowerCase();
          const roleB = (b.role || '').toLowerCase();
          
          // Check if role is Founder or CEO
          const isAFounder = roleA.includes('founder') || roleA.includes('ceo') || roleA.includes('chief executive');
          const isBFounder = roleB.includes('founder') || roleB.includes('ceo') || roleB.includes('chief executive');
          
          if (isAFounder && !isBFounder) return -1;
          if (!isAFounder && isBFounder) return 1;
          
          // If both are founders or both are not, maintain original order
          return 0;
        });
        setMembers(sortedMembers);
      } catch (error) {
        console.error('Error fetching members:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMembers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading team members...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Our Team - DevConnect Tanzania"
        description="Meet the passionate individuals driving DevConnect Tanzania forward. Get to know our team members, their roles, and contributions to the Tanzanian developer community."
        keywords="DevConnect Tanzania team, Tanzanian developers team, tech community leaders, developer community team Tanzania"
      />
      <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate individuals driving DevConnect Tanzania forward.
          </p>
        </div>

        {members.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow-lg">
            <p className="text-gray-600 text-lg">
              No team members to display yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-72 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center p-8">
                  {member.photo ? (
                    <div className="relative w-48 h-48 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-xl opacity-30"></div>
                      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-48 h-48 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-xl opacity-30"></div>
                      <div className="relative w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center border-4 border-white shadow-2xl">
                        <span className="text-6xl font-bold text-white">
                          {member.name?.charAt(0) || '?'}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 line-clamp-3 mb-4 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 mt-4">
                    {member.portfolio && (
                      <a
                        href={member.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105 text-sm font-medium shadow-md"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        Portfolio
                      </a>
                    )}
                    {member.social && (
                      <>
                        {member.social.github && (
                          <a
                            href={member.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 hover:text-primary-600 transition-all transform hover:scale-110"
                            title="GitHub"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </a>
                        )}
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 hover:text-primary-600 transition-all transform hover:scale-110"
                            title="LinkedIn"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Team;

