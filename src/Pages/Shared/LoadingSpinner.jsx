import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="w-16 h-16 border-4 border-t-indigo-500 border-r-indigo-300 border-b-indigo-500 border-l-indigo-300 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
