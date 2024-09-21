import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
	return (
		<div
			className="min-h-[50vh] w-full flex flex-col items-center p-8 gap-6"
			id="contact"
		>
			<h1 className="text-5xl font-bold text-center">Contact Me</h1>
			<p className="text-center">
				I&apos;m always open to new opportunities. Feel free to reach out with
				any inquiries or project proposals.
			</p>

			<a
				href="mailto:davidgoyal55@gmail.com"
				target="_blank"
				className="flex gap-4 items-center w-[16rem]"
			>
				<div className="text-white bg-[rgba(0,0,0,2)] rounded-md px-2 py-1 text-xs border-[1px] border-[rgba(255,255,255,0.1)]">
					<IoMdMail className="text-blue-700 size-10"></IoMdMail>
				</div>
				<span className="text-white">davidgoyal55@gmail.com</span>
			</a>
			<a
				href="https://www.linkedin.com/in/david-goyal/"
				target="_blank"
				className="flex gap-4 items-center w-[16rem]"
			>
				<div className="text-white bg-[rgba(0,0,0,2)] rounded-md px-2 py-1 text-xs border-[1px] border-[rgba(255,255,255,0.1)]">
					<FaLinkedinIn className="text-blue-700 size-10"></FaLinkedinIn>
				</div>
				<span className="text-white">@DavidGoyal</span>
			</a>
			<a
				href="https://github.com/DavidGoyal"
				target="_blank"
				className="flex gap-4 items-center w-[16rem]"
			>
				<div className="text-white bg-[rgba(0,0,0,2)] rounded-md px-2 py-1 text-xs border-[1px] border-[rgba(255,255,255,0.1)]">
					<FaGithub className="text-blue-700 size-10"></FaGithub>
				</div>
				<span className="text-white">@David Goyal</span>
			</a>
			<a
				href="https://x.com/David__Goyal"
				target="_blank"
				className="flex gap-4 items-center w-[16rem]"
			>
				<div className="text-white bg-[rgba(0,0,0,2)] rounded-md px-2 py-1 text-xs border-[1px] border-[rgba(255,255,255,0.1)]">
					<FaXTwitter className="text-blue-700 size-10"></FaXTwitter>
				</div>
				<span className="text-white">@David Goyal</span>
			</a>
		</div>
	);
};

export default Contact;
