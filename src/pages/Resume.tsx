import Header from "@/layout/Header";
import resume from "@/data/resume";

const Resume = () => {
  return (
    <div className="container">
      <Header
        title="Resume."
        subtitle="Overview of my development career with milestones and achievements."
      />

      <div className="container flex flex-col gap-24 w-full">
        {resume.map((entry) => (
          <div className="flex gap-12 mx-auto">
            <div className="w-20 h-20 bg-[#22242C] border-[#363946] border p-2 rounded-xl flex-shrink-0">
              <img src={entry.icon} className="w-full h-full" />
            </div>
            <div className="prose dark:prose-invert !max-w-none">
              <div className="flex justify-between mb-8">
                <div>
                  <h3 className="text-2xl my-0">{entry.jobTitle}</h3>
                  <h4 className="text-primary text-lg">{entry.companyName}</h4>
                </div>
                <h4 className="text-lg">{entry.date}</h4>
              </div>
              <div className="flex flex-col gap-7">
                {entry.points.map((point) => (
                  <div>
                    <h4 className="m-0 text-lg">{point.title}</h4>
                    <p>{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
