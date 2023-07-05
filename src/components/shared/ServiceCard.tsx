import Image,{StaticImageData} from "next/image"
import apiImg from "@/components/images/api-tester.svg"
interface data{
    title:string,
    img:StaticImageData,
    description:string
}
const ServiceCard=({title,img,description}:data)=>{
    return(
        <div className="relative h-96 w-96 lg:w-11/12 border-2 flex flex-col items-center gap-4 border-white p-4 rounded-3xl rounded-b-3xl border-r-[16px] border-b-[16px] shadow-green-400 shadow-2xl hover:shadow-white">
                    <Image src={img} alt="fashion img website" className="rounded-lg w-28" />
                    <div className="flex flex-col gap-2 mt-2 px-[5%] text-center box-border">
                        <h1 className="text-2xl text-center text-green-400 font-bold ">{title}</h1>
                        <p className="text-lg">{description}</p>
                    </div>
                </div>
    )
}
export default ServiceCard