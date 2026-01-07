import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/Activities';
import Services from './pages/Services';
import Team from './pages/Team';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import HireUs from './pages/HireUs';

// Admin Pages
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import Members from './pages/admin/Members';
import AdminActivities from './pages/admin/Activities';
import AdminAchievements from './pages/admin/Achievements';
import AdminProjects from './pages/admin/Projects';
import MissionVision from './pages/admin/MissionVision';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/services" element={<Services />} />
              <Route path="/team" element={<Team />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/hire-us" element={<HireUs />} />

              {/* Admin Routes */}
              <Route path="/admin/login" element={<Login />} />
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/members"
                element={
                  <ProtectedRoute>
                    <Members />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/activities"
                element={
                  <ProtectedRoute>
                    <AdminActivities />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/achievements"
                element={
                  <ProtectedRoute>
                    <AdminAchievements />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/projects"
                element={
                  <ProtectedRoute>
                    <AdminProjects />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/mission-vision"
                element={
                  <ProtectedRoute>
                    <MissionVision />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
