import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutBotton";
const Header = ()=> {
    //Background color and padding to top and bottom
    //push the inside div to the limit of the container
    //tracking-tight space words better
  const{isLoggedIn} = useAppContext();
  return(
    <div className="bg-slate-950 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-amber-500 font bold tracking-tight">
          <Link to = "/">
            ICarCare
          </Link>
        </span>
        <span className="flex space-x-2 text-amber-500">
          {isLoggedIn ? (
            <>
              <Link className="flex itmes-center px-3 font-bold hover:bg-amber-800" to ="/mio-noleggio">Auto noleggiata</Link>
              <Link className="flex itmes-center px-3 font-bold hover:bg-amber-800" to ="/mie-pratiche">Mie pratiche</Link>
              <SignOutButton/>
            </>
          ) : (
          <Link to="/sign-in" className="flex items-center text-white px-3 font-bold hover:bg-amber-500">
            Sign in
          </Link>
          )}
        </span>
      </div>
    </div>
  )
};

export default Header;