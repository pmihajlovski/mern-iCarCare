import{
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import { useAppContext } from "./contexts/AppContext";
import AddCar from "./pages/AggiungiAuto";
import MyCars from "./pages/MyCars";
import HomePage from "./pages/HomePage";
import EditCar from "./pages/EditCar";
const App = () => {
  const {isLoggedIn} = useAppContext();
  return (
    <div className="back" style={{backgroundImage: `url(https://res.cloudinary.com/dwnc3l2ij/image/upload/v1721030782/wave-haikei_1_dpa9r0.svg)`}} >
      <Router>
        <Routes>
          <Route path="/" element={<Layout>
            <HomePage/>
          </Layout>}/>
          <Route path="/search" element={<Layout>
            <p> Search Page</p>
          </Layout>}/>
          <Route 
          path="/register"
          element={
          <Layout>
            <Register/>
          </Layout>}/>
          <Route path="/sign-in" element= {
            <Layout> 
              <SignIn/>
            </Layout>
          }/>
          {isLoggedIn && <>
            <Route path="/add-car" element={
              <Layout>
                <AddCar />
              </Layout>
            }/>
            <Route path="/my-cars" element={
              <Layout>
                <MyCars />
              </Layout>
            }/>
            <Route path="/edit-car/:carId" element={
              <Layout>
                <EditCar />
            </Layout>
            }/>
          </>}
          <Route path="*" element={<Navigate to ="/"/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;