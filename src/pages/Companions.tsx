import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import type { Companion } from "../types";

const Companions = () => {
  const appContext = useContext(AppContext);
  const navigate = useNavigate();
  const { location } = useParams();

  // AppContext is null outside <AppContextProvider>; this check narrows its type.
  if (!appContext) {
    throw new Error("Companions must be rendered inside <AppContextProvider>.");
  }
  const companions: Companion[] = appContext.companions;

  // const [filterCompanions, setFilterCompanions] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  // Derived from the URL and context on each render, so no state or effect is needed.
  const filteredCompanions: Companion[] = location
    ? companions.filter(
        (companion: Companion) =>
          companion.location.toLowerCase() === location.toLowerCase(),
      )
    : companions;

  return (
    <div>
      <p className="text-gray-600">
        Browse through our companions in the {location} area
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? "bg-primary text-white" : ""}`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filters
        </button>
        <div
          className={`flex flex-col gap-4 text-sm text-gray-600 ${showFilter ? "flex" : "hidden sm:flex"}`}
        >
          <button
            type="button"
            onClick={() => navigate("/companions/Newcastle upon Tyne")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer text-left ${location === "Newcastle upon Tyne" ? "bg-indigo-100 text-black" : ""}`}
          >
            Newcastle upon Tyne
          </button>
          <button
            type="button"
            onClick={() => navigate("/companions/Gateshead")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer text-left ${location === "Gateshead" ? "bg-indigo-100 text-black" : ""}`}
          >
            Gateshead
          </button>
          <button
            type="button"
            onClick={() => navigate("/companions/Sunderland")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer text-left ${location === "Sunderland" ? "bg-indigo-100 text-black" : ""}`}
          >
            Sunderland
          </button>
          <button
            type="button"
            onClick={() => navigate("/companions/Durham")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer text-left ${location === "Durham" ? "bg-indigo-100 text-black" : ""}`}
          >
            Durham
          </button>
          <button
            type="button"
            onClick={() => navigate("/companions/South Shields")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer text-left ${location === "South Shields" ? "bg-indigo-100 text-black" : ""}`}
          >
            South Shields
          </button>
          <button
            type="button"
            onClick={() => navigate("/companions/Tynemouth")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer text-left ${location === "Tynemouth" ? "bg-indigo-100 text-black" : ""}`}
          >
            Tynemouth
          </button>
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
                <p className="text-gray-600 text-sm">{companion.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companions;
