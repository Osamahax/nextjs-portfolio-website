"use client";
import Image from "next/image";
import heroImg from "../images/hat_tie.jpeg";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import LogoSection from "./LogoSection";
import hiremeImg from "@/components/images/logo2.svg"
import Mainheading from "./MainHeading";

const Hero = () => {
  return (
    <section className="px-16 lg:px-32">
      <div className=" bg-red-500">
        <div className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Mainheading />
        </div>
        <Image src={heroImg} alt="" className="" />
      </div>
      {/* social icons */}
      <div className="absolute bottom-8">
          <LogoSection />
        </div>
      <div className="absolute flex items-center bottom-16 right-20 bg-red-500">
        {/* HireMe Logo */}
        <div className="flex justify-center items-center px-16 lg:px-32 bg-slate-600">
          <div className="w-20 h-20 rounded-full bg-white relative text-black text-center font-bold py-7 ">Hire ME</div>
          <Image src={hiremeImg} alt="" width={140} className="absolute animate-spin-slow"/>
        </div>
      </div>
    </section>
  );
};
export default Hero;
