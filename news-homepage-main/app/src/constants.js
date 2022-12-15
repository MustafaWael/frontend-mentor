import PCImage from "./assets/images/image-retro-pcs.jpg";
import laptopImage from "./assets/images/image-top-laptops.jpg";
import controllerImage from "./assets/images/image-gaming-growth.jpg";

export const navigationLinks = [
  {
    id: 1,
    text: "Home",
  },
  {
    id: 2,
    text: "Popular",
  },
  {
    id: 3,
    text: "Trending",
  },
  {
    id: 4,
    text: "Categories",
  },
];

export const news = [
  {
    id: 1,
    title: "Hydrogen VS Electric Cars",
    subTitle: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    id: 2,
    title: "The Downsides of AI Artistry",
    subTitle:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    id: 3,
    title: "Is VC Funding Drying Up?",
    subTitle:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

export const featuredBlogs = [
  {
    id: 1,
    no: "01",
    title: "Reviving Retro PCs",
    subTitle: "What happens when old PCs are given modern upgrades?",
    image: {
      src: PCImage,
      alt: "image-retro-pcs",
    },
  },
  {
    id: 2,
    no: "02",
    title: "Top 10 Laptops of 2022",
    subTitle: "Our best picks for various needs and budgets.",
    image: {
      src: laptopImage,
      alt: "image-top-laptops",
    },
  },
  {
    id: 3,
    no: "03",
    title: "The Growth of Gaming",
    subTitle: "How the pandemic has sparked fresh opportunities.",
    image: {
      src: controllerImage,
      alt: "image-gaming-growth",
    },
  },
];
