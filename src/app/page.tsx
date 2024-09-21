import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import React from "react";

const page = () => {
	return (
		<div className="min-h-screen w-screen flex flex-col box-border p-0 m-0 max-w-[100%]">
			<Header />
			<Hero />
			<Projects />
			<Contact />
		</div>
	);
};

export default page;
