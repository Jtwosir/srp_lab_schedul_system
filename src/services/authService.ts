import { User, UserRole } from '../types/auth';

const mockUsers = {
  teacher: {
    id: 't1',
    username: 'teacher',
    role: 'teacher' as const,
    name: '张老师',
  },
  admin: {
    id: 'a1',
    username: 'admin',
    role: 'admin' as const,
    name: '管理员',
  },
};

export async function mockLogin(
  username: string,
  password: string,
  role: UserRole
): Promise<User> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  if (role === 'teacher' && username === 'teacher') {
    return mockUsers.teacher;
  } else if (role === 'admin' && username === 'admin') {
    return mockUsers.admin;
  }

  throw new Error('Invalid credentials');
}