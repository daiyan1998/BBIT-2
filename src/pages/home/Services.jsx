import ServiceCard from "@/components/shared/ServiceCard";
import Hr from "@/components/ui/Hr";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

const servicesDes = [
  {
    title: "ENGINE REPAIR",
    img: "https://images.unsplash.com/photo-1708796556749-07194e1507bf?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D",
    desc: "Get your ship's engine back to peak performance with our expert repairs and maintenance.",
  },
  {
    title: "CRANE REPAIR",
    img: "https://images.unsplash.com/photo-1582635081932-3406d309f746?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D",
    desc: "Ensure safe and efficient cargo handling with our comprehensive crane repair services.",
  },
  {
    title: "DECK REPAIR",
    img: "https://images.unsplash.com/photo-1709631877820-e96b84bc3cf5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D",
    desc: "Restore your ship's deck to optimal condition with our professional repair and maintenance expertise.",
  },
];

const Services = () => {
  return (
    <div className="py-20">
      <h2 className="text-center">
        <span>Explore</span>
        <span className="text-primary ml-3">Our Services</span>
      </h2>
      <Hr />
      <div className="flex flex-wrap gap-6 justify-center pt-10 px-4">
        {servicesDes.map((service) => (
          <ServiceCard {...service} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/services">
          <Button>View All Services</Button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
