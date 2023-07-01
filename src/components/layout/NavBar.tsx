"use client"
import Link from "next/link"
import Logo from "../views/Logo"
import { usePathname } from "next/navigation"

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
    return(
        <header className="w-full px-16 lg:px-32 py-2 font-medium flex items-center justify-between">
            <Logo />
            <nav className="flex gap-10 md:gap-14">
                <CustomLink href="/" title="Home" className=""/>
                <CustomLink href="/about" title="About" className=""/>
                <CustomLink href="/project" title="Projects" className=""/>
                <CustomLink href="/skills" title="Skills" className=""/>
                <CustomLink href="/contact" title="Contacts" className=""/>
            </nav>
        </header>
    )
}
export default NavBar