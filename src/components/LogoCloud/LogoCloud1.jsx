import React from "react";

export default function LogoCloud1() {
  return (
    <>
      <div className="relative flex flex-col items-center overflow-hidden py-20 md:py-40 bg-gray-100 dark:bg-gray-800">
        <div className="container relative z-[1] m-auto px-6 md:px-12">
          <div className="m-auto text-center md:w-8/12 lg:w-6/12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              Our heroes <span className="text-primary">contribute</span> to the
              development of tailus
            </h2>
          </div>
          <div className="m-auto mt-16 md:w-11/12 lg:w-8/12 xl:w-7/12">
            <div className="flex flex-wrap justify-center gap-6">
              <div className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10">
                <img
                  src="images/clients/airbnb.svg"
                  className="contrast-0 transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo airbnb"
                />
              </div>
              <div className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10">
                <img
                  src="images/clients/microsoft.svg"
                  className="contrast-0 transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo microsoft"
                />
              </div>
              <div className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10">
                <img
                  src="images/clients/ge.svg"
                  className="contrast-0 transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo ge"
                />
              </div>
              <div className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10">
                <img
                  src="images/clients/bissell.svg"
                  className="contrast-0 transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo bissell"
                />
              </div>
              <div className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10">
                <img
                  src="images/clients/bissell.svg"
                  className="contrast-0 transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo bissell"
                />
              </div>
              <div className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10">
                <img
                  src="images/clients/automatic.svg"
                  className="contrast-0 transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo automatic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
