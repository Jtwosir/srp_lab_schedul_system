import React, { useState } from 'react';
import {UserRole} from "@/types/auth.ts";

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
  role: UserRole;
}

const mapRole = {
  teacher: '教师',
  admin: '管理员',
};

export default function LoginForm({ onSubmit, role }: LoginFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
      <div className="space-y-2">
        <label htmlFor="username" className="block text-sm font-bold text-gray-700">
            {mapRole[role]??''}账号
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500
                     focus:border-blue-500 outline-none transition-all"
          placeholder={`请输入${mapRole[role]??''}账号`}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm font-bold text-gray-700">
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
        className="min-w-60 max-w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg
                   transition-colors duration-200 font-medium text-lg mx-auto flex justify-center"
      >
        登录
      </button>
    </form>
  );
}
