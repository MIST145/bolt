import React from 'react';

export function NeonTitle() {
  return (
    <h1 className="text-center text-5xl font-bold mb-8 animate-pulse">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 
        filter drop-shadow-[0_0_10px_rgba(255,0,255,0.5)] animate-gradient">
        MIST list conversor
      </span>
    </h1>
  );
}