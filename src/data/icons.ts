import HtmlIcon from "@/assets/Frontend/HTML.png";
import CssIcon from "@/assets/Frontend/CSS.png";
import ReactIcon from "@/assets/Frontend/React.png";
import TailwindIcon from "@/assets/Frontend/Tailwind.png";
import SassIcon from "@/assets/Frontend/Sass.png";
import NextIcon from "@/assets/Frontend/Next.png";
import ReduxIcon from "@/assets/Frontend/Redux.png";
import MobxIcon from "@/assets/Frontend/Mobx.png";

import ExpressIcon from "@/assets/Backend/Express.png";
import NodeIcon from "@/assets/Backend/Node.png";
import MongoIcon from "@/assets/Backend/Mongo.png";
import PostgresIcon from "@/assets/Backend/Postgres.png";
import NestIcon from "@/assets/Backend/Nest Js.png";

import JavascriptIcon from "@/assets/Tooling/Javascript.png";
import TypescriptIcon from "@/assets/Tooling/Typescript.png";
import GitIcon from "@/assets/Tooling/Git.png";
import BitbucketIcon from "@/assets/Tooling/Bitbucket.png";
import DockerIcon from "@/assets/Tooling/Docker.png";
import { Icon } from "@/types/Icon";
import { IconSet } from "@/types/IconSet";

