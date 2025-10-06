import React from "react";
import img from "@/assets/WhatsApp Image 2024-03-26 at 22.50.36_ff84dcfc.jpg";
import Image from "next/image";
import Link from "next/link";
import paypal from "@/assets/paypal.png";

const Hero = () => {
  return (
    <div className="min-h-[80vh] w-full bg-[rgba(0,0,0,2)] flex justify-center px-4">
      <div className="h-full w-full max-w-3xl flex flex-col items-start gap-4 my-8 sm:justify-center">
        <Image
          src={img}
          alt="hero"
          height={100}
          width={100}
          className="rounded-2xl"
        />
        <h1 className="text-5xl text-white font-bold">Hi, David here.</h1>
        <p>
          A 20 year old Computer Science Student from Punjab, India. I will
          graduate from the Chandigarh University, Punjab in 2026 with a B.E. in
          Computer Science and Engineering.
        </p>

        <h3 className="text-3xl font-bold mt-10">What am I?</h3>
        <div className="flex flex-col gap-3 ">
          <p className="text-gray-400">
            A freelancer who loves to build things. I have worked with many web3
            clients in the past and am also working with some. I have built many
            bots on pumpfun involving tracking tokens, their dev accounts and so
            on. I have worked with many NFT projects as a developer like{" "}
            <Link
              href={"https://x.com/BambiLands"}
              target="_blank"
              className="text-blue-500 underline"
            >
              Bambilands
            </Link>
            ,
            <Link
              href={"https://x.com/Illiquid_nft"}
              target="_blank"
              className="text-blue-500 underline"
            >
              {" "}
              Illiquid
            </Link>
            .
          </p>
        </div>

        <h3 className="text-3xl font-bold mt-10">Experience</h3>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-2 items-center">
              <Image
                src={paypal}
                alt="hero"
                className="rounded-full"
                height={50}
                width={50}
              />
              <div className="flex flex-col items-start justify-between">
                <Link
                  href={"https://paypal.com"}
                  target="_blank"
                  className="text-md sm:text-xl"
                >
                  Paypal
                </Link>
                <p className="text-xs xm:text-md"> Software Engineer Intern</p>
              </div>
            </div>
            <p className="text-gray-400 text-xs xm:text-md">
              May 2025 - August 2025
            </p>
          </div>
        </div>

        <h3 className="text-3xl font-bold mt-10">Youtube</h3>
        <p className="text-gray-400 -translate-y-4">
          I make videos about my freelance journey, sharing insights and
          experiences from my journey.
        </p>
        <div className="w-full flex flex-row flex-wrap gap-4 mt-4 lg:justify-between justify-center">
          <YoutubeCard
            img="/thumbnail1.png"
            title="How to get started with freelancing."
            link="https://youtu.be/XYhEqFPXiMc?si=EyCMMRJOSBRCQmXk"
          />
          <YoutubeCard
            img="/thumbnail2.png"
            title="How we started freelancing."
            link="https://youtu.be/AkyQCbtRBAs?si=2jFi6uINkeDuupiv"
          />
          <YoutubeCard
            img="/thumbnail3.png"
            title="3 lakhs in a week."
            link="https://youtu.be/70If81K6R6w?si=Ac9e-HIbgUsPwsMH"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

const YoutubeCard = ({
  img,
  title,
  link,
}: {
  img: string;
  title: string;
  link: string;
}) => (
  <div className="w-[370px] h-[320px] bg-[hsla(0%,8%,0%,1%)] rounded-md p-6 flex flex-col items-center justify-between bg-[#0a0a0a] border-[1px] border-[rgba(255,255,255,0.1)] overflow-y-auto hover:scale-105 transition-all duration-300">
    <Link
      className="w-full h-full rounded-md flex flex-col justify-between gap-4"
      href={link}
      target="_blank"
    >
      <Image
        src={img}
        alt="project"
        className="h-[80%] w-full rounded-md object-cover"
        width={100}
        quality={100}
        height={100}
      />
      <h1 className="text-white text-xl font-bold">{title}</h1>
    </Link>
  </div>
);
