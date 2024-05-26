import { useFormContext } from "react-hook-form";
import { carTypes } from "../../config/car-options";
import { CarFormData } from "./MenageCarForm";

const TypeSection = () => {
  const { register, watch, formState: {errors}, } = useFormContext<CarFormData>();
  const typeWatch= watch("type");

  return(
    <div>
      <h2 className="text-2xl font-bold mb-3">Tipo</h2>
      <div className="grid grid-cols-3 gap-3">
        {carTypes.map((type)=> (
          <label className={
            typeWatch == type 
            ? "cursor-pointer bg-amber-500 text-sm rounded-full px-4 py-2 font-semibold" 
            : "cursor-pointer bg-gray-300 text-sm rounded-full px-4 py-2 font-semibold"
          }>
            <input 
              type="radio" value={type}
              {...register("type", {
                required: "Questo campo è obbligatorio",
              })}
              className="hidden"
            />
            {type}
          </label>
        ))}
      </div>
      {errors.type && (
        <span className="text-red-500 text-sm font-bold"> {errors.type.message}</span>
      )}
    </div>
  );
};

export default TypeSection;