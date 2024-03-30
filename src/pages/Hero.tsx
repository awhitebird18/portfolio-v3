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
      <img src={Rays} className="absolute object-fill -top-32 right-0 w-full -z-10" />
      <div className="flex items-center w-full max-w-7xl mx-auto h-full">
        <div className="flex flex-col w-1/2 gap-12 flex-shrink-0 ">
          <div className="flex flex-col space-y-3 prose dark:prose-invert">
            <h1 className="text-8xl whitespace-nowrap">Aaron Whitebird</h1>
            <h2 className="text-4xl whitespace-nowrap">
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
        <div className="flex w-1/2 flex-shrink-0 relative h-full">
          <div className="absolute -top-20 -right-44">
            <img src={HeroBackground} className="w-full" />
          </div>
          <img
            src={ReactIcon}
            className="!bg-transparent absolute top-2 right-60 w-32 float-animation icon-1"
          />
          <img
            src={JavascriptIcon}
            className="absolute top-24 -right-24 w-32 float-animation icon-2"
          />
          <img
            src={PostgresIcon}
            className="absolute top-[35rem] -right-48 w-32 float-animation icon-3"
          />
          <img
            src={PostgresReflectionIcon}
            className="absolute top-[50rem] -right-16 w-40 float-animation icon-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
