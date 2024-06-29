import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import memberData from "@/data/teamMember.json";
import PropTypes from "prop-types";

const MemberCard = ({ name, description, department, experience_years }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-solid border-[#636262] p-4 [box-shadow:rgb(0,_0,_0)_6px_6px]">
      <img
        src="https://images.unsplash.com/photo-1613181013804-1dcba09e6a9d?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="mb-4 inline-block h-56 w-full rounded-xl object-cover lg:h-56"
      />
      <p className="mb-2 font-bold">{name}</p>
      <p className="mb-2 text-sm text-[#636262]">{department}</p>
      <div className="mt-4 flex flex-wrap">
        <div className="p-3 bg-primary-light rounded-full m-1 text-primary">
          <FaFacebook className="text-xl" />
        </div>
        <div className="p-3 bg-primary-light rounded-full m-1 text-primary">
          <FaLinkedin className="text-xl" />
        </div>
        <div className="p-3 bg-primary-light rounded-full m-1 text-primary">
          <FaTwitter className="text-xl" />
        </div>
      </div>
    </div>
  );
};

const TeamMember = () => {
  console.log(memberData);
  return (
    <div className="py-20 max-w-screen-xl mx-auto ">
      <h2 className="text-center heading-style flex gap-4 justify-center">
        <span>Team</span>
        <span>Members</span>
      </h2>
      <p className="text-center w-1/2 mx-auto py-4 text-slate-500">
        A client that's unhappy for a reason is a problem, a client that's
        unhappy though he or her can't quite images too large for the proposed
        put a finger on it is worse.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {memberData.map((data) => (
          <MemberCard {...data} />
        ))}
      </div>
    </div>
  );
};

MemberCard.propTypes = {
  name: PropTypes.string,
  department: PropTypes.string,
  experience_years: PropTypes.number,
  description: PropTypes.string,
};

export default TeamMember;
