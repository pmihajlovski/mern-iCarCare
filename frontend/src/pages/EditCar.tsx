import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../api-client";
import ManageCarForm from "../forms/ManageCarForm/MenageCarForm";
import { useAppContext } from "../contexts/AppContext";

const EditCar = () => {
  const { carId } = useParams();
  const { showToast } = useAppContext();

  const { data: car } = useQuery("fetchMyCarById", 
    ()=> apiClient.fetchMyCarById(carId || ""), 
    {
      enabled: !!carId,//query will run only if we have a car id
    }
  );
  
  const { mutate, isLoading } = useMutation(apiClient.updateMyCarById, {
    onSuccess: () => {
      showToast({ message: "Macchina Salavata", type: "SUCCESS" });
    },
    onError: () => {
      showToast({ message: "Errore", type: "ERROR" });
    },
  });

  const handleSave = (carFormData: FormData) => {
    mutate(carFormData);
  };

  return (
  <ManageCarForm car={car} onSave={handleSave} isLoading={isLoading} />
  );
};

export default EditCar;