export default <Icon[]>[
  {
    id: "express",
    title: "Express",
    icon: ExpressIcon,
    type: IconSet.BACKEND,
    x: 584.2,
    y: 457.03,
    d: "M624.534 350.89V457.03",
    strokeUrl: "url(#green-pulse-1)",
    segments: [
      {
        command: "M",
        value: "624.534 350.89",
      },
      {
        command: "V",
        value: "457.03",
      },
    ],
  },
  {
    id: "node",
    title: "Node",
    icon: NodeIcon,
    type: IconSet.BACKEND,
    x: 737.03,
    y: 411.52,
    d: "M720.248 351.016V379.616H777.363V411.515",
    strokeUrl: "url(#green-pulse-1)",
    segments: [
      {
        command: "M",
        value: "720.248 351.016",
      },
      {
        command: "V",
        value: "379.616",
      },
      {
        command: "H",
        value: "777.363",
      },
      {
        command: "V",
        value: "411.515",
      },
    ],
  },
  {
    id: "mongo",
    title: "Mongo",
    icon: MongoIcon,
    type: IconSet.BACKEND,
    x: 874.63,
    y: 516.92,
    d: "M766.41 315.17H828.452L958.111 444.829L913.221 489.719V516.977",
    strokeUrl: "url(#green-pulse-1)",
    segments: [
      {
        command: "M",
        value: "766.41 315.17",
      },
      {
        command: "H",
        value: "828.452",
      },
      {
        command: "L",
        value: "958.111 444.829",
      },
      {
        command: "L",
        value: "913.221 489.719",
      },
      {
        command: "V",
        value: "516.977",
      },
    ],
  },
  {
    id: "postgres",
    title: "PostgreSql",
    icon: PostgresIcon,
    type: IconSet.BACKEND,
    x: 199.65,
    y: 36.94,
    d: "M433.832 283.816H219.36L171.222 229.397L239.638 160.981V117.225",
    strokeUrl: "url(#green-pulse-1)",
    segments: [
      {
        command: "M",
        value: "433.832 283.816",
      },
      {
        command: "H",
        value: "219.36",
      },
      {
        command: "L",
        value: "171.222 229.397",
      },
      {
        command: "L",
        value: "239.638 160.981",
      },
      {
        command: "V",
        value: "117.225",
      },
    ],
  },
  {
    id: "nest",
    title: "Nest",
    icon: NestIcon,
    type: IconSet.BACKEND,
    x: 330.35,
    y: 382.02,
    d: "M528.112 350.89L528.112 385.485L490.971 422.625H411.018",
    strokeUrl: "url(#green-pulse-1)",
    segments: [
      {
        command: "M",
        value: "528.112 350.89",
      },
      {
        command: "L",
        value: "528.112 385.485",
      },
      {
        command: "L",
        value: "490.971 422.625",
      },
      {
        command: "H",
        value: "411.018",
      },
    ],
  },
  {
    id: "javascript",
    title: "Javascript",
    icon: JavascriptIcon,
    type: IconSet.TOOLING,
    x: 337,
    y: 116.94,
    d: "M480.265 248.95V159.663H417.672",
    strokeUrl: "url(#orange-pulse-1)",
    segments: [
      {
        command: "M",
        value: "480.265 248.95",
      },
      {
        command: "V",
        value: "159.663",
      },
      {
        command: "H",
        value: "417.672",
      },
    ],
  },
  {
    id: "typescript",
    title: "Typescript",
    icon: TypescriptIcon,
    type: IconSet.TOOLING,
    x: 586.2,
    y: 115.97,
    d: "M624.533 248.809V195.677",
    strokeUrl: "url(#orange-pulse-1)",
    segments: [
      {
        command: "M",
        value: "624.533 248.809",
      },
      {
        command: "V",
        value: "195.677",
      },
    ],
  },
  {
    id: "git",
    title: "Git",
    icon: GitIcon,
    type: IconSet.TOOLING,
    x: 987.67,
    y: 325.29,
    d: "M766.41 284.17H1029.14V325.272",
    strokeUrl: "url(#orange-pulse-1)",
    segments: [
      {
        command: "M",
        value: "766.41 284.17",
      },
      {
        command: "H",
        value: "1029.14",
      },
      {
        command: "V",
        value: "325.272",
      },
    ],
  },
  {
    id: "bitbucket",
    title: "Bitbucket",
    icon: BitbucketIcon,
    type: IconSet.TOOLING,
    x: 1118.52,
    y: 243.32,
    d: "M766.41 284.17H1118.56",
    strokeUrl: "url(#orange-pulse-1)",
    segments: [
      {
        command: "M",
        value: "766.41 284.17",
      },
      {
        command: "H",
        value: "1118.56",
      },
    ],
  },
  {
    id: "docker",
    title: "Docker",
    icon: DockerIcon,
    type: IconSet.TOOLING,
    x: 49.27,
    y: 274.95,
    d: "M434.205 315.804H129.947",
    strokeUrl: "url(#orange-pulse-1)",
    segments: [
      {
        command: "M",
        value: "434.205 315.804",
      },
      {
        command: "H",
        value: "129.947",
      },
    ],
  },
  {
    id: "jest",
    title: "Jest",
    icon: DockerIcon,
    type: IconSet.TOOLING,
    x: 129.53,
    y: 493.91,
    d: "M434.205 315.804H277.681L169.866 423.619V493.906",
    strokeUrl: "url(#orange-pulse-1)",
    segments: [
      {
        command: "M",
        value: "434.205 315.804",
      },
      {
        command: "H",
        value: "277.681",
      },
      {
        command: "L",
        value: "169.866 423.619",
      },
      {
        command: "V",
        value: "493.906",
      },
    ],
  },
  {
    id: "html",
    title: "HTML",
    icon: HtmlIcon,
    type: IconSet.FRONTEND,
    x: 1.14,
    y: 3.02,
    d: "M433.832 283.816H219.36L41.4795 82.7263",
    strokeUrl: "url(#pink-pulse-1)",
    segments: [
      {
        command: "M",
        value: "433.832 283.816",
      },
      {
        command: "H",
        value: "219.36",
      },
      {
        command: "L",
        value: "41.4795 82.7263",
      },
    ],
  },
  {
    id: "css",
    title: "CSS",
    icon: CssIcon,
    type: IconSet.FRONTEND,
    x: 841,
    y: 181.39,
    d: "M719.945 248.89V224.199H841",
    strokeUrl: "url(#pink-pulse-1)",
    segments: [
      {
        command: "M",
        value: "719.945 248.89",
      },
      {
        command: "V",
        value: "224.199",
      },
      {
        command: "H",
        value: "841",
      },
    ],
  },
  {
    id: "react",
    title: "React",
    icon: ReactIcon,
    type: IconSet.FRONTEND,
    x: 1083.84,
    y: 440.02,
    d: "M766.41 315.17H828.452L994.355 481.073H1084.86",
    strokeUrl: "url(#pink-pulse-1)",
    segments: [
      {
        command: "M",
        value: "766.41 315.17",
      },
      {
        command: "H",
        value: "828.452",
      },
      {
        command: "L",
        value: "994.355 481.073",
      },
      {
        command: "H",
        value: "1084.86",
      },
    ],
  },
  {
    id: "tailwind",
    title: "Tailwind",
    icon: TailwindIcon,
    type: IconSet.FRONTEND,
    x: 1103.68,
    y: 34.15,
    d: "M766.41 284.17H945.387L1076.21 153.348H1144.2V113.874",
    strokeUrl: "url(#pink-pulse-1)",
    segments: [
      {
        command: "M",
        value: "766.41 284.17",
      },
      {
        command: "H",
        value: "945.387",
      },
      {
        command: "L",
        value: "1076.21 153.348",
      },
      {
        command: "H",
        value: "1144.2",
      },
      {
        command: "V",
        value: "113.874",
      },
    ],
  },
  {
    id: "sass",
    title: "Sass",
    icon: SassIcon,
    type: IconSet.FRONTEND,
    x: 735.63,
    y: 11.77,
    d: "M719.945 248.89V53.8525H735.63",
    strokeUrl: "url(#pink-pulse-1)",
    segments: [
      {
        command: "M",
        value: "719.945 248.89",
      },
      {
        command: "V",
        value: "53.8525",
      },
      {
        command: "H",
        value: "735.63",
      },
    ],
  },
  {
    id: "next",
    title: "Next",
    icon: NextIcon,
    type: IconSet.FRONTEND,
    x: 414.63,
    y: 506.12,
    d: "M528.112 350.89L528.111 546.97H495.299",
    strokeUrl: "url(#pink-pulse-1)",
    segments: [
      {
        command: "M",
        value: "528.112 350.89",
      },
      {
        command: "L",
        value: "528.111 546.97",
      },
      {
        command: "H",
        value: "495.299",
      },
    ],
  },
  {
    id: "redux",
    title: "Redux",
    icon: ReduxIcon,
    type: IconSet.FRONTEND,
    x: 924.84,
    y: 33.98,
    d: "M719.945 248.89V224.199H806.472V163.888L924.836 74.8311",
    strokeUrl: "url(#pink-pulse-1)",
    segments: [
      {
        command: "M",
        value: "719.945 248.89",
      },
      {
        command: "V",
        value: "224.199",
      },
      {
        command: "H",
        value: "806.472",
      },
      {
        command: "V",
        value: "163.888",
      },
      {
        command: "L",
        value: "924.836 74.8311",
      },
    ],
  },
  {
    id: "mobx",
    title: "Mobx",
    icon: MobxIcon,
    type: IconSet.FRONTEND,
    x: 467.9,
    y: 2,
    d: "M480.265 248.95V159.663H509.047V81.8464",
    strokeUrl: "url(#pink-pulse-1)",
    segments: [
      {
        command: "M",
        value: "480.265 248.95",
      },
      {
        command: "V",
        value: "159.663",
      },
      {
        command: "H",
        value: "509.047",
      },
      {
        command: "V",
        value: "81.8464",
      },
    ],
  },
];

