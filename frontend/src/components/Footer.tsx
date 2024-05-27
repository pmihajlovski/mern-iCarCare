const Footer = ()=>{
  return(
    <div className="bg-slate-900 py-10">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-amber-500 font-bold tracking-tight">
          ICarCare.com
        </span>
        <span className="text-3xl text-amber-500 font-bold tracking-tight gap-4">
          Contatti
          <p className="cursor-pointer text-xl">Email</p>
          <p className="cursor-pointer text-xl">Facebbok</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;