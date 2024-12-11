import React from 'react';
import { GraduationCap, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LoginButton from './LoginButton';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Choose your role to continue</p>
        </div>
        
        <div className="space-y-4">
          <LoginButton 
            icon={<GraduationCap className="w-6 h-6" />}
            title="Student Login"
            description="Access your learning dashboard"
            onClick={() => navigate('/login/student')}
            gradient="from-blue-500 to-blue-600"
            hoverGradient="from-blue-600 to-blue-700"
          />
          
          <LoginButton 
            icon={<Users className="w-6 h-6" />}
            title="Mentor Login"
            description="Guide and support students"
            onClick={() => navigate('/login/mentor')}
            gradient="from-indigo-500 to-indigo-600"
            hoverGradient="from-indigo-600 to-indigo-700"
          />
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button 
              onClick={() => navigate('/signup')}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;