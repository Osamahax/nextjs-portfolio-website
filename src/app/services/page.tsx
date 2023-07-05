"use client"
import Heading from "@/components/shared/Heading";
import ServiceCard from "@/components/shared/ServiceCard";
import serviceData from "./servicedata"
import TransitionEffect from "@/components/views/TransitionEffect";
const Services = () => {
  return (
    <section className="px-16 lg:px-32 my-10 md:my-20">
      <TransitionEffect />
      <h1 className="text-center text-gray-400">Services i offer</h1>
      <Heading title="My Services" />
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {
          serviceData.map((item)=>{
            return(
              <ServiceCard key={item.id} title={item.title} img={item.img} description={item.description}/>
            )
          })
        }
      </div>
    </section>
  );
};
export default Services;
