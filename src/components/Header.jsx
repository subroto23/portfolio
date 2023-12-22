import { TypeAnimation } from "react-type-animation";
import heroImg1 from "../assets/images/about.png";
const Header = () => {
  return (
    <div className="bg-gradient-to-t from-[#100A1F] to-[#000A1F]  bg-opacity-10 relative">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center py-16">
        <div className="text-center">
          <h1 className="md:text-6xl md:text-center text-left text-4xl font-semibold mb-6">
            I`m <span className="text-color textEffect">Subroto Das</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Front-end Developer",
              1500,
              "MERN Stack Developer",
              1500,
            ]}
            wrapper="span"
            speed={10}
            style={{
              fontSize: "2em",
              display: "inline-block",
              color: "#7600fa",
            }}
            repeat={Infinity}
          />
        </div>
        <div>
          <div className="">
            <img src={heroImg1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
