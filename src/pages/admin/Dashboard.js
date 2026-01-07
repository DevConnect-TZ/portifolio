import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { UsersIcon, CalendarIcon, TrophyIcon, ComputerIcon, TargetIcon, BellIcon } from '../../components/Icons';
import { getHireRequests } from '../../firebase/firestore';

const Dashboard = () => {
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();
  const [hireRequests, setHireRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      navigate('/admin/login');
      return;
    }
    fetchHireRequests();
  }, [currentUser, navigate]);

  const fetchHireRequests = async () => {
    try {
      const data = await getHireRequests();
      setHireRequests(data);
    } catch (error) {
      console.error('Error fetching hire requests:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  const unreadCount = hireRequests.filter(req => !req.read).length;

  const adminLinks = [
    { path: '/admin/members', label: 'Manage Members', Icon: UsersIcon, color: 'bg-primary-600' },
    { path: '/admin/activities', label: 'Manage Activities', Icon: CalendarIcon, color: 'bg-primary-600' },
    { path: '/admin/achievements', label: 'Manage Achievements', Icon: TrophyIcon, color: 'bg-primary-600' },
    { path: '/admin/projects', label: 'Manage Projects', Icon: ComputerIcon, color: 'bg-primary-600' },
    { path: '/admin/mission-vision', label: 'Mission & Vision', Icon: TargetIcon, color: 'bg-primary-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminLinks.map((link) => {
            const IconComponent = link.Icon;
            return (
            <Link
              key={link.path}
              to={link.path}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${link.color} rounded-lg flex items-center justify-center mb-4`}>
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{link.label}</h3>
            </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

