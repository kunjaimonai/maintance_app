import { motion } from "framer-motion";
import React from "react";

const team = [
  {
    name: "V S Yadu Krishnan",
    role: "Lead",
    image: "/images/yadu.png", // replace with your real image paths
  },
  {
    name: "R B Ravish",
    role: "Co-Lead",
    image: "/images/ravish.jpg",
  },
  {
    name: "Yeldo K Varghese",
    role: "Member",
    image: "/images/yeldo.png",
  },
  {
    name: "Sana Kuriakose",
    role: "Member",
    image: "/images/sana.jpg",
  },
];

const TeamCards = () => {
  return (
    <div
      className="min-h-screen px-8 py-20 flex justify-center items-center"
      style={{ backgroundColor: "#080B26" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl w-full">
        {team.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative rounded-2xl overflow-hidden group transition-all duration-300 shadow-lg"
            style={{
              background:
                "linear-gradient(180deg, #05082B 30%, #05082B 42%, #484D9D 83%, #8B8FF3 100%)",
              boxShadow: "0 0 40px rgba(139, 143, 243, 0.15)",
            }}
          >
            <div className="w-full h-[360px] overflow-hidden flex justify-center items-start">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-in-out"
                style={{ objectPosition: "top center" }}
              />
            </div>
            <div className="absolute bottom-4 left-4">
              <h3
                className="text-lg font-semibold"
                style={{
                  color: "#ffffff",
                  textShadow: "0 0 8px #6e76aa, 0 0 12px #838caf",
                }}
              >
                {member.name}
              </h3>
              <p
                className="text-sm"
                style={{
                  color: "#C4CCFF",
                  textShadow: "0 0 6px #6e76aa",
                }}
              >
                {member.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamCards;
