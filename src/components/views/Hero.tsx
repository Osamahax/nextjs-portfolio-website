"use client";
import Image from "next/image";
import heroImg from "../images/hat_tie.jpeg";
import twitter from "../images/twitter.svg";
import facebook from "../images/facebook.svg";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import instagram from "../images/instagram.svg";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="w-full pt-20 lg:pt-0">
      <div className="">
        <div className=" hidden md:block">
          <Image src={heroImg} alt="" className="bg-cover pt-20 lg:pt-0" />
        </div>
        <div className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-6xl font-semibold">Osama Malik</h1>
          <h4 className="mt-4 text-2xl">I’m a <span className="border-b-2 border-green-400 text-green-400">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                " Developer",
                1200, // wait 1s before replacing "Developer" with "Designer"
                " Designer",
                1200,
                " Freelancer",
                1200,
              ]}
              wrapper="span"
              speed={20}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            /></span>
          </h4>
        </div>
      </div>
      <div className="absolute bottom-4 px-16 lg:px-32 flex flex-col gap-4">
        <motion.a
          href="https://twitter.com"
          target="_blank"
          whileHover={{ scale: 1.5 }}
        >
          <Image src={twitter} alt="twtter" width={24} />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          target="_blank"
          whileHover={{ scale: 1.5 }}
        >
          <Image src={facebook} alt="facebook" width={24} />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          target="_blank"
          whileHover={{ scale: 1.5 }}
        >
          <Image src={linkedin} alt="linkedin" width={24} />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          target="_blank"
          whileHover={{ scale: 1.5 }}
        >
          <Image src={github} alt="github" width={24} />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          target="_blank"
          whileHover={{ scale: 1.5 }}
        >
          <Image src={instagram} alt="instagram" width={24} />
        </motion.a>
      </div>
    </section>
  );
};
export default Hero;
