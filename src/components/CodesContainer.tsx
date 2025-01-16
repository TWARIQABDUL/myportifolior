import React from "react";
import Codes from "./Codes";

function CodesContainer(): React.ReactElement {
  return (
    <div className="
    flex
    flex-col
    lg:flex-row
    md:flex-row
    justify-between
    w-full 
    items-center
  bg-gray-900 
    px-6 lg:px-16 
    py-8 
    rounded-xl
    bg-gradient-to-tr from-gray-800 via-gray-950 to-slate-950
    
    ">
      {/* Left Section */}
      <div className="flex flex-col space-y-6 lg:w-1/2">
        {/* Badge */}
        <div className="flex items-center space-x-2 text-blue-600 font-medium">
          <span className="bg-blue-100 text-blue-600 px-3 py-2 rounded-full text-sm">
            What's new
          </span>
          <span className="text-blue-200">Your solution is here</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-100">
          Twariki <br />
          <span className="text-blue-600">Web Developer</span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed">
        I’m Twariki, a software designer and entrepreneur based in Kigali City. I’m the founder
         and CEO of Electrons Edge, where we develop technologies that empower regular people
          to explore space on their own terms.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="px-6 py-3 md:px-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
            Download Resume
          </button>
          <button className="px-6 py-3 bg-gray-100 text-gray-900 rounded-lg shadow hover:bg-gray-200">
            View My Work →
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative w-full md:w-1/2 lg:w-1/2 mt-10 lg:mt-0 hidden md:block lg:block">
  {/* Background Card */}
  <div className="absolute inset-0 bg-blue-200 rounded-xl transform translate-x-4 translate-y-4"></div>
  {/* Code Example */}
  <div className="relative bg-gray-950 text-white p-6 rounded-xl shadow-lg">
    {/* Tabs */}
    <div className="flex space-x-4 mb-4">
      <span className="text-sm font-semibold text-blue-400 border-b-2 border-blue-400">
        NotificationSetting.jsx
      </span>
      <span className="text-sm text-gray-400">App.jsx</span>
    </div>

    {/* Code Snippet */}
    <pre className="text-sm overflow-auto">
      <code className="language-jsx text-gray-200">
        <Codes />
      </code>
    </pre>
  </div>
</div>

    </div>
  );
}

export default CodesContainer;
