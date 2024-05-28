const HomePage = () =>{
  return(
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col leading-normal">
          <img src="./src/images/image1.jpg" className="object-fill h-48 w-96"/>
          <div className="p-4 pt-5 text-center">
              <p className="text-gray-900 font-bold text-xl mb-2">Ripariamo la tua auto</p>
              <p className="text-gray-700 text-sm">Da 50 anni l'officina di fiducia di molti italiani. Ci prendiamo cura della tua auto in tempi brevi.</p>
          </div>
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col leading-normal">
          <img src="https://res.cloudinary.com/dwnc3l2ij/image/upload/v1716893970/mj0yun1hlmyeazxia4ly.jpg" className="object-fill h-48 w-96"/>
          <div className="p-4 pt-5 text-center">
              <p className="text-gray-900 font-bold text-xl mb-2">Auto a noleggio</p>
              <p className="text-gray-700 text-sm">Da 50 anni l'officina di fiducia di molti italiani. Ci prendiamo cura della tua auto in tempi brevi.</p>
          </div>
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col leading-normal">
          <img src="https://res.cloudinary.com/dwnc3l2ij/image/upload/v1716892024/almktgs7kjfck7c3escw.jpg" className="w-full h-48 w-96"/>
          <div className="p-4 pt-5 text-center">
              <p className="text-gray-900 font-bold text-xl mb-2">Ti avvisiamo noi sulle scadenze</p>
              <p className="text-gray-700 text-sm">Da 50 anni l'officina di fiducia di molti italiani. Ci prendiamo cura della tua auto in tempi brevi.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;