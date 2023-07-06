"use client"
import Link from "next/link"
import Logo from "../views/Logo"
import { usePathname } from "next/navigation"
import menuImg from "@/components/images/round-menu.svg"
import closeImg from "@/components/images/close.svg"
import Image from "next/image"
import { useState } from "react"
const CustomLink=({href="",title="",className=""})=>{
    const pathname=usePathname();
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-0.5 inline-block bg-green-600 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${pathname===href ? "w-full" : "w-0"}`}>&nbsp;</span>
        </Link>
    )
}
const NavBar =()=>{
    const [isOpen,setIsOpen] = useState(false)
    const menuFunction=()=>{
        setIsOpen(!isOpen)
    }
    return(
        <header className="w-full px-16 lg:px-32 py-2 font-medium flex items-center justify-between">
            <Logo />
            <div className="hidden md:block">
                <nav className="flex gap-10 md:gap-14">
                    <CustomLink href="/" title="Home" className=""/>
                    <CustomLink href="/about" title="About" className=""/>
                    <CustomLink href="/project" title="Projects" className=""/>
                    <CustomLink href="/services" title="Services" className=""/>
                    <CustomLink href="/contact" title="Contacts" className=""/>
                </nav>
            </div>
            {isOpen && <div className="bg-black absolute top-0 right-0 z-20  transform w-96 h-screen duration-1000 ease-in md:hidden">
                <div className="absolute top-24 left-10 w-full">
                    <nav className="flex flex-col  gap-6 text-xl w-10/12">
                        <CustomLink href="/" title="Home" className=""/>
                        <CustomLink href="/about" title="About" className=""/>
                        <CustomLink href="/project" title="Projects" className=""/>
                        <CustomLink href="/services" title="Services" className=""/>
                        <CustomLink href="/contact" title="Contacts" className=""/>
                    </nav>
                </div>
            </div>

            }
            <div className="block md:hidden">
                {
                    !isOpen ?   <div className="absolute top-6 right-14 z-40 bg-green-400 py-2 px-2 rounded-full">
                                    <Image onClick={menuFunction} src={menuImg} alt="menu icon" width={26} 
                                        className="" 
                                    />
                                </div>
                    :   
                                <div className="absolute top-6 right-14 z-40 bg-green-400 py-2 px-2 rounded-full">
                                <Image onClick={menuFunction} src={closeImg} alt="menu icon" width={26} 
                                    className="" 
                                />
                </div>
                }
            </div>
        </header>
    )
}
export default NavBar