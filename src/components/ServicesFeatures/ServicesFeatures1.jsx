import React from "react";


export default function ServicesFeatures1() {
  return (
    <>
      <div className="py-16">
        <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            <div className="border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 pt-12 shadow-2xl shadow-gray-600/10 dark:shadow-none sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Graphic Design
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                  at cum, consectetur ullam tempora ipsa iste officia sed
                  officiis! Incidunt ea animi officiis.
                </p>
                <a href="#" className="block font-medium text-primary">
                  Know more
                </a>
              </div>
              <img
                src="images/graphic.svg"
                className="ml-auto w-2/3"
                alt="illustration"
                loading="lazy"
                width={900}
                height={600}
              />
            </div>
            <div className="border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 shadow-2xl shadow-gray-600/10 dark:shadow-none sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  UI Design
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                  at cum, consectetur ullam tempora ipsa iste officia sed
                  officiis! Incidunt ea animi officiis.
                </p>
                <a href="#" className="block font-medium text-primary">
                  Know more
                </a>
              </div>
              <img
                src="images/ui-design.svg"
                className="ml-auto w-2/3"
                alt="illustration"
                loading="lazy"
                width={900}
                height={600}
              />
            </div>
            <div className="border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 shadow-2xl shadow-gray-600/10 dark:shadow-none sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  UX Design
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                  at cum, consectetur ullam tempora ipsa iste officia sed
                  officiis! Incidunt ea animi officiis.
                </p>
                <a href="#" className="block font-medium text-primary">
                  Know more
                </a>
              </div>
              <img
                src="images/ux-design.svg"
                className="ml-auto w-2/3"
                alt="illustration"
                loading="lazy"
                width={900}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
