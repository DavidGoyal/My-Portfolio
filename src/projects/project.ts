import Hard from "../assets/75Hard.png";
import carrent from "../assets/carrent.png";
import jobit from "../assets/jobit.png";
import tripguide from "../assets/tripguide.png";
import netflix from "../assets/netflix.png";
import TravelLink from "../assets/TravelLink.png";
import SolGuard from "../assets/SolGuard.png";

export const projects = [
	{
		name: "Travel Link",
		description:
			"Tinder for solo travellers. Users can find for partners for their trips. Users can even chat with eact other.",
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
	{
		name: "SolGuard",
		description:
			"A decentralized app that helps users suffering from sol drain hack to send their spl tokens from one account to another without paying gas fees. Gas fees of each transaction is paid by us.",
		tags: ["solana/web3.js", "material-ui", "react", "solana-wallet-adapter"],
		image: SolGuard,
		source_code_link: "https://github.com/DavidGoyal/SolGuard",
		deployed_link: "https://sol-guard.vercel.app",
	},
	{
		name: "Chat App",
		description:
			"Web-based chat app that allows users to chat, send attachments realtime. Users can create their groups and manage it realtime also enabling users to get notifications.",
		tags: [
			"material-ui",
			"react",
			"redux",
			"rtk query",
			"mongodb",
			"express",
			"jsonwebtoken",
			"socket.io",
			"restapi",
			"framer-motion",
		],
		image: carrent,
		source_code_link: "https://github.com/DavidGoyal/Realtime-Chat-App",
		deployed_link: "https://chat-app-frontend-rho-three.vercel.app",
	},
	{
		name: "Shopio",
		description:
			"Full Stack Ecommerce Website enabling users to buy products and also having a special admin dashboard for admins to process orders, create new products, update existing products.",
		tags: [
			"typescript",
			"chartjs",
			"react",
			"redux",
			"rtk query",
			"restapi",
			"node-cache",
			"express",
			"mongodb",
			"scss",
		],
		image: jobit,
		source_code_link: "https://github.com/DavidGoyal/Shopio",
		deployed_link: "https://mern-e-commerce-frontend-seven.vercel.app",
	},
	{
		name: "XCrypto",
		description:
			"A crypto tracker website helping users to get realtime data about different crypto currencies and exchanges",
		tags: ["react", "chakra-ui", "framer-motion", "chartjs", "react-icons"],
		image: tripguide,
		source_code_link: "https://github.com/DavidGoyal/Crypto_App",
		deployed_link: "https://crypto-app-tan-ten.vercel.app",
	},
	{
		name: "Netflix Clone",
		description: "UI clone of Netflix made using html and css",
		tags: ["html", "css"],
		image: netflix,
		source_code_link: "https://github.com/DavidGoyal/Netflix-UI-Clone",
	},
];
