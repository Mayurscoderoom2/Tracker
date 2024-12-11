import React from 'react';
import { GraduationCap, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Sign Up</h1>
          <p className="text-gray-600">Choose your role to get started</p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={() => navigate('/signup/student')}
            className="w-full p-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700
              text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 
              flex items-center space-x-4 group"
          >
            <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h2 className="font-semibold text-lg">Student</h2>
              <p className="text-sm text-white/80">Join as a student</p>
            </div>
          </button>
          
          <button
            onClick={() => navigate('/signup/mentor')}
            className="w-full p-4 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700
              text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 
              flex items-center space-x-4 group"
          >
            <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h2 className="font-semibold text-lg">Mentor</h2>
              <p className="text-sm text-white/80">Join as a mentor</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;