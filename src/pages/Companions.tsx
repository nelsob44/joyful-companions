import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";

const Companions = () => {
  const { companions } = useContext(AppContext);
  const navigate = useNavigate();
  const { location } = useParams();
  const [filteredCompanions, setFilteredCompanions] = useState([]);

  const applyFilter = () => {
    if (location) {
      setFilteredCompanions(
        companions.filter(
          (companion) =>
            companion.location.toLowerCase() === location.toLowerCase(),
        ),
      );
    } else {
      setFilteredCompanions(companions);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [location, companions]);

  return (
    <div>
      <p className="text-gray-600">
        Browse through our companions in the {location} area
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p
            onClick={() =>
              location === "Newcastle upon Tyne"
                ? navigate("/companions")
                : navigate("/companions/Newcastle upon Tyne")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all sursor-pointer`}
          >
            Newcastle upon Tyne
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all sursor-pointer`}
          >
            Gateshead
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all sursor-pointer`}
          >
            Sunderland
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all sursor-pointer`}
          >
            Durham
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all sursor-pointer`}
          >
            South Shields
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all sursor-pointer`}
          >
            Tynemouth
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filteredCompanions.map((companion, index) => (
            <div
              onClick={() => navigate(`/appointment/${companion._id}`)}
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
                <p className="text-gray-600 text-sm">{companion.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companions;