// export default <Icon[]>[
//   {
//     id: "html",
//     title: "HTML",
//     icon: htmlIcon,
//     type: IconSet.FRONTEND,
//     x: 1.14,
//     y: 3.02,
//     d: "M433.832 283.816H219.36L41.4795 82.7263",
//     strokeUrl: "url(#pink-pulse-1)",
//   },
//   {
//     id: "css",
//     title: "CSS",
//     icon: cssIcon,
//     type: IconSet.FRONTEND,
//     x: 841,
//     y: 181.39,
//     d: "M719.945 248.89V224.199H841",
//     strokeUrl: "url(#pink-pulse-1)",
//   },
//   {
//     id: "react",
//     title: "React",
//     icon: reactIcon,
//     type: IconSet.FRONTEND,
//     x: 1083.84,
//     y: 440.02,
//     d: "M766.41 315.17H828.452L994.355 481.073H1084.86",
//     strokeUrl: "url(#pink-pulse-1)",
//   },
//   {
//     id: "tailwind",
//     title: "Tailwind",
//     icon: tailwindIcon,
//     type: IconSet.FRONTEND,
//     x: 1103.68,
//     y: 34.15,
//     d: "M766.41 284.17H945.387L1076.21 153.348H1144.2V113.874",
//     strokeUrl: "url(#pink-pulse-1)",
//   },
//   {
//     id: "sass",
//     title: "Sass",
//     icon: SassIcon,
//     type: IconSet.FRONTEND,
//     x: 735.63,
//     y: 11.77,
//     d: "M719.945 248.89V53.8525H735.63",
//     strokeUrl: "url(#pink-pulse-1)",
//   },
//   {
//     id: "next",
//     title: "Next",
//     icon: NextIcon,
//     type: IconSet.FRONTEND,
//     x: 414.63,
//     y: 506.12,
//     d: "M528.112 350.89L528.111 546.97H495.299",
//     strokeUrl: "url(#pink-pulse-1)",
//   },
//   {
//     id: "redux",
//     title: "Redux",
//     icon: ReduxIcon,
//     type: IconSet.FRONTEND,
//     x: 924.84,
//     y: 33.98,
//     d: "M719.945 248.89V224.199H806.472V163.888L924.836 74.8311",
//     strokeUrl: "url(#pink-pulse-1)",
//   },
//   {
//     id: "mobx",
//     title: "Mobx",
//     icon: MobxIcon,
//     type: IconSet.FRONTEND,
//     x: 467.9,
//     y: 2,
//     d: "M480.265 248.95V159.663H509.047V81.8464",
//     strokeUrl: "url(#pink-pulse-1)",
//   },
//   {
//     id: "express",
//     title: "Express",
//     icon: expressIcon,
//     type: IconSet.BACKEND,
//     x: 584.2,
//     y: 457.03,
//     d: "M624.534 350.89V457.03",
//     strokeUrl: "url(#green-pulse-1)",
//   },
//   {
//     id: "node",
//     title: "Node",
//     icon: nodeIcon,
//     type: IconSet.BACKEND,
//     x: 737.03,
//     y: 411.52,
//     d: "M720.248 351.016V379.616H777.363V411.515",
//     strokeUrl: "url(#green-pulse-1)",
//   },
//   {
//     id: "mongo",
//     title: "Mongo",
//     icon: mongoIcon,
//     type: IconSet.BACKEND,
//     x: 874.63,
//     y: 516.92,
//     d: "M766.41 315.17H828.452L958.111 444.829L913.221 489.719V516.977",
//     strokeUrl: "url(#green-pulse-1)",
//   },
//   {
//     id: "postgres",
//     title: "PostgreSql",
//     icon: postgresIcon,
//     type: IconSet.BACKEND,
//     x: 199.65,
//     y: 36.94,
//     d: "M433.832 283.816H219.36L171.222 229.397L239.638 160.981V117.225",
//     strokeUrl: "url(#green-pulse-1)",
//   },
//   {
//     id: "nest",
//     title: "Nest",
//     icon: nestIcon,
//     type: IconSet.BACKEND,
//     x: 330.35,
//     y: 382.02,
//     d: "M528.112 350.89L528.112 385.485L490.971 422.625H411.018",
//     strokeUrl: "url(#green-pulse-1)",
//   },
//   {
//     id: "javascript",
//     title: "Javascript",
//     icon: javascriptIcon,
//     type: IconSet.TOOLING,
//     x: 337,
//     y: 116.94,
//     d: "M480.265 248.95V159.663H417.672",
//     strokeUrl: "url(#orange-pulse-1)",
//   },
//   {
//     id: "typescript",
//     title: "Typescript",
//     icon: typescriptIcon,
//     type: IconSet.TOOLING,
//     x: 586.2,
//     y: 115.97,
//     d: "M624.533 248.809V195.677",
//     strokeUrl: "url(#orange-pulse-1)",
//   },
//   {
//     id: "git",
//     title: "Git",
//     icon: gitIcon,
//     type: IconSet.TOOLING,
//     x: 987.67,
//     y: 325.29,
//     d: "M766.41 284.17H1029.14V325.272",
//     strokeUrl: "url(#orange-pulse-1)",
//   },
//   {
//     id: "bitbucket",
//     title: "Bitbucket",
//     icon: bitbucketIcon,
//     type: IconSet.TOOLING,
//     x: 1118.52,
//     y: 243.32,
//     d: "M766.41 284.17H1118.56",
//     strokeUrl: "url(#orange-pulse-1)",
//   },
//   {
//     id: "docker",
//     title: "Docker",
//     icon: dockerIcon,
//     type: IconSet.TOOLING,
//     x: 49.27,
//     y: 274.95,
//     d: "M434.205 315.804H129.947",
//     strokeUrl: "url(#orange-pulse-1)",
//   },
//   {
//     id: "jest",
//     title: "Jest",
//     icon: dockerIcon,
//     type: IconSet.TOOLING,
//     x: 129.53,
//     y: 493.91,
//     d: "M434.205 315.804H277.681L169.866 423.619V493.906",
//     strokeUrl: "url(#orange-pulse-1)",
//   },
// ];
