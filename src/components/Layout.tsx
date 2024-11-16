import { Outlet, Navigate, Link, useLocation } from 'react-router-dom';
import { Calendar, FileText, ClipboardCheck, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import actor from '@/assets/images/actor_teacher.png';

export default function Layout() {
  const { user, logout } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const navItems = user.role === 'teacher'
    ? [
        { icon: Calendar, label: '课表', path: '/schedule' },
        { icon: FileText, label: '排课申请', path: '/course-request' },
        { icon: User, label: '我的', path: '/profile' },
      ]
    : [
        { icon: Calendar, label: '课表', path: '/schedule' },
        { icon: ClipboardCheck, label: '审核', path: '/review' },
        { icon: User, label: '我的', path: '/profile' },
      ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
          {/* User Profile Section */}
          <div className="p-6 flex flex-col items-center border-b border-gray-100">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                  <img
                      src={actor}
                      alt={user.name}
                      className="w-full h-full object-cover"
                  />
              </div>
              <span className="text-gray-700 font-medium">{user.name}</span>
          </div>

        <nav className="flex-1 px-4 space-y-2">
          {navItems.map(({ icon: Icon, label, path }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                ${location.pathname === path
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
                }`}
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>

          <button
              onClick={logout}
              className="w-fit bg-gray-100 text-gray-700 px-3 py-1 ml-auto mr-2 my-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
              登出
          </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
}
