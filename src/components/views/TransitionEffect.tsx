"use client"
import { motion } from "framer-motion"
const TransitionEffect=()=>{
    return(
        <>
            <motion.div className="fixed top-2 bottom-0 right-full w-screen h-screen z-30 bg-green-400"
            initial={{x:"100%",width:"100%"}}
            animate={{x:"0%",width:"0%"}}
            exit={{ x: ["0%","100%"], width: ["0%","100%"] }}
            transition={{duration:0.8,ease:"easeInOut"}}
            >
            </motion.div>
            <motion.div className="fixed top-2 bottom-0 right-full w-screen h-screen z-20 bg-black"
            initial={{x:"100%",width:"100%"}}
            animate={{x:"0%",width:"0%"}}
            transition={{delay:0.2,duration:0.8,ease:"easeInOut"}}
            >
            </motion.div>
            <motion.div className="fixed top-2 bottom-0 right-full w-screen h-screen z-10 bg-white"
            initial={{x:"100%",width:"100%"}}
            animate={{x:"0%",width:"0%"}}
            transition={{delay:0.4,duration:0.8,ease:"easeInOut"}}
            >
            </motion.div>
        </>
    )
}
export default TransitionEffect