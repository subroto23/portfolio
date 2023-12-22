import Contact from "../components/Contact";
import EducationDetails from "../components/EducationDetails";
import Header from "../components/Header";
import Project from "../components/Project";
import SkillSet from "../components/SkillSet";
import ToolsSet from "../components/ToolsSet";

const Home = () => {
  return (
    <div>
      <Header />
      <SkillSet />
      <ToolsSet />
      <Project />
      <EducationDetails />
      <Contact />
    </div>
  );
};

export default Home;
