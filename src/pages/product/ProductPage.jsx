import React from "react";
import { DialogX } from "@/components/DialogX";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/Button";

const products = [
  {
    name: "Main and Auxiliary Engines",
    des: "Main and auxiliary engines are the primary power sources for marine vessels. They provide the necessary propulsion and electrical power for various onboard systems. These engines come in various configurations and power capacities to suit different types and sizes of ships.",
    img: "https://plus.unsplash.com/premium_photo-1682144538950-d2595484bc07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hydraulic Pumps and Motors",
    des: "Hydraulic pumps and motors are essential components of hydraulic systems onboard ships. They are used to generate and transmit hydraulic power, which is utilized for various applications such as steering systems, crane operations, and hatch covers.",
    img: "https://images.unsplash.com/photo-1644410576498-676bcee3f5a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Engine Governors (Main and Auxiliary)",
    des: "Engine governors regulate the speed of main and auxiliary engines by controlling the fuel supply. They ensure that the engines operate at optimal speeds, enhancing fuel efficiency and performance. These governors are crucial for maintaining engine stability and preventing overspeeding.",
    img: "https://images.unsplash.com/photo-1542227500-8e8f1d03f876?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Purifiers and Turbochargers",
    des: "Purifiers and turbochargers are vital components of marine engine systems. Purifiers are used for fuel and oil purification, removing impurities and extending the lifespan of engine components. Turbochargers enhance engine performance by increasing the airflow into the combustion chamber, thereby improving fuel combustion and power output.",
    img: "https://images.unsplash.com/photo-1542227500-8e8f1d03f876?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Crankshafts, Hydraulic Gears, and Air Compressors",
    des: "Crankshafts convert the linear motion of pistons into rotational motion, driving the main and auxiliary engines. Hydraulic gears are utilized for power transmission in hydraulic systems, providing smooth and efficient operation. Air compressors are essential for maintaining proper air pressure in pneumatic systems onboard ships.",
    img: "https://images.unsplash.com/photo-1542227500-8e8f1d03f876?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Navigation Equipment and Engine Spare Parts",
    des: "Navigation equipment includes instruments and systems used for safe navigation at sea, such as GPS, radar, and autopilot systems. Engine spare parts are critical for maintaining and repairing main and auxiliary engines, ensuring continuous operation during voyages.",
    img: "https://images.unsplash.com/photo-1597423498323-e7e7554b83c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "IHI Crane (Hydraulic Motors and Pumps)",
    des: "IHI cranes are renowned for their reliability and performance in marine applications. They are equipped with high-quality hydraulic motors and pumps, providing smooth and precise control for cargo handling operations onboard ships.",
    img: "https://images.unsplash.com/photo-1527619617924-8386a8c5afef?q=80&w=2134&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "BOSCH REXROTH, KAYABA, STAFFA, and KAWASAKI STAFFA Hydraulic Motors",
    des: "BOSCH REXROTH, KAYABA, STAFFA, and KAWASAKI STAFFA are leading manufacturers of hydraulic motors known for their durability and efficiency. These motors are widely used in various marine and industrial applications, offering superior performance and reliability.",
    img: "https://images.unsplash.com/photo-1564730465543-e732e7fc9c10?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ProductPage = () => {
  return (
    <div>
      <h2 className="text-center mb-10 heading-style">
        <span>Our</span> <span>Products </span>
      </h2>
      <div className="max-w-screen-2xl mx-auto flex gap-8 flex-wrap justify-center">
        {products.map(({ name, img, des }) => (
          <Card key={name} className="w-80 flex flex-col justify-between relative">
            <img src={img} alt="" className="h-52 object-cover" />
            <CardHeader className="before:content-[''] before:h-14 before:bg-white before:absolute before:w-full before:skew-y-6 before:left-0 before:-translate-y-14">
              <CardTitle className="py-4">{name}</CardTitle>
            </CardHeader>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Details</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] ">
                  <DialogHeader>
                    <DialogTitle>{name}</DialogTitle>
                    <DialogDescription>{des}</DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
