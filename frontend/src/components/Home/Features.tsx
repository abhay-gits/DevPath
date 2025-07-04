import React from "react";

const Features: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold mb-2 text-black">
          Why Choose DevPath?
        </h2>
        <p className="text-gray-500 mb-10">
          DevPath offers a unique blend of resources designed to help developers
          at all levels succeed in their career journeys.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="flex gap-2 mb-2 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="black"
                viewBox="0 0 256 256"
              >
                <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"></path>
              </svg>
              <h3 className="text-xl font-bold text-black">
                Curated Questions
              </h3>
            </div>
            <p className="text-gray-700">
              Access a wide range of coding questions tailored for tech
              interviews.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="flex gap-2 mb-2 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="black"
                viewBox="0 0 256 256"
              >
                <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
              </svg>
              <h3 className="text-xl font-bold text-black">Project Ideas</h3>
            </div>
            <p className="text-gray-700">
              Explore project ideas to enhance your portfolio and practical
              skills.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="flex gap-2 mb-2 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="black" viewBox="0 0 256 256">
                      <path
                        d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"
                      ></path>
                    </svg>
            <h3 className="text-xl font-bold text-black">
              Learning Paths
            </h3>
            </div>
            <p className="text-gray-700">
              Follow structured learning paths to master essential technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
