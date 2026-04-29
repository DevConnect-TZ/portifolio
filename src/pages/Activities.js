import { useState, useEffect } from 'react';
import { getActivities } from '../firebase/firestore';
import { CalendarIcon } from '../components/Icons';
import SEO from '../components/SEO';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const data = await getActivities();
        setActivities(data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchActivities();
  }, []);

  const activityTypes = [
    'all',
    'Bootcamps',
    'Meetups',
    'Coding Workshops',
    'Mentorship Programs',
    'Open-source Projects',
    'Hackathons',
    'API / Dev Tools Training',
  ];

  const filteredActivities =
    filter === 'all'
      ? activities
      : activities.filter((activity) => activity.type === filter);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading activities...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Our Services & Solutions - DevTZ"
        description="Explore DevTZ's comprehensive software solutions and services. From enterprise systems to mobile applications, discover how we deliver digital excellence for businesses and individuals."
        keywords="DevTZ solutions, software services Tanzania, enterprise solutions, digital transformation, custom software development"
      />
      <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Activities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of software solutions and digital services.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {activityTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === type
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Activities Grid */}
        {filteredActivities.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No activities found. Check back soon for upcoming events!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredActivities.map((activity) => (
              <div
                key={activity.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                {activity.image && (
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-2">
                    {activity.type}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {activity.description}
                  </p>
                  {activity.date && (
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4" />
                      {new Date(activity.date.seconds * 1000).toLocaleDateString()}
                    </p>
                  )}
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

export default Activities;

