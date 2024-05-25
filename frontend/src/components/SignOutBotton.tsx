import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";

const SignOutButton = ()=> {
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();
  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async ()=> {
      //show toast
      await queryClient.invalidateQueries("validateToken");//force the validate function to run again
      showToast({message: "Signed Out", type: "SUCCESS"});
    },
    onError: (error: Error) =>{
      //Show toast
      showToast({message: error.message, type: "ERROR"})
    },
  });

  const handleClick = () => {
    mutation.mutate();//this invoce api calls
  };
  return(
    <button 
      onClick={handleClick}//when the buttom is cliccked it will call handlClick
      className="flex item center px-3 font-bold hover:bg-amber-800">
        Sign Out
    </button>
  );
};

export default SignOutButton;