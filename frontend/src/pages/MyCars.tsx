import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from "../api-client";

const MyCars = () => {
  const { data: carData } = useQuery("fetchMyCars", apiClient.fetchMyCars, {
    onError: ()=>{

    },
  });

  if(!carData){
    return <span> Neessuna auto trovata</span>;
  }

  return(
    <div className= "space-y-5">
      <span className="flex justify-between">
        <h1 className="text-[#ffaa00] text-3xl font-bold">Le Mie Auto</h1>
        <Link to="/add-car" className="flex text-[#ffaa00]   bg-slate-900 text-amber-500 text-xl font-bold p-2 hover:bg-amber-800">Aggiungi Auto</Link>
      </span>
      <div className="gird grid-cols-1 gap-8">
        {carData.map((car)=>(
          <div className="flex flex-col justify-between  rounded-lg p-8 gap-5">
            <h2 className="text-[#ffaa00] text-2xl font-bold">{car.brand}</h2>
            <div className="text-[#ffaa00] mix-blend-color-dodge whitespace-pre-line">{car.description}</div>
            <img src={car.imageFiles[0]} className="max-w-xs "/>
            <div className="grid grid-cols-3 gap-2">
              <div className="border border-slate-300 rounded-sm p-3 flex items-center text-[#ffaa00] ">
                {car.model}
              </div>
              <div className="border border-slate-300 text-[#ffaa00] rounded-sm p-3 flex items-center">
                {car.anno} 
              </div>
              <div className="border border-slate-300 rounded-sm p-3 flex items-center
              text-[#ffaa00] ">
                {car.type}
              </div>
            </div>
            <span className="flex justify-end">
              <Link to={`/edit-car/${car._id}`} className="flex bg-slate-900 text-amber-500 text-xl font-bold p-2 hover:bg-amber-800">
                Dettagli
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCars;