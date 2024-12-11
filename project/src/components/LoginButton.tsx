import React from 'react';

interface LoginButtonProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
  gradient: string;
  hoverGradient: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  icon,
  title,
  description,
  onClick,
  gradient,
  hoverGradient
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full p-4 bg-gradient-to-r ${gradient} hover:bg-gradient-to-r hover:${hoverGradient} 
        text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 
        flex items-center space-x-4 group`}
    >
      <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
        {icon}
      </div>
      <div className="text-left">
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-sm text-white/80">{description}</p>
      </div>
    </button>
  );
};

export default LoginButton;