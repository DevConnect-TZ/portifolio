import { useState, useEffect } from 'react';
import { Timestamp } from 'firebase/firestore';
import { getAchievements, addAchievement, updateAchievement, deleteAchievement } from '../../firebase/firestore';
import ImageUpload from '../../components/ImageUpload';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { CalendarIcon } from '../../components/Icons';

const Achievements = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingAchievement, setEditingAchievement] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'milestone',
    date: '',
    image: '',
  });

  const achievementTypes = [
    { value: 'milestone', label: 'Milestone' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'event', label: 'Event' },
    { value: 'other', label: 'Other' },
  ];

  useEffect(() => {
    if (!currentUser) {
      navigate('/admin/login');
      return;
    }
    fetchAchievements();
  }, [currentUser, navigate]);

  const fetchAchievements = async () => {
    try {
      const data = await getAchievements();
      setAchievements(data);
    } catch (error) {
      console.error('Error fetching achievements:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const achievementData = {
        ...formData,
        date: formData.date ? Timestamp.fromDate(new Date(formData.date)) : null,
      };
      if (editingAchievement) {
        await updateAchievement(editingAchievement.id, achievementData);
      } else {
        await addAchievement(achievementData);
      }
      setShowModal(false);
      setEditingAchievement(null);
      setFormData({
        title: '',
        description: '',
        type: 'milestone',
        date: '',
        image: '',
      });
      fetchAchievements();
    } catch (error) {
      console.error('Error saving achievement:', error);
      alert('Failed to save achievement. Please try again.');
    }
  };

  const handleEdit = (achievement) => {
    setEditingAchievement(achievement);
    setFormData({
      title: achievement.title || '',
      description: achievement.description || '',
      type: achievement.type || 'milestone',
      date: achievement.date ? new Date(achievement.date.seconds * 1000).toISOString().split('T')[0] : '',
      image: achievement.image || '',
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this achievement?')) {
      try {
        await deleteAchievement(id);
        fetchAchievements();
      } catch (error) {
        console.error('Error deleting achievement:', error);
        alert('Failed to delete achievement. Please try again.');
      }
    }
  };

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <Link to="/admin/dashboard" className="text-primary-600 hover:text-primary-700 mb-2 inline-block">
              ← Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Manage Achievements</h1>
          </div>
          <button
            onClick={() => {
              setEditingAchievement(null);
              setFormData({
                title: '',
                description: '',
                type: 'milestone',
                date: '',
                image: '',
              });
              setShowModal(true);
            }}
            className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            Add Achievement
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {achievement.image && (
                <img src={achievement.image} alt={achievement.title} className="w-full h-48 object-cover" />
              )}
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-2">
                  {achievement.type}
                </span>
                <h3 className="text-xl font-bold text-gray-900">{achievement.title}</h3>
                <p className="text-gray-600 mt-2 line-clamp-2">{achievement.description}</p>
                {achievement.date && (
                  <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    {new Date(achievement.date.seconds * 1000).toLocaleDateString()}
                  </p>
                )}
                <div className="mt-4 flex space-x-2">
                  <button
                    onClick={() => handleEdit(achievement)}
                    className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(achievement.id)}
                    className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
              <h2 className="text-2xl font-bold mb-4">
                {editingAchievement ? 'Edit Achievement' : 'Add Achievement'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Type
                  </label>
                  <select
                    required
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  >
                    {achievementTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    required
                    rows="4"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Image
                  </label>
                  <ImageUpload
                    folder="achievements"
                    currentImage={formData.image}
                    onUpload={(url) => setFormData({ ...formData, image: url })}
                  />
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    {editingAchievement ? 'Update' : 'Add'} Achievement
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setEditingAchievement(null);
                    }}
                    className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Achievements;

