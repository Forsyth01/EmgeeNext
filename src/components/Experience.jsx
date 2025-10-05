import React from "react";
import WorkExperience from "./WorkExperience";
import ConnectWithMe from "./ConnectWithMe";

const Experience = () => {
  return (
    <div className="lg:bg-white bg-[#F5F8E9] dark:bg-[#1A1A19] py-20">
      <div className="sm:w-[85%] m-auto flex justify-center items-center sm:py-10 p-6  dark:bg-[#222221] dark:rounded-2xl transition-colors duration-300">
        <div className="flex gap-4 flex-col md:flex-row w-full max-w-5xl rounded-lg overflow-hidden space-y-6 sm:space-y-0">
          {/* Work Experience Section */}
          <div className="w-full md:w-1/2 p-6 border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1A1A19] text-gray-900 dark:text-gray-100 rounded-4xl mr-5 transition-colors duration-300">
            <WorkExperience />
          </div>

          {/* Connect With Me Section */}
          <div className="w-full md:w-1/2 p-6 border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1A1A19] text-gray-900 dark:text-gray-100 rounded-4xl transition-colors duration-300">
            <ConnectWithMe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
