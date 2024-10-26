import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {Users, UserCog, Undo2} from 'lucide-react';
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
    <div className="min-h-screen bg-gray-50 flex max-h-screen">
      {/* Left Section */}
      <div className="flex-1 flex flex-col m-8 max-h-screen">

        <Logo />

        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold text-left text-blue-500 mb-12 mt-20">
              {selectedRole ?
                  <div className="flex flex-row items-center">
                    <Undo2
                      className="text-blue-500 hover:text-blue-600 mr-2"
                      onClick={() => setSelectedRole(null)}/>
                    登录
                  </div>
                  : '我是...'}
            </h1>

            {!selectedRole ? (
              <div className="space-y-10">
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
              <LoginForm onSubmit={handleLogin} role={selectedRole}/>
            )}

            {/*{selectedRole && (*/}
            {/*  // <button*/}
            {/*  //   onClick={() => setSelectedRole(null)}*/}
            {/*  //   className="mt-4 text-blue-500 hover:text-blue-600 text-sm"*/}
            {/*  // >*/}
            {/*  //   返回角色选择*/}
            {/*  // </button>*/}

            {/*)}*/}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-gradient-to-br flex ">
        <img
          src={loginRight}
          alt="Education"
          className="w-full max-w-fit max-h-[90vh]  mt-auto ml-auto"
        />
      </div>
    </div>
  );
}
