import { TypeAnimation } from "react-type-animation"

const Mainheading =()=>{
    return(
        <>
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
        </>
    )
}
export default Mainheading