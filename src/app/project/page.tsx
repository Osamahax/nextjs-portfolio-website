import Heading from "@/components/shared/Heading"
import cardData from "./data";
import ProjectCard from "@/components/shared/ProjectCard";

const Project =()=>{
    return(
        <section className="px-16 lg:px-32 py-20">
            <h1 className="text-center text-gray-400">Showcasing some of my best work</h1>
            <Heading title="Projects" />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    cardData.map((items)=>{
                        return(
                            <ProjectCard key={items.id} title={items.title} img={items.img} iconImg={items.iconImg} webLink={items.webLink}/>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default Project