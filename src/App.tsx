import { useState } from 'react';
import { Users, UserCog } from 'lucide-react';
import Logo from './components/Logo';
import RoleButton from './components/RoleButton';
import LoginForm from './components/LoginForm';

function App() {
  const [selectedRole, setSelectedRole] = useState<'teacher' | 'admin' | null>(null);

  const handleLogin = (username: string, password: string) => {
    console.log('Login attempt:', { username, password, role: selectedRole });
    // Add your login logic here
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

      {/* Right Section - Placeholder for illustration */}
      <div className="flex-1 bg-blue-500 flex items-center justify-center p-8">
        <div className="w-full max-w-lg aspect-square bg-white/10 rounded-3xl">
          {/* Add your illustration here */}
        </div>
      </div>
    </div>
  );
}

export default App;