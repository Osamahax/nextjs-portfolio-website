import { motion } from "framer-motion"
import twitter from "@/components/images/twitter.svg"
import facebook from "@/components/images/facebook.svg";
import linkedin from "@/components/images/linkedin.svg";
import github from "@/components/images/github.svg";
import instagram from "@/components/images/instagram.svg";
import Image from "next/image"
const LogoSection =()=>{
    return(
        <div className="flex flex-col gap-4">
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
    )
}
export default LogoSection