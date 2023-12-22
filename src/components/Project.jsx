import project1 from "../assets/images/Project1.png";
import project2 from "../assets/images/Project-2.png";
import project3 from "../assets/images/Project3.png";
const Project = () => {
  const project = (img, title, details, link) => {
    return (
      <div className="grid md:grid-cols-2 grid-cols-1 gap-16 items-center px-4">
        <div>
          <img src={img} alt="Project1" className="w-full h-full" />
        </div>
        <div>
          <div>
            <h1 className="font-bold text-2xl pb-6 md:text-start text-center">
              {title}
            </h1>
            <p className="text-justify max-w-lg">{details}</p>
            <div className="md:text-start text-center">
              <button className="bg-[#7600fa] w-1/2 py-4 rounded-lg hover:bg-[#5500fa] my-8">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Preview
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="md:pb-16">
      <div
        className={`md:w-1/2 md:py-8 border-b-4 border-[#7600fa] py-4 my-16 md:my-32 justify-center mx-auto flex flex-col gap-x-2`}
      >
        <h1 className={`md:text-3xl text-xl font-semibold text-center mb-8`}>
          Some <span className="text-[#7600fa]">Projects</span>
        </h1>
        <p className="text-center">
          Here you will find some of the personal projects that I created with
          each project containing its own case study
        </p>
      </div>
      <div className="space-y-24">
        {project(
          project1,
          "Meal Management",
          "Through the website a user can order food for a whole month through a specific package.",
          "https://hostel-management-delta.vercel.app"
        )}
        {project(
          project2,
          "Job Searching",
          "It is designed to help job seekers find relevant job opportunities and streamline the job application process.",
          "https://a11-client-side-search-job.vercel.app"
        )}
        {project(
          project3,
          "Brand New",
          "Here you can buy products and know details of popular brands products.",
          "https://new-brand-new-a10.vercel.app"
        )}
      </div>
    </div>
  );
};

export default Project;
