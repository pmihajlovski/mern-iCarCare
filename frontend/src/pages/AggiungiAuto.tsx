import { useMutation } from "react-query";
import ManageCarForm from "../forms/ManageCarForm/MenageCarForm";
import { useAppContext } from "../contexts/AppContext";
import * as apiClient from "../api-client";

const AddCar = () => {
  const {showToast} = useAppContext();

  const { mutate, isLoading } = useMutation(apiClient.addMyCar, {
    onSuccess: ()=>{
      showToast({ message: "Auto Salvata!", type: "SUCCESS"})
    },
    onError: () =>{
      showToast({ message: "Errore nel salvataggio", type: "ERROR"})
    },
  });

  const handleSave = (carFormData: FormData)=>{
    mutate(carFormData)
  };

  return <ManageCarForm onSave={handleSave} isLoading = {isLoading}/>;
}

export default AddCar;