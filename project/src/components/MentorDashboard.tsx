import React from 'react';
import { Users, BookOpen, Bell } from 'lucide-react';

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
    <div className="p-3 bg-indigo-100 rounded-full mb-2">
      {icon}
    </div>
    <span className="text-gray-700 font-medium">{label}</span>
  </button>
);

const MentorDashboard = () => {
  const mentorName = "Jane"; // Replace with actual mentor name from auth
  const mentorGender = "female"; // Replace with actual mentor gender from auth
  const title = mentorGender === "female" ? "Ma'am" : "Sir";

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">Welcome, {mentorName} {title}</h1>
          <button className="text-gray-500 hover:text-gray-700">Logout</button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardIcon
            icon={<Users className="w-6 h-6 text-indigo-600" />}
            label="Add/Remove Students"
            onClick={() => console.log('Add/Remove Students clicked')}
          />
          <DashboardIcon
            icon={<BookOpen className="w-6 h-6 text-indigo-600" />}
            label="Give Homework"
            onClick={() => console.log('Give Homework clicked')}
          />
          <DashboardIcon
            icon={<Bell className="w-6 h-6 text-indigo-600" />}
            label="Important Notices"
            onClick={() => console.log('Important Notices clicked')}
          />
        </div>
      </main>
    </div>
  );
};

export default MentorDashboard;