import React from "react";

export default function LogoCloud3() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 py-8 lg:py-2">
        <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
          <div className="items-center gap-12 lg:flex">
            <div className="lg:w-2/6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Our clients
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We have already worked for +20 clients
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-4/6">
              <div className="-mx-6 flex flex-wrap gap-6 px-6 md:justify-between lg:gap-2">
                <div className="flex items-center rounded-xl lg:p-4 lg:hover:bg-white">
                  <img
                    src="./images/clients/airbnb.svg"
                    className="w-24 lg:w-28"
                    alt=""
                  />
                </div>
                <div className="flex items-center rounded-xl lg:p-4 lg:hover:bg-white">
                  <img src="./images/clients/ge.svg" className="w-10" alt="" />
                </div>
                <div className="flex items-center rounded-xl lg:p-4 lg:hover:bg-white">
                  <img
                    src="./images/clients/coty.svg"
                    className="w-28"
                    alt=""
                  />
                </div>
                <div className="flex items-center rounded-xl lg:p-4 lg:hover:bg-white">
                  <img
                    src="./images/clients/tailus.svg"
                    className="w-32"
                    alt=""
                  />
                </div>
                <div className="flex items-center rounded-xl lg:p-4 lg:hover:bg-white">
                  <img
                    src="./images/clients/microsoft.svg"
                    className="w-32"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
