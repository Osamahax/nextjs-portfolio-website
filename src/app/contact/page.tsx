import Button from "@/components/shared/Button";
import Heading from "@/components/shared/Heading";
import nameImg from "@/components/images/ionic.svg";
import mapImg from "@/components/images/map.svg";
import callImg from "@/components/images/call.svg";
import mailImg from "@/components/images/mail.svg";
import Image from "next/image";
import TransitionEffect from "@/components/views/TransitionEffect";

const Contact = () => {
  return (
    <section className="px-16 lg:px-32 py-20">
      <TransitionEffect />
      <h1 className="text-center text-gray-400">Feel free to contact me anytimes</h1>
      <Heading title="Get in Touch" />
      <div className="mt-20 flex flex-col gap-6 lg:flex-row md:gap-10 justify-center">
        <div className="flex flex-col gap-6 text-lg lg:w-1/2">
          <h1 className="text-2xl font-semibold">Message Me</h1>
          <div className="flex flex-col gap-6 md:flex-row">
            <input
              type="text"
              placeholder="Name"
              className="bg-gray-900 py-2 px-3 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-900 py-2 px-3 w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="bg-gray-900 py-2 px-3"
          />
          <textarea
            name="Message"
            id="message"
            rows={5}
            placeholder="Message"
            className="bg-gray-900 py-1 px-3"
          ></textarea>
          <Button title="Send Message" />
        </div>
        {/*Contact Section */}
        <div className="lg:w-1/3">
          <h1 className="text-2xl font-semibold">Contact Info</h1>
          <p className="text-gray-500 mt-4">
            Always available for freelance work if the right project comes
            along, Feel free to contact me!
          </p>
          <div className="relative flex flex-col gap-4 mt-8">
            <div className="flex items-center gap-10">
              <Image src={nameImg} alt="name" width={36}/>
              <div>
                <h1>Name</h1>
                <h4 className="text-gray-500 text-sm">Osama Malik</h4>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <Image src={mapImg} alt="name" width={36}/>
              <div>
                <h1>Location</h1>
                <h4 className="text-gray-500 text-sm">Phase 1, Hayatabad, Peshawar, Pakistan</h4>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <Image src={callImg} alt="name" width={36}/>
              <div>
                <h1>Call Me</h1>
                <h4 className="text-gray-500 text-sm">+923315005321</h4>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <Image src={mailImg} alt="name" width={36}/>
              <div>
                <h1>Email</h1>
                <h4 className="text-gray-500 text-sm"><a href="mailto:oosamamalik9@gmail.com">oosamamalik9@gmail.com</a></h4>
              </div>
            </div>
          <div className="absolute w-0.5 h-56 bg-green-400 top-1 left-14"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
