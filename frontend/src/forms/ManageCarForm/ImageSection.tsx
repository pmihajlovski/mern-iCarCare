import { useFormContext } from "react-hook-form"
import { CarFormData } from "./MenageCarForm"

const ImagesSection = () => {
  const { register, formState: { errors }}= useFormContext<CarFormData>();

  return(
    <div>
      <h2 className="text-2xl font-bold mb-3">Immagini</h2>
      <div className="border rounded p-4 flex flex-col gap-4">
        <input type="file" 
        multiple
        accept="image/*"
        className="w-full text-gray-700 font-normal"
        {...register("imageFiles",{
          validate: (imageFiles)=>{
            const totalLength = imageFiles.length;
            
            if(totalLength === 0)
              return "Almeno un immagine deve essere aggiunta";

            if(totalLength > 6)
              return "Non puoi inserire più di 6 immagini";
          }
        })}/>
      </div>
      {errors.imageFiles && (
        <span className="text-red-500 text-sm font-bold">
          {errors.imageFiles.message}
        </span>
      )}
    </div>
  );
};

export default ImagesSection;