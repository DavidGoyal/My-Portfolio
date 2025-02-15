import React from "react";
import img from "@/assets/WhatsApp Image 2024-03-26 at 22.50.36_ff84dcfc.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-[80vh] w-full bg-[rgba(0,0,0,2)] flex justify-center px-4">
      <div className="h-full w-full max-w-2xl flex flex-col items-start gap-4 my-8 sm:justify-center">
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

        <h3 className="text-3xl font-bold mt-10">Who am I?</h3>
        <div className="flex flex-col gap-1 ">
          <p className="text-gray-400">
            A passionate learner and a curious mind.
          </p>
          <p className="text-gray-400">
            Currently learning web3 development and blockchain.
          </p>
          <p className="text-gray-400">
            A fullstack developer with a knack for solving realworld problems.
          </p>
        </div>

        <h3 className="text-3xl font-bold mt-10">What am I?</h3>
        <div className="flex flex-col gap-3 ">
          <p className="text-gray-400">
            A freelancer who loves to build things. I have worked with many web3
            clients in the past and am also working with some. I have built many
            bots on pumpfun involving tracking tokens, their dev accounts and so
            on. Recently I even got a chance to do a podcast with{" "}
            <a
              href="https://x.com/kirat_tw"
              target="_blank"
              className="text-blue-500 underline"
            >
              Harkirat Singh
            </a>{" "}
            which you can check out at{" "}
            <a
              href="https://www.youtube.com/watch?v=70If81K6R6w&t=38s"
              target="_blank"
              className="text-blue-500 underline"
            >
              Podcast
            </a>
            .
          </p>
          <p className="text-gray-400">
            I have even got selected as a Software Engineer Intern at{" "}
            <a
              href="https://www.paypal.com/in/home"
              target="_blank"
              className="text-blue-500 underline"
            >
              Paypal
            </a>
            . Previously I have worked at a startup called Tallbreeze which was
            a group of 5-6 people that used to build production level websites
            for clients.
          </p>
          <p className="text-gray-400">
            You can check all of my freelance work at{" "}
            <a
              href="https://humdrum-lipstick-b37.notion.site/Portfolio-19b94299c59f80a0b8c7cbc5fa48ff8c?pvs=4"
              target="_blank"
              className="text-blue-500 underline"
            >
              Notion
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
