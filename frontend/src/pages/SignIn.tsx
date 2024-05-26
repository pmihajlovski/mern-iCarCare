import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { Link, useNavigate } from "react-router-dom";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const {showToast} = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  //this will perform validation on password and email like in the registration form
  const { register, formState: { errors }, handleSubmit} = useForm<SignInFormData>();
  
  //pass the fecth requet you want to get handled by the mutation
  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      //console.log("user has been signed in");//just for debug now
      //1. Show the toast
      //2. Navigate to the home page using REACT HOOCK NAVIGATE.
      showToast({message: "Sign in avvenuto!", type: "SUCCESS"});
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
    },
      onError: (error: Error) => {
        //show the toast
        showToast({ message: error.message, type: "ERROR"});
      },
  });

  //when the form is submitted correctly this will call the previous mutation.
  const onSubmit = handleSubmit((data)=> {
    mutation.mutate(data);
  })
  return(
    //use the same register form. Use REACT HOOK FORM.
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold">Sign in</h2>
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
      <span className="flex itmer-center justify-between">
        <span className="text-sm">
          Non hai ancora un account?<Link className="underline"to ="/register"> Crea un account qui</Link>
        </span>
        <button 
          type="submit"
          className="bg-slate-900 text-white p-2 font-bold hover:bg-amber-500 text-xl">
          Login
        </button>
      </span>
    </form>
  )
};

export default SignIn;