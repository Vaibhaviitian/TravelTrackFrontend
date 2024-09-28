import React from "react";

function Loading() {
  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-50 backdrop-blur-sm">
        <div className="flex flex-row gap-2">
          <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce"></div>
          <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-0.5s]"></div>
        </div>
      </div>
    </>
  );
}

export default Loading;
