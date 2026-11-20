import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

type RelatedCompanionsProps = {
  companionId: string;
  location: string;
};

const RelatedCompanions = ({
  companionId,
  location,
}: RelatedCompanionsProps) => {
  const { companions } = useContext(AppContext);
  const [relCompanions, setRelCompanions] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (companions.length > 0 && location) {
      const companionsData = companions.filter(
        (comp) => comp.location === location && comp._id !== companionId,
      );
      setRelCompanions(companionsData);
    }
  }, [companions, location, companionId]);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Companions to Book</h1>
      <p className="text-center text-sm sm:w-1/3">
        Simply browse through our list of trusted Companions.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {relCompanions.slice(0, 5).map((companion, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${companion._id}`);
              scrollTo(0, 0);
            }}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index}
          >
            <img
              className="bg-blue-50"
              src={companion.image}
              alt={companion.name}
            />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">
                {companion.name}
              </p>
              <p className="text-gray-600 text-sm">{companion.location}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/companions");
          scrollTo(0, 0);
        }}
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
      >
        more
      </button>
    </div>
  );
};

export default RelatedCompanions;
