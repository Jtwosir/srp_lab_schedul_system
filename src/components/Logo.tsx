import { Beaker } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-blue-500 p-2 rounded-lg rotate-45">
        <Beaker className="text-white w-6 h-6 -rotate-45" />
      </div>
      <span className="text-xl font-semibold text-blue-500">实验室排课系统</span>
    </div>
  );
}