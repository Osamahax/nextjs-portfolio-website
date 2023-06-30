import Image from "next/image";
import twitter from "@/components/images/twitter.svg";
import facebook from "@/components/images/facebook.svg";
import linkedin from "@/components/images/linkedin.svg";
import github from "@/components/images/github.svg";
import instagram from "@/components/images/instagram.svg";
import heroImage from "@/components/images/myimg.jpg";

const About = () => {
  return (
    <section className="px-16 lg:px-32 mt-10 ">
      <div className="flex flex-col justify-center items-center text-4xl font-bold">
        About Me
        <span className="mt-2 w-28 h-0.5 bg-green-600 animate-ping"></span>
      </div>
      <div className="mt-20 flex flex-col justify-center items-center lg:flex-row lg:justify-around">
        {/*Img dev */}
        <div className="lg:w-full flex justify-center">
          <Image
            src={heroImage}
            alt="my image"
            className="rounded-full h-44 w-44 md:h-60 md:w-60 lg:rounded-none lg:h-96 lg:w-96 "
          />
        </div>
        {/* Content dev */}
        <div>
          <div className="border-b-2 border-gray-700 pb-6">
            <h4 className="text-green-400 text-lg">Who am i?</h4>
            <h1 className="text-3xl font-bold pt-3">
              I'm Osama Malik, a Web Designer and Web Developer
            </h1>
            <p className="pt-4">
              I am a developer based in the Pakistan and i have been building
              noteworthy UX/UI designs and websites for years, which comply with
              the latest design trends. I help convert a vision and an idea into
              meaningful and useful products. Having a sharp eye for product
              evolution helps me prioritize tasks, iterate fast and deliver
              faster.
            </p>
          </div>
          <div className="mt-4">
            <div className="md:grid md:grid-cols-2 gap-4">
              <h1>
                Name:<span className="text-gray-400 pl-4">Osama Malik</span>
              </h1>
              <h1>
                Email:
                <span className="text-gray-400 pl-4">
                  oosamamalik9@gmail.com
                </span>
              </h1>
              <h1>
                Age:<span className="text-gray-400 pl-4">23</span>
              </h1>
              <h1>
                From:<span className="text-gray-400 pl-4">Pakistan</span>
              </h1>
            </div>
            <div className="flex flex-col  md:flex-row md:items-center mt-4 gap-4">
              <button className="bg-green-700 py-2 px-10 rounded-3xl w-fit">
                Download CV
              </button>
              <div className="flex items-center gap-2">
                <span className="w-10 h-0.5 bg-gray-400"></span>
                <Image src={twitter} alt="twtter" width={24} />
                <Image src={instagram} alt="twtter" width={24} />
                <Image src={linkedin} alt="twtter" width={24} />
                <Image src={github} alt="twtter" width={24} />
                <Image src={facebook} alt="twtter" width={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
