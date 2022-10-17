import { BiCheck } from "react-icons/bi";
import { ServicesCard } from "./ServicesCard";
import { servicesData } from "@/utils/service";
import "./Services.css";

export const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* STARTING POINT OF THE CARDS */}

        {servicesData.map((service, index) => (
          <ServicesCard key={index} service={service} />
        ))}

        {/* END OF THE SERVICE CARDS */}
      </div>
    </section>
  );
};
