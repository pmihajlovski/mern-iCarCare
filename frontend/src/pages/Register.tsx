import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

export type RegisterFormData = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string;
}

const Register = ()=> {
  const queryClient = useQueryClient();
  const navigate = useNavigate();// to navigate to the home page
  const { showToast } = useAppContext();
  const { register, watch, handleSubmit, formState: { errors }, } = useForm<RegisterFormData>();
  //mutation change something on the page based if it went well or no
  const mutation = useMutation(apiClient.register, {
    onSuccess: async() => {
      showToast({ message: "Registrazione avvenuta", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate("/");//this will return to the home page 
    },
    onError: (error: Error)=> {
      showToast({ message: error.message, type: "ERROR"})
    },
  });

  //onSubmit is activated when you click the button create account and is going to do some validation to get you the data you need
  const onSubmit = handleSubmit((data)=>{
    mutation.mutate(data);
  });
  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold">Crea un Account</h2>
      <div className="flex flex-col md:flex-row gap-5">
        <label className="text-gray-700 text-sm font-bold flex-1">
          Nome
          <input className="border rounded w-full py-1 px-2 font-normal" {...register("firstName", {required: "Questo campo è necessario"})}/>
          {errors.firstName && (
          <span className="text-red-500">{errors.firstName.message}</span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Cognome
          <input className="border rounded w-full py-1 px-2 font-normal" {...register("lastName", {required: "Questo campo è necessario"})}/>
          {errors.lastName && (
          <span className="text-red-500">{errors.lastName.message}</span>
          )}
        </label>
      </div>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Email
        <input 
          type="email"
          className="border rounded w-full py-1 px-2 font-normal" {...register("email", {required: "Questo campo è necessario"})}
          />
          {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
          )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Password
        <input 
          type="password"
          className="border rounded w-full py-1 px-2 font-normal" {...register("password", {
            required: "Questo campo è necessario", 
            minLength: {
              value: 6,
              message: "La Password deve essere almeno di 6 caratteri",
            },
            })}/>
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Conferma Password
        <input 
          type="password"
          className="border rounded w-full py-1 px-2 font-normal" {...register("confirmPassword", {
            validate: (val)=>{
              if(!val){
                return "Queso campo è obbligatorio";
              } else if(watch("password") !== val){
                return "Le password non corrispondono";
              }
            }
            })}/>
        {errors.confirmPassword && (
          <span className="text-red-500">{errors.confirmPassword.message}</span>
        )}
      </label>
      <span>
        <button 
        type="submit"
        className="bg-slate-900 text-white p-2 font-bold hover:bg-amber-500 text-xl">
          Crea Account
        </button>
      </span>
    </form>
  );
};

export default Register;