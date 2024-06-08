
const ServiceBanner = () => {
  return (
    <div><div className="relative mb-10">
    <img
      src="https://images.unsplash.com/photo-1530890448995-4d82724f702c?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
      className="h-[500px] w-full object-cover"
    />
    <div className="bg-white shadow-xl absolute -bottom-10 lg:left-28 left-20  p-4 lg:text-3xl text-xl  flex gap-4 font-bold heading-style">
      <span>Get {`"Best Service"`} from</span>
      <span className="">M/S Ocean</span>
    </div>
  </div></div>
  )
}

export default ServiceBanner