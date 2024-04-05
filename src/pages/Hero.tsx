import HeroBackground from "@/assets/Hero/HeroImage.png";
import ReactIcon from "@/assets/Hero/ReactIcon.png";
import JavascriptIcon from "@/assets/Hero/JavascriptIcon.png";
import PostgresIcon from "@/assets/Hero/PostgresIcon.png";
import PostgresReflectionIcon from "@/assets/Hero/PostgresIconReflection.png";
import { Button } from "@/components/ui/button";
import Rays from "@/assets/Hero/Rays.png";
import NavTypes from "@/types/navTypes";

const Hero = ({ handleNavigate }: { handleNavigate: (id: NavTypes) => void }) => {
  return (
    <div className="h-screen w-full relative hero">
      <img src={Rays} className="absolute object-fill -top-36 right-0 w-full -z-20" />
      <div className="flex items-center w-full max-w-7xl mx-auto h-full relative container">
        <div className="flex flex-col w-full md:w-1/2 gap-12 flex-shrink-0 h-full justify-center z-30">
          <div className="flex flex-col space-y-3 prose dark:prose-invert">
            <h1 className="text-[3.5rem] md:text-7xl lg:text-8xl whitespace-nowrap">
              Aaron Whitebird
            </h1>
            <h2 className="text:xl md:text:3xl lg:text-4xl whitespace-nowrap">
              I am a <span className="text-primary">FullStack Developer.</span>
            </h2>
            <p>Crafting Seamless Digital Experiences from Frontend Magic to Backend Logic.</p>
          </div>

          <div className="flex gap-8 mt-8">
            <Button onClick={() => handleNavigate(NavTypes.PROJECTS)}>View Projects</Button>
            <Button onClick={() => handleNavigate(NavTypes.RESUME)} variant="secondary">
              Resume
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-shrink-0 h-full absolute right-0 top-0 opacity-40 md:opacity-100">
          <div
            className="absolute -translate-y-1/2 top-1/2 "
            style={{ height: "130vh", maxHeight: "1250px", right: "-7rem", top: "54vh" }}
          >
            <img src={HeroBackground} style={{ height: "100%", objectFit: "cover" }} />
          </div>
          <img
            src={ReactIcon}
            className="!bg-transparent absolute top-24 w-32 right-[18rem] md:right-[22rem] float-animation icon-1"
            style={{ top: "7vh" }}
          />
          <img
            src={JavascriptIcon}
            className="absolute top-32 -right-0 w-32 float-animation icon-2"
            style={{ top: "5vh" }}
          />
          <img
            src={PostgresIcon}
            className="absolute -right-8 lg:-right-28 w-32 float-animation icon-3"
            style={{ top: "62vh" }}
          />
          <img
            src={PostgresReflectionIcon}
            className="absolute right-16 lg:-right-4 w-40 float-animation icon-3"
            style={{ top: "76vh" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
