import { useFormContext } from "react-hook-form"
import { CarFormData } from "./MenageCarForm";

const DetailsSection = () => {
  const { register, formState: { errors } } = useFormContext<CarFormData>();

  return(
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold mb-3">Aggiungi La Tua Auto</h1>
      <div className="flex gap-4">
        <label className="text-gray-700 text-sm font-bold flex-1">
          Marca
          <input 
            type="text"
            className="border rounded w-full py-1 px-2 font-normal" {...register("brand", {required: "Questo campo è obbligatorio"})}
            />
            {errors.brand && (
            <span className="text-red-500">{errors.brand.message}</span>
            )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Modello
          <input 
            type="text"
            className="border rounded w-full py-1 px-2 font-normal" {...register("model", {required: "Questo campo è obbligatorio"})}
            />
            {errors.model && (
            <span className="text-red-500">{errors.model.message}</span>
            )}
        </label>
      </div>
      <div className="flex gap-4">
      <label className="text-gray-700 text-sm font-bold flex-1">
          Città
          <input 
            type="text"
            className="border rounded w-full py-1 px-2 font-normal" {...register("city", {required: "Questo campo è obbligatorio"})}
            />
            {errors.city && (
            <span className="text-red-500">{errors.city.message}</span>
            )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Anno
          <input 
            type="number"
            className="border rounded w-full py-1 px-2 font-normal" {...register("anno", {required: "Questo campo è obbligatorio"})}
            />
            {errors.anno && (
            <span className="text-red-500">{errors.anno.message}</span>
            )}
        </label>
      </div>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Targa
        <input 
          type="text"
          className="border rounded w-full py-1 px-2 font-normal" {...register("targa", {required: "Questo campo è obbligatorio"})}
          />
          {errors.targa && (
          <span className="text-red-500">{errors.targa.message}</span>
          )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Descrizione
        <textarea 
          rows={10}
          className="border rounded w-full py-1 px-2 font-normal" {...register("description", {required: "Questo campo è obbligatorio"})}
          />
          {errors.description && (
          <span className="text-red-500">{errors.description.message}</span>
          )}
      </label>
    </div>
  );
};

export default DetailsSection;
