import { Link } from "react-router-dom";
import Project from "../components/Project";
import Allskill from "../components/Allskill";

const About = () => {
  return (
    <div className="pb-16">
      <div
        className={`md:w-1/2 md:py-8 border-b-4 border-[#7600fa] py-4 my-16  justify-center mx-auto flex flex-col gap-x-2`}
      >
        <h1 className={`md:text-3xl text-xl font-semibold text-center mb-8`}>
          ABOUT <span className="text-[#7600fa]">ME</span>
        </h1>
        <p className="text-center">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>
      {/* Section Body Start */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <div className="max-w-lg">
          <h1 className="text-xl font-bold text-[#7600fa] mb-4">
            Get to know me!
          </h1>
          <p className="text-justify mb-8">
            I`m a <strong>Frontend Web Developer</strong> building the Front-end
            of Websites and Web Applications that leads to the success of the
            overall product. Check out some of my work in the Projects section.
          </p>
          <p className="text-justify">
            I`m open to <strong>Job</strong> opportunities where I can
            contribute, learn and grow. If you have a good opportunity that
            matches my skills and experience then don`t hesitate to{" "}
            <strong>contact</strong> me.
          </p>
          <button className="bg-[#7600fa] w-1/2 py-4 rounded-lg hover:bg-[#5500fa] uppercase my-12">
            <Link to="/contact">Contact</Link>
          </button>
        </div>
        <Allskill />
      </div>
      <Project />
    </div>
  );
};

export default About;
