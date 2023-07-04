import Image, { StaticImageData } from "next/image"
 interface data {
    title:string,
    img:StaticImageData,
    iconImg:StaticImageData,
    webLink:string
}

const ProjectCard =({title,img,iconImg,webLink}:data)=>{
    return(
        <div className="relative border-2 border-white p-4 w-fit rounded-3xl rounded-b-3xl border-r-[16px] border-b-[16px]">
                    <Image src={img} alt="fashion img website" className="rounded-lg" />
                    <div className="flex flex-col gap-2 mt-2">
                        <h1 className="text-green-400 text-xl">Website</h1>
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <div className="flex justify-between items-center">
                            <a href={webLink} target="_blank" rel="noopener noreferrer" className="underline">Visit</a>
                            <Image src={iconImg} alt="github" width={40} />
                        </div>
                    </div>
                </div>
    )
}
export default ProjectCard