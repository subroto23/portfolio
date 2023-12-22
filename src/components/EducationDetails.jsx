import { MdOutlineCastForEducation } from "react-icons/md";
const EducationDetails = () => {
  return (
    <div className="pb-16 bg-gradient-to-t from-[#100A1F] to-[#000A1F]  bg-opacity-10">
      <div
        className={`w-1/2 md:py-8 border-b-4 border-[#7600fa] py-4 my-10 md:my-24 justify-center mx-auto flex gap-x-2`}
      >
        <h1 className={`md:text-3xl text-xl font-semibold text-center`}>
          <MdOutlineCastForEducation className="animate-pulse" />
        </h1>
        <h1 className="md:text-2xl text-xl font-semibold text-center space-x-2">
          <span className="text-[#7600fa]">Educational</span>
          <span>Qualifications</span>
        </h1>
      </div>
      {/* 2nd Column */}
      <div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2017 - 2023</time>
              <div className="text-lg font-black text-[#7600fa]">
                Bachelor of Science
              </div>
              <span>Computer Science & Engineering</span>
              <p className="text-sm ">Islamic University,Bangladesh</p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2015 - 2016</time>
              <div className="text-lg font-black text-[#7600fa]">
                Higher Secondary Certificate (H.S.C)
              </div>
              <p className="text-sm ">Kadirdi College,Bangladesh</p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2014</time>
              <div className="text-lg font-black text-[#7600fa]">
                Secondary School Certificate (S.S.C)
              </div>
              <p className="text-sm ">Kadirdi High School,Bangladesh</p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EducationDetails;
