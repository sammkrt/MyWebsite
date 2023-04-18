import * as Icons from "heroicons-react";
import React from "react";
import { projects } from "../data";



export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-2 py-6 mx-auto text-center sm:px-5 md:px-10 lg:px-20 xl:px-40">
        <div className="flex flex-col w-full mb-8 sm:mb-16">
          <Icons.Code className="mx-auto inline-block w-8 sm:w-10 mb-2 sm:mb-4" />
          <h1 className="text-2xl sm:text-4xl font-medium title-font mb-2 sm:mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="mx-auto leading-relaxed text-base sm:w-2/3 md:w-1/2">
            I am thrilled to showcase my skills as a Full Stack Developer with two innovative applications.These applications are a testament to my ability to create Full Stack solutions that solve real-world problems and provide seamless experiences for users.
          </p>
        </div>
        <div className="flex flex-wrap -mx-2">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="w-full sm:w-1/2 px-2 mb-4 sm:mb-8">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={String(project.image)}
                />
                <div className="px-4 py-6 sm:px-8 sm:py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="text-xs sm:text-sm font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="text-base sm:text-lg font-medium text-white mb-2 sm:mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}