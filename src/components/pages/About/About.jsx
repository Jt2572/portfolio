import React from "react";
import Skills from "./Skills/Skills";

const About = () => {
  return (
    <section className="py-8">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-main-800 font-bold mb-4">Who am I?</h3>
            <p className="text-sm text-gray-300 leading-6 mb-3">
              I like both the Frontend and the Backend, I  take advantage of my designer knowledge when I'm working on a project, and I'm always learning about new technologies trying
              to enhance my skills.
            </p>
            <p className="text-sm text-gray-400 leading-6 mb-3">

            </p>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
