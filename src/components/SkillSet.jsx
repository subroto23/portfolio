import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import UseSectionTitle from "../Utils/UseSectionTitle";

const SkillSet = () => {
  const sectionTitle = UseSectionTitle("Professional", "Skillset", "md:my-24");
  const CardData = (data) => {
    return (
      <div className="md:w-2/3 w-1/2 border border-[#7600fa] shadow-[0px_6px_10px] shadow-[#7600fa] flex justify-center items-center hover:shadow-[0px_8px_10px_2px] hover:shadow-[#7600fa]">
        <div>{data}</div>
      </div>
    );
  };
  return (
    <div className="pb-16">
      {sectionTitle}
      <div className="grid md:grid-cols-4 grid-col-2 gap-16">
        {CardData(<FaHtml5 className="w-32 h-32 py-4" />)}
        {CardData(<IoLogoCss3 className="w-32 h-32 py-4" />)}
        {CardData(<IoLogoJavascript className="w-32 h-32 py-4" />)}
        {CardData(<SiTailwindcss className="w-32 h-32 py-4" />)}
        {CardData(<FaReact className="w-32 h-32 py-4" />)}
        {CardData(<FaNode className="w-32 h-32 py-4" />)}
        {CardData(<SiExpress className="w-32 h-32 py-4" />)}
        {CardData(<DiMongodb className="w-32 h-32 py-4" />)}
      </div>
    </div>
  );
};

export default SkillSet;
