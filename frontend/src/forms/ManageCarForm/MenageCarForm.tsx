import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import TypeSection from "./TypeSection";
import ImagesSection from "./ImageSection";

export type CarFormData ={
  _id: string;
  userId: string;
  city: string;
  brand: string;
  model: string;
  description: string;
  type: string;
  imageFiles: FileList;
  targa: string;
  anno: number;
}

type Props = {
  onSave: (carFormData: FormData)=> void;
  isLoading: boolean;
}

const ManageCarForm = ({onSave, isLoading}: Props) => {
  const formMethods = useForm<CarFormData>();
  const { handleSubmit } = formMethods;

  const onSubmit = handleSubmit((formDataJson: CarFormData) => {
    // create new formdata object anc call the api
    const formData = new FormData();
    formData.append("brand", formDataJson.brand);
    formData.append("model", formDataJson.model);
    formData.append("city", formDataJson.city);
    formData.append("description", formDataJson.description);
    formData.append("type", formDataJson.type);
    formData.append("anno", formDataJson.anno.toString());
    formData.append("targa", formDataJson.targa);

    Array.from(formDataJson.imageFiles).forEach((imageFile)=>{
      formData.append(`imageFiles`, imageFile);
    });

    onSave(formData);
  });

  return (
    <FormProvider {...formMethods}>
      <form className="flex flex-col gap-10" onSubmit={onSubmit}>
        <DetailsSection/>
        <TypeSection/>
        <ImagesSection/>
        <span className="flex justify-end">
          <button 
            disabled={isLoading}//Reduce request and make impossibile to click while loading
            type="submit" 
            className="bg-slate-900 text-amber-500 p-2 font-bold hover:bg-amber-800 text-xl disabled:bg-gray-500">
            {isLoading? "Salvando..." : "Salva"}
          </button>
        </span>
      </form>
    </FormProvider>
  );
};

export default ManageCarForm;