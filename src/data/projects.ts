import techIcon from "@/assets/Projects/javascriptIcon.png";
import uiIcon from "@/assets/Projects/uiIcon.png";
import stateIcon from "@/assets/Projects/stateIcon.png";

import sparxImage from "@/assets/Projects/NavinotesImage.png";
import shiftpointImage from "@/assets/Projects/ShiftpointImage.png";

const projects = [
  {
    id: "sparx",
    title: "Sparx",
    description:
      "Navinotes is a learning platform where users create personalized roadmaps, share educational content, and track progress in a collaborative community, simplifying and enriching the learning experience.",
    image: sparxImage,
    codeUrl: "https://bitbucket.org/awhitebird-personal/workspace/projects/SPARX",
    liveUrl: "https://spa-rx.ca",
    points: [
      {
        title: "Full-Stack Tech",
        description: "Developed with TypeScript, React, MobX, Tailwind CSS, NestJS, PostgreSQL.",
        icon: techIcon,
      },
      {
        title: "Responsive UI Design",
        description: "Leveraging React and Tailwind CSS for adaptable and modern user interfaces.",
        icon: uiIcon,
      },
      {
        title: "Efficient State Management",
        description: "Utilizing MobX for reactive and scalable state management across components.",
        icon: stateIcon,
      },
      // {
      //   title: "Robust Server Architecture",
      //   description: "Built on NestJS for a structured and efficient backend framework.",
      //   icon: serverIcon,
      // },
      // {
      //   title: "Reliable Data Storage",
      //   description: "Employing PostgreSQL for secure and comprehensive data handling.",
      //   icon: storageIcon,
      // },
    ],
  },
  {
    id: "shiftpoint",
    title: "Shift Point",
    description:
      "Shift Point simplifies time and attendance management, enabling organizations to accurately track timesheets, schedule employees, and manage payroll. Its user-friendly platform supports detailed control over scheduling and pay calculations, with features for exporting data to CSV for seamless payroll processing.",
    image: shiftpointImage,
    codeUrl: "https://github.com/awhitebird18/shift-point",
    liveUrl: "https://shift-point.web.app",
    points: [
      {
        title: "Full-Stack Development",
        description:
          "Built with React, Redux, MongoDB, Express.js, and a custom React component library for comprehensive full-stack functionality.",
        icon: techIcon,
      },
      {
        title: "Modern UI Design",
        description:
          "Uses React along with SASS and CSS Modules for a modern, responsive user interface that enhances user experience.",
        icon: uiIcon,
      },
      {
        title: "Efficient State Management",
        description:
          "Implements Redux for global state management, ensuring seamless data flow and state control across the application.",
        icon: stateIcon,
      },
      // {
      //   title: "Data Storage and Management",
      //   description:
      //     "Utilizes MongoDB and Mongoose for efficient, schema-based data storage, allowing for robust data management and retrieval.",
      //   icon: serverIcon,
      // },
      // {
      //   title: "Customizable Components",
      //   description:
      //     "Features a custom React component library, enabling consistent and reusable UI elements throughout the application.",
      //   icon: storageIcon,
      // },
    ],
  },
];

export default projects;
