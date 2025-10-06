import Hard from "../assets/75Hard.png";
import coinflip from "../assets/coinflip.png";
import NftBridge from "../assets/loomia-bridge.png";
import Loomia from "../assets/Loomia.png";
import TravelLink from "../assets/TravelLink.png";

export const projects = [
  {
    name: "Loomia",
    description: "A NFT marketplace and launchpad on Somnia chain.",
    tags: ["solidity", "typescript", "nextjs", "prisma", "tailwindcss"],
    image: Loomia,
    deployed_link: "https://loomia.trade",
  },
  {
    name: "NFT Bridge",
    description:
      "A NFT bridge platform to bridge nfts from Ethereum to Somnia chain.",
    tags: ["solidity", "typescript", "nextjs", "prisma", "tailwindcss"],
    image: NftBridge,
    deployed_link: "https://bridge.loomia.trade",
  },
  {
    name: "CoinFlip",
    description: "Decentralized coinflip game where people can lose or double.",
    tags: ["soldity", "typescript", "nextjs", "prisma", "tailwindcss"],
    image: coinflip,
    source_code_link: "https://github.com/DavidGoyal/coinflip",
    deployed_link: "https://coinflip-gamma.vercel.app/",
  },
  {
    name: "Travel Link",
    description:
      "Tinder for solo travellers. Users can find partners for their trips. Users can even chat with eact other.",
    tags: [
      "typescript",
      "material-ui",
      "react",
      "redux",
      "rtk query",
      "mongodb",
      "express",
      "jsonwebtoken",
      "restapi",
    ],
    image: TravelLink,
    source_code_link: "https://github.com/DavidGoyal/Travel-Link",
    deployed_link: "https://travellink-india.vercel.app",
  },
  {
    name: "SweatFuse",
    description:
      "A progress tracker website that allows users to track their progress for 75 days. Users need to do 5 tasks daily and then upload a selfie and if they miss any day their progress will get resetted.",
    tags: [
      "typescript",
      "gemini ai",
      "material-ui",
      "react",
      "redux",
      "rtk query",
      "mongodb",
      "express",
      "jsonwebtoken",
      "restapi",
    ],
    image: Hard,
    source_code_link: "https://github.com/DavidGoyal/SweatFuse",
    deployed_link: "https://sweatfuse.vercel.app",
  },
];
