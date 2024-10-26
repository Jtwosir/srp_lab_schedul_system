import { type ReactNode } from 'react';

interface RoleButtonProps {
  icon: ReactNode;
  label: string;
  onClick: () => void;
}

export default function RoleButton({ icon, label, onClick }: RoleButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 px-6 py-4 rounded-lg bg-white hover:bg-blue-50 
                 border-2 border-gray-100 hover:border-blue-500 transition-all duration-200"
    >
      <div className="text-gray-600">{icon}</div>
      <span className="text-gray-700 text-lg">{label}</span>
    </button>
  );
}