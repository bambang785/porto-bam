import React from "react";

function Dashboard() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className=" mr-auto place-self-center lg:col-span-7">
          <h1 className=" animate-fade-down animate-once max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Hi!
          </h1>
          <h1 className=" animate-fade-down animate-once max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            I'm Bamm.
          </h1>
          <p className="animate-fade-right animate-once max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            I have a strong passion for IT, especially in front-end web
            development and mobile development.
          </p>
          <button className="animate-duration-[900ms] animate-jump animate-once animate-ease-in group relative  px-12 py-3  text-center opacity-75 ">
            <a href="Octopath">
              <span className="absolute inset-1 h-full w-full translate-x-1 positio translate-y-1 transform bg-black transition duration-300 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 h-full w-full border-2 border-black bg-slate-50 group-hover:bg-black"></span>
              <span className="relative font-bold text-black group-hover:text-white">
                Projects
              </span>
            </a>
          </button>

          <button className="animate-duration-[900ms] animate-jump animate-once animate-ease-in group relative mt-8 px-12 py-3  text-center opacity-75  sm:mx-[50px]">
            <a href="Octopath">
              <span className="absolute inset-1 h-full w-full translate-x-1 translate-y-1 transform bg-black transition duration-300 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 h-full w-full border-2 border-black bg-slate-50 group-hover:bg-black"></span>
              <span className="relative font-bold text-black group-hover:text-white">
                About me
              </span>
            </a>
          </button>
        </div>
        <div className=" lg:mt-0 lg:col-span-5 lg:flex"></div>
      </div>
    </section>
  );
}

export default Dashboard;
