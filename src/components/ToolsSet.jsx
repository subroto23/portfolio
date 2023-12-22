import UseSectionTitle from "../Utils/UseSectionTitle";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGit } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAxios } from "react-icons/si";
const ToolsSet = () => {
  const sectionTitle = UseSectionTitle(
    "Tools",
    "Use",
    "md:my-24 text-[#7600fa]",
    "text-white"
  );
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
        {CardData(<IoLogoFirebase className="w-32 h-32 py-4" />)}
        {CardData(<FaGit className="w-32 h-32 py-4" />)}
        {CardData(<FaGithubAlt className="w-32 h-32 py-4" />)}
        {CardData(<TbBrandVscode className="w-32 h-32 py-4" />)}
        {CardData(<SiPostman className="w-32 h-32 py-4" />)}
        {CardData(<IoLogoVercel className="w-32 h-32 py-4" />)}
        {CardData(<SiAdobephotoshop className="w-32 h-32 py-4" />)}
        {CardData(<SiAxios className="w-32 h-32 py-4" />)}
      </div>
    </div>
  );
};

export default ToolsSet;
