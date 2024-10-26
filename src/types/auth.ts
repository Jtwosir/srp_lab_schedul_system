export type UserRole = 'teacher' | 'admin' | null;

export interface User {
  id: string;
  username: string;
  role: UserRole;
  name: string;
}

export interface AuthContextType {
  user: User | null;
  login: (username: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
}