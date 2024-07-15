import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

const Footer = ()=>{
  return(
    <div className="bg-background_color py-10">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-amber-500 font-bold tracking-tight">
          ICarCare.com
        </span>
        <span className="text-3xl text-amber-500 font-bold tracking-tight gap-4 flex items-center">
          Contatti
            <a href="https://www.facebook.com/profile.php?id=61560256041735"className="cursor-pointer text-xl"><FaFacebookF />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61560256041735"className="cursor-pointer text-xl"><FaTiktok />
            </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;