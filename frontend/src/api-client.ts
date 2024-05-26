import {RegisterFormData} from "./pages/Register.tsx";
import { SignInFormData } from "./pages/SignIn.tsx";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
//fetch request
export const register = async (formData: RegisterFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: 'POST',
    //anytime we make a request we want to inclued any http cookies
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();

  if(!response.ok) {
    throw new Error(responseBody.message);
  }
};

export const signIn = async (formData: SignInFormData) => {
  const response = await fetch (`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers:{
      "Content-type": "application/json"
    },
    body: JSON.stringify(formData),//Take formData object and converted to a string is more friendly for api request
  });
  
  const body = await response.json();

  if(!response.ok){
    throw new Error(body.message);
  }
  return body;
};

export const validateToken = async ()=>{
  const response = await fetch (`${API_BASE_URL}/api/auth/validate-token`, {
    credentials: "include"
  });

  if(!response.ok){
    throw new Error("Token invalid");
  }

  return response.json();
};

export const signOut = async ()=> {
  const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
    credentials: "include",
    method: "POST"
  });
  
  if(!response.ok){
    throw new Error("Error during Sign Out");
  }
};

export const addMyCar = async (carFormData: FormData) => {
  const response = await fetch (`${API_BASE_URL}/api/my-cars`, {
    method: "POST",
    credentials: "include",
    body: carFormData,
  });
  
  if(!response.ok){
    throw new Error("Failed to add hotel");
  }
  return response.json();
};