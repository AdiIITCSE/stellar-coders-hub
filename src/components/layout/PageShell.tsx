import React from 'react';

interface PageShellProps {
  children: React.ReactNode;
}

const PageShell: React.FC<PageShellProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-midnight-blue relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-royal-purple/10 via-transparent to-royal-purple/5" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-royal-purple/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-royal-purple/15 rounded-full blur-2xl" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PageShell;