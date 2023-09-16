import {
  FaMagic,
  FaGem,
  FaGlobeAsia,
  FaPalette,
  FaSketch,
  FaVectorSquare,
  FaPencilRuler,
} from "react-icons/fa";
import ImagePortfolio1 from "../data/portfolio/portfolio (1).jpg";
import ImagePortfolio2 from "../data/portfolio/portfolio (2).jpg";
import ImagePortfolio3 from "../data/portfolio/portfolio (3).jpg";
import ImagePortfolio4 from "../data/portfolio/portfolio (4).jpg";
import ImagePortfolio5 from "../data/portfolio/portfolio (5).jpg";
import ImagePortfolio6 from "../data/portfolio/portfolio (6).jpg";
import ImagePortfolio7 from "../data/portfolio/portfolio (7).jpg";
import ImagePortfolio8 from "../data/portfolio/portfolio (8).jpg";
import avatar1 from "../data/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg";
import avatar2 from "../data/avatar/portrait-young-beautiful-woman-gesticulating.jpg";
import avatar3 from "../data/avatar/portrait-young-redhead-bearded-male.jpg";
import avatar4 from "../data/avatar/pretty-blonde-woman-wearing-white-t-shirt.jpg";
const DataCardFeatures = [
  {
    icon: <FaMagic />,
    title: "Tell Us your Idea",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid expedita nam nobis neque perferendis doloremque accusantium?",
  },
  {
    icon: <FaGem />,
    title: "We Will Do All The Work",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid expedita nam nobis neque perferendis doloremque accusantium?",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Your Product Is WorldWide",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid expedita nam nobis neque perferendis doloremque accusantium?",
  },
];
const DataCardServices = [
  {
    icon: <FaPalette />,
    title: "Web Design",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt iste, obcaecati
        ratione molestias unde ipsam.`,
  },
  {
    icon: <FaSketch />,
    title: "UI & UX",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt iste, obcaecati
        ratione molestias unde ipsam.`,
  },
  {
    icon: <FaVectorSquare />,
    title: "Web Design",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt iste, obcaecati
        ratione molestias unde ipsam.`,
  },
  {
    icon: <FaPencilRuler />,
    title: "UI & UX",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt iste, obcaecati
        ratione molestias unde ipsam.`,
  },
];
const DataCradPortfolio = [
  {
    src: ImagePortfolio1,
    alt: "Portfolio3",
    title: "Project Here",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloribus dignissimos veritatis
        voluptas laborum quisquam?`,
  },
  {
    src: ImagePortfolio2,
    alt: "Portfolio3",
    title: "Project Here",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloribus dignissimos veritatis
        voluptas laborum quisquam?`,
  },
  {
    src: ImagePortfolio3,
    alt: "Portfolio3",
    title: "Project Here",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloribus dignissimos veritatis
        voluptas laborum quisquam?`,
  },
  {
    src: ImagePortfolio4,
    alt: "Portfolio4",
    title: "Project Here",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloribus dignissimos veritatis
        voluptas laborum quisquam?`,
  },
  {
    src: ImagePortfolio5,
    alt: "Portfolio4",
    title: "Project Here",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloribus dignissimos veritatis
        voluptas laborum quisquam?`,
  },
  {
    src: ImagePortfolio6,
    alt: "Portfolio4",
    title: "Project Here",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloribus dignissimos veritatis
        voluptas laborum quisquam?`,
  },
  {
    src: ImagePortfolio7,
    alt: "Portfolio4",
    title: "Project Here",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloribus dignissimos veritatis
        voluptas laborum quisquam?`,
  },
  {
    src: ImagePortfolio8,
    alt: "Portfolio4",
    title: "Project Here",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloribus dignissimos veritatis
        voluptas laborum quisquam?`,
  },
];
const DataLinks = [
  {
    href: "/",
    title: "Home",
  },

  {
    href: "/#features",
    title: "Features",
  },
  {
    href: "/#services",
    title: "Services",
  },
  {
    href: "/#portfolio",
    title: "Portfolio",
  },
  {
    href: "/#about",
    title: "About",
  },
  {
    href: "/#contact",
    title: "Contact",
  },
];

const DataAbout = [
  {
    key: 1,
    src: avatar1,
    description: "assumenda,nihil accusantium quibusdam!",
  },
  {
    key: 2,
    src: avatar2,
    description: "assumenda,nihil accusantium quibusdam!",
  },
  {
    key: 3,
    src: avatar3,
    description: "assumenda,nihil accusantium quibusdam!",
  },
  {
    key: 4,
    src: avatar4,
    description: "assumenda,nihil accusantium quibusdam!",
  },
];
export {
  DataCardFeatures,
  DataCardServices,
  DataLinks,
  DataCradPortfolio,
  DataAbout,
};
