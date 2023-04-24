import React from "react";
import images from "../images/codeImage.jpg";
import * as Icons from "heroicons-react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Samet.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            As a former mechanical engineer, I have made the transition to
            becoming a skilled Full Stack Developer with expertise in C#,
            JavaScript, and React. My passion lies in creating innovative
            solutions that enhance user experience. I possess valuable
            experience in Sales and Business Development. This combination of
            technical and business expertise allows me to approach projects from
            both a technical and strategic standpoint, ensuring the development
            of solutions that meet both business and user needs. I am excited to
            apply my diverse skill set as a dedicated developer and contribute
            to the growth of any organization.
          </p>
          <div className="flex flex-wrap justify-center">
  <a
    href="#contact"
    className="flex-shrink-0 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    style={{ minWidth: "120px" }}
  >
    Work With Me
  </a>
  <a
    href="#projects"
    className="flex-shrink-0 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    style={{ minWidth: "120px" }}
  >
    See My Past Work
  </a>
  <a
    className="flex-shrink-0 text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    href="/resume/Samet_Kurt_Cv.pdf"
    download
    style={{ minWidth: "120px" }}
  >
    <span className="flex justify-center items-center">
      <Icons.ArrowCircleDownOutline className="mr-1" />
      Download CV
    </span>
  </a>
</div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={images}
          />
        </div>
      </div>
    </section>
  );
}
