import Header from "@/layout/Header";
import Avatar from "@/assets/avatar.png";
import { concepts, descriptions, personalPoints } from "@/data/about";

const About = () => {
  return (
    <div className="w-full mx-auto container">
      <Header title="About me." subtitle="Who I have become in the world of coding." />
      <div className="flex justify-between gap-20">
        <div className="flex flex-col gap-8 w-1/2">
          <img src={Avatar} className="w-full" />
          <div className="prose dark:prose-invert space-y-2">
            <p className="text-sm text-neutral-400">Some concepts that I enjoy learning:</p>
            <div className="flex justify-between w-full flex-wrap gap-3">
              {concepts.map((concept: string) => (
                <div className="h-8 px-2 rounded-xl bg-white/5 text-xs flex items-center">
                  {concept}
                </div>
              ))}
            </div>
          </div>
          <div className="prose dark:prose-invert space-y-2">
            <p className="text-sm text-neutral-400">How others would describe me:</p>
            <div className="flex justify-between w-full flex-wrap gap-3">
              {descriptions.map((description: string) => (
                <div className="h-8 px-2 rounded-xl bg-white/5 text-xs flex items-center">
                  {description}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full">
          {personalPoints.map((point) => (
            <div key={point.id} className="flex gap-6">
              <div className="w-12 h-min flex-shrink-0">
                <img src={point.icon} className="w-full h-full" />
              </div>
              <div className="prose dark:prose-invert">
                <h3 className="mt-0 mb-2 leading-tight">{point.title}</h3>
                <p>{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
