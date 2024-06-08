import React, { useEffect } from "react";
import ServiceBanner from "./ServiceBanner";
import ServicePageTopBanner from "./ServicePageTopBanner";
import ShipRepairSolution from "./ShipRepairSolution";
import ServicePageChoose from "./ServicePageChoose";
import { useLocation } from "react-router-dom";
import Cta from "@/components/shared/Cta";

const ServiceDetailsPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ServiceBanner />
      <ServicePageTopBanner />
      <ShipRepairSolution />
      <ServicePageChoose />
      <Cta />
    </>
  );
};

export default ServiceDetailsPage;
