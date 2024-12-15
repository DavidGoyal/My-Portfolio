import React from "react";
import img from "@/assets/WhatsApp Image 2024-03-26 at 22.50.36_ff84dcfc.jpg";
import Image from "next/image";

const Hero = () => {
	return (
		<div className="min-h-[80vh] w-full flex justify-center p-8">
			<div className="min-h-full w-11/12 sm:w-4/5 flex flex-col-reverse sm:flex-row sm:items-center gap-12">
				<div className="text-center sm:text-left w-full sm:w-1/2 flex flex-col gap-4 h-fit">
					<h1 className="text-3xl sm:text-5xl font-bold">
						Hello, I am David Goyal from India
					</h1>
					<p>
						Crafting innovative digital solutions for almost a year as a full
						stack developer
					</p>
					<div className="flex gap-4 justify-center sm:justify-start">
						<button className="bg-blue-700 text-white rounded-md px-4 py-2 ">
							<a href="https://github.com/DavidGoyal" target="_blank">
								Github
							</a>
						</button>
						<button className="bg-blue-700 text-white rounded-md px-4 py-2 ">
							<a
								href="https://drive.google.com/file/d/1MB7boWP5vCcQuh1wjkKUPa5bZmZU1201/view?usp=sharing"
								target="_blank"
							>
								Open Resume
							</a>
						</button>
					</div>
				</div>

				<div className="w-full sm:w-2/5 flex justify-center h-3/5 sm:h-[80%] rounded-lg">
					<Image
						src={img}
						alt="hero"
						className="w-full h-full rounded-md object-cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
