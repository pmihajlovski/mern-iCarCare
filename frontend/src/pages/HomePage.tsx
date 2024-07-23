import undraw_trip_re_f724 from "./res/undraw_trip_re_f724.svg";
import auto_repair from "./res/auto_repair.svg";
import car from "./res/car.svg";
import file from "./res/file.svg";
const HomePage = () =>{
  return(
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="w-full py-16 px-4">
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={auto_repair} alt='/' />
            <div className='flex flex-col justify-center'>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#002233]'>Ripariamo la tua auto</h1>
              <p className="text-[#ffaa00]">
              Da 50 anni l'officina di fiducia di molti italiani. Ci prendiamo cura della tua auto in tempi brevi e con la massima professionalità.
              </p>
              <button className='bg-yellow_back text-[black_background] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Maggiori Informazioni</button>
          </div>
        </div>
      </div>
      <div className="w-full py-16 px-4">
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={car} alt='/' />
            <div className='flex flex-col justify-center'>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#002233]'>Auto a noleggio</h1>
              <p className="text-[#ffaa00]">
              Offriamo un'ampia gamma di veicoli a noleggio per soddisfare ogni tua esigenza, a prezzi competitivi.
              </p>
              <button className='bg-yellow_back text-[black_background] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Maggiori Informazioni</button>
          </div>
        </div>
      </div>
      <div className="my-5 w-full py-16 px-4">
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={file} alt='/' />
            <div className='flex flex-col justify-center'>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#002233]'>Ti avvisiamo noi sulle scadenze</h1>
              <p className="text-[#ffaa00]">
              Offriamo un'ampia gamma di veicoli a noleggio per soddisfare ogni tua esigenza, a prezzi competitivi.
              </p>
              <button className='bg-yellow_back text-[black_background] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Maggiori Informazioni</button>
          </div>
        </div>
      </div>
      <div className="my-5 w-full py-16 px-4">
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={undraw_trip_re_f724} alt='/' />
            <div className='flex flex-col justify-center'>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#002233]'>Blog con Itinerari</h1>
              <p className="text-[#ffaa00]">
                Scopri il nostro blog con consigli su viaggi in auto da fare in giro per il mondo.
              </p>
              <button className='bg-yellow_back text-[black_background] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Maggiori Informazioni</button>
          </div>
        </div>
      </div>
      <div className="my-10 bg-background_color py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 ">Clienti soddisfatti</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight  sm:text-5xl">50,000</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 ">Recensioni positive</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">20,000</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 ">Auto Riparate</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">100,000</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
      
    
  );
};

export default HomePage;