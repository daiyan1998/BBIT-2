import { MdConstruction } from "react-icons/md";
import { GiCargoShip } from "react-icons/gi";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiCargoCrane } from "react-icons/gi";

const RepairCost = () => {
  const costCards = [
    {
      id: 1,
      cardIcon: <MdConstruction className="scale-[2] w-10 text-primary" />,
      title: "Repair Type",
      message:
        "Hull repairs are typically the most expensive due to the size and complexity of the area involved. Engine and electrical repairs can also be significant depending on the extent of the damage.",
    },
    {
      id: 2,
      cardIcon: <GiCargoShip className="scale-[2] w-10 text-primary" />,
      title: "Vessel Size",
      message:
        "Larger vessels typically require more materials and labor, impacting the overall cost",
    },
    {
      id: 3,
      cardIcon: <FaMapLocationDot className="scale-[2] w-10 text-primary" />,
      title: "Repair Location",
      message:
        "Remote locations may incur higher costs due to transportation of parts and personnel.",
    },
    {
      id: 4,
      cardIcon: <GiCargoCrane className="scale-[2] w-10 text-primary" />,
      title: "Parts & Labor Availability",
      message:
        "Readily available parts and skilled labor help keep costs under control.",
    },
  ];
  return (
    <div className="mt-5">
      <div className="space-y-12 my-5">
        <h4 className="text-center text-2xl text-black font-bold mt-10">
          Understanding Ship Repair Costs
        </h4>
        <p className="md:max-w-[60%] mx-auto text-center mt-0">
          The cost of repairs can vary depending on several factors
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between justify-items-center gap-8">
          {costCards?.map((costCard) => (
            <>
              <div
                className="max-w-96 flex gap-2.5 p-5 shadow-md relative bg-cover bg-right-bottom
            rounded-xl
            "
                style={{
                  backgroundImage: `url("https://images.pexels.com/photos/20068556/pexels-photo-20068556/free-photo-of-model-of-ship.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
                }}
              >
                <div className="w-[90%] h-[80%] absolute top-[10%] left-[5%] bg-white/50 backdrop-blur-md rounded-md p-2"></div>
                <div className="scale-150 flex items-center justify-center p-2.5">
                  {/* <img src={cardIcon} alt={`${title} icon`} /> */}
                  {costCard.cardIcon}
                </div>
                <div className="space-y-2.5 z-50 text-white">
                  <h4 className="font-semibold">
                    {costCard.title || "Type of Repair"}
                  </h4>
                  <p className="text-sm">
                    {costCard.message ||
                      "The complexity of the repairs needed will naturally affect the cost"}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepairCost;
