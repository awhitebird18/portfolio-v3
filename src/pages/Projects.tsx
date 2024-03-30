import { Button } from "@/components/ui/button";
import Header from "@/layout/Header";
import projects from "@/data/projects";

const Projects = () => {
  const handleNavigate = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="container">
      <Header
        title="Featured Projects."
        subtitle="Here are some of my best projects created from the ground up."
      />

      <div className="flex flex-col items-center justify-center gap-36 relative">
        {projects.map((project, index) => (
          <div className={`flex justify-between gap-20 ${index % 2 && "flex-row-reverse"}`}>
            <div className="flex flex-col prose dark:prose-invert">
              <div className="flex justify-between">
                <h2 className="text-3xl">{project.title}</h2>
              </div>
              <p className="mb-8">{project.description}</p>
              <div className="flex flex-col gap-6 prose dark:prose-invert mt-4">
                {project.points.map((point) => (
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <img src={point.icon} className="m-0" />
                    </div>
                    <div>
                      <h4 className="my-0 leading-tight">{point.title}</h4>
                      <p>{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-8 items-center ml-auto mt-20">
                <Button onClick={() => handleNavigate(project.liveUrl)}>Live Demo</Button>
                <Button variant="secondary" onClick={() => handleNavigate(project.codeUrl)}>
                  Code
                </Button>
              </div>
            </div>
            <div className="w-5/12 flex-shrink-0">
              <img src={project.image} className="w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
