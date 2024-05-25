const Footer = ()=>{
  return(
    <div className="bg-slate-900 py-10">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-amber-500 font-bold tracking-tight">
          ICarCare.com
        </span>
        <span className="text-amber-500 font-bold tracking-tight flex gap-4">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Service</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;