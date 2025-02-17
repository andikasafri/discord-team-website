import React from 'react';

export const Background: React.FC = () => {
  return (
    <>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1624624517210-32340f50e159?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 to-slate-900/90 backdrop-blur-sm"></div>
      </div>
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-opacity='0.1' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
          opacity: 0.05
        }}
      />
    </>
  );
};