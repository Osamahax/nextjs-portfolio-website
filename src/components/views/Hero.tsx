"use client";
import Image from "next/image";
import LogoSection from "./LogoSection";
import hiremeImg from "@/components/images/logo2.svg"
import Mainheading from "./MainHeading";
import Particlesbackground from "../shared/Particlesbackground";
import heroImg1 from "@/components/images/developer3.png";

const Hero = () => {
  return (
    <section className="px-16 lg:px-32">
      <div className="">
        <div className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Mainheading />
        </div>
        <Image src={heroImg1} alt="" className="hidden md:block absolute top-40 left-0 -z-20 w-1/2 bg-transparent" />
      </div>
      {/* social icons */}
      <div className="absolute bottom-8">
          <LogoSection />
        </div>
      <div className="absolute z-10 flex items-center bottom-16 right-20">
        {/* HireMe Logo */}
        <div className="flex justify-center items-center px-16 lg:px-32 hover:text-white">
          <a href="mailto:oosamamalik9@gmail.com">
            <div className="w-20 h-20 rounded-full bg-white relative text-black text-center font-bold flex items-center justify-center cursor-pointer hover:text-white hover:bg-black hover:border-white hover:border-2">
            Hire Me
            </div>
          </a>
          <Image src={hiremeImg} alt="" width={140} className="absolute animate-spin-slow -z-10"/>
        </div>
      </div>
      <div className="absolute bottom-36 -z-20">
      <Particlesbackground />
      </div>
    </section>
  );
};
export default Hero;
