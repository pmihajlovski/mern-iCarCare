import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

interface Props{
  children: React.ReactNode;
}
const Layout = ({children}: Props) => {
  return(
    //this anchor the footer and the header to the top and to the bottom. this are tailwind css classes.
    <div className="flex flex-col min-h-screen">
      <Header/>
      <Hero/>
      <div className="container mx-auto py-10 flex-1">
        {children}
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;