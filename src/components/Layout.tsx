import { Outlet, Navigate, Link, useLocation } from 'react-router-dom';
import { Calendar, FileText, ClipboardCheck, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Logo from './Logo';

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
        <div className="p-6">
          <Logo />
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

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">{user.name}</p>
              <p className="text-sm text-gray-500">
                {user.role === 'teacher' ? '教师' : '管理员'}
              </p>
            </div>
            <button
              onClick={logout}
              className="text-sm text-red-500 hover:text-red-600"
            >
              退出
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
}