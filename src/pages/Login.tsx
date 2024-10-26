import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Users, UserCog } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Logo from '../components/Logo';
import RoleButton from '../components/RoleButton';
import LoginForm from '../components/LoginForm';
import type { UserRole } from '../types/auth';
import loginRight from "@/assets/images/login_right.png"

export default function Login() {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const { user, login } = useAuth();
  const navigate = useNavigate();

  if (user) {
    return <Navigate to="/schedule" replace />;
  }

  const handleLogin = async (username: string, password: string) => {
    try {
      await login(username, password, selectedRole);
      navigate('/schedule');
    } catch  {
      alert('登录失败，请检查用户名和密码');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Section */}
      <div className="flex-1 flex flex-col p-8">

        <Logo />

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold text-center text-blue-500 mb-12">
              {selectedRole ? '登录' : '我是'}
            </h1>

            {!selectedRole ? (
              <div className="space-y-4">
                <RoleButton
                  icon={<Users className="w-6 h-6" />}
                  label="教师"
                  onClick={() => setSelectedRole('teacher')}
                />
                <RoleButton
                  icon={<UserCog className="w-6 h-6" />}
                  label="管理员"
                  onClick={() => setSelectedRole('admin')}
                />
              </div>
            ) : (
              <LoginForm onSubmit={handleLogin} />
            )}

            {selectedRole && (
              <button
                onClick={() => setSelectedRole(null)}
                className="mt-4 text-blue-500 hover:text-blue-600 text-sm"
              >
                返回角色选择
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-gradient-to-br flex items-center justify-center ">
        <img
          src={loginRight}
          alt="Education"
          className="w-full max-w-2xl mt-auto ml-auto"
        />
      </div>
    </div>
  );
}
