import React from 'react';
import { BookOpen, Users, FileSpreadsheet } from 'lucide-react';

interface DashboardIconProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

const DashboardIcon: React.FC<DashboardIconProps> = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
  >
    <div className="p-3 bg-blue-100 rounded-full mb-2">
      {icon}
    </div>
    <span className="text-gray-700 font-medium">{label}</span>
  </button>
);

const StudentDashboard = () => {
  const studentName = "John"; // Replace with actual student name from auth

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">Welcome, {studentName}</h1>
          <button className="text-gray-500 hover:text-gray-700">Logout</button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardIcon
            icon={<Users className="w-6 h-6 text-blue-600" />}
            label="Add/Remove Mentor"
            onClick={() => console.log('Add/Remove Mentor clicked')}
          />
          <DashboardIcon
            icon={<BookOpen className="w-6 h-6 text-blue-600" />}
            label="Homeworks"
            onClick={() => console.log('Homeworks clicked')}
          />
          <DashboardIcon
            icon={<FileSpreadsheet className="w-6 h-6 text-blue-600" />}
            label="Test Results"
            onClick={() => console.log('Test Results clicked')}
          />
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;