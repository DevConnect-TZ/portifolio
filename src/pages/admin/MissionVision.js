import { useState, useEffect } from 'react';
import { getMissionVision, updateMissionVision } from '../../firebase/firestore';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const MissionVision = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    mission: '',
    vision: '',
  });

  useEffect(() => {
    if (!currentUser) {
      navigate('/admin/login');
      return;
    }
    fetchMissionVision();
  }, [currentUser, navigate]);

  const fetchMissionVision = async () => {
    try {
      const data = await getMissionVision();
      setFormData({
        mission: data.mission || '',
        vision: data.vision || '',
      });
    } catch (error) {
      console.error('Error fetching mission/vision:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await updateMissionVision(formData);
      alert('Mission & Vision updated successfully!');
    } catch (error) {
      console.error('Error updating mission/vision:', error);
      alert('Failed to update Mission & Vision. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/admin/dashboard" className="text-primary-600 hover:text-primary-700 mb-2 inline-block">
            ← Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Edit Mission & Vision</h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mission
            </label>
            <textarea
              required
              rows="6"
              value={formData.mission}
              onChange={(e) => setFormData({ ...formData, mission: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              placeholder="Enter the mission statement..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vision
            </label>
            <textarea
              required
              rows="6"
              value={formData.vision}
              onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              placeholder="Enter the vision statement..."
            />
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              disabled={saving}
              className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
            <Link
              to="/admin/dashboard"
              className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors text-center"
            >
              Cancel
            </Link>
          </div>
        </form>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> Changes to Mission & Vision will be reflected on the About page immediately after saving.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;

