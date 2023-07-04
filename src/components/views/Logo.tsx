"use client"
import Link from "next/link"
import { motion } from "framer-motion"
const MotionLink=motion(Link);
const Logo =()=>{
    return(
        <div className="flex items-center justify-center mt-2">
            <MotionLink href="/" className="w-16 h-16 border-2 bg-black border-green-500 text-green-500 text-light flex items-center justify-center rounded-full text-2xl font-bold"
            whileHover={{
                backgroundColor:["#0000","#0a0a0a", "#833ab4","#f50505","#050df5","#050df5", "#121212"],
                transition:{duration:0.5,repeat:Infinity}
            }}
            >
                OM</MotionLink>
        </div>
    )
}
export default Logo