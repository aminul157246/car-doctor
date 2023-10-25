import { useEffect, useState } from "react";
import ServicesCard from "../ServicesCard/ServicesCard";

const Services = () => {


    const [services, setServices] = useState([])
    
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    })





    return (
        <div className="my-12">
           <div className="space-y-5 text-center ">
           <p className="text-[#FF3811]  font-bold text-2xl">services</p>
            <h2 className="text-4xl font-bold ">Our Service Area</h2>
            <p className="">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {
                services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
            }
           </div>
        </div>
    );
};

export default Services;