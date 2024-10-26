import React, { useState } from 'react';

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
      <div className="space-y-2">
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
          教师账号
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500
                     focus:border-blue-500 outline-none transition-all"
          placeholder="请输入教师账号"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          密码
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500
                     focus:border-blue-500 outline-none transition-all"
          placeholder="请输入密码"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg
                   transition-colors duration-200 font-medium text-lg"
      >
        登录
      </button>
    </form>
  );
}
