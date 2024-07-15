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
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#996600]'>Ripariamo la tua auto</h1>
              <p className="text-[#ffaa00]">
              Da 50 anni l'officina di fiducia di molti italiani. Ci prendiamo cura della tua auto in tempi brevi e con la massima professionalità.
              </p>
              <button className='bg-yellow_back text-[black_background] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
          </div>
        </div>
      </div>
      <div className="w-full py-16 px-4">
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={car} alt='/' />
            <div className='flex flex-col justify-center'>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#996600]'>Auto a noleggio</h1>
              <p className="text-[#ffaa00]">
              Offriamo un'ampia gamma di veicoli a noleggio per soddisfare ogni tua esigenza, a prezzi competitivi.
              </p>
              <button className='bg-#996600 text-[#ffaa00] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
          </div>
        </div>
      </div>
      <div className="w-full py-16 px-4">
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={file} alt='/' />
            <div className='flex flex-col justify-center'>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#996600]'>Ti avvisiamo noi sulle scadenze</h1>
              <p className="text-[#ffaa00]">
              Offriamo un'ampia gamma di veicoli a noleggio per soddisfare ogni tua esigenza, a prezzi competitivi.
              </p>
              <button className='bg-#996600 text-[#ffaa00] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
          </div>
        </div>
      </div>
        <div className="bg-neutral-0 pb-16 "> </div>
        <img src={undraw_trip_re_f724} alt="undraw_trip_re_f724" />
        <div className="bg-background_color py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 ">Transactions every 24 hours</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight  sm:text-5xl">44 million</dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 ">Assets under holding</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight  sm:text-5xl">$119 trillion</dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 ">New users annually</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">46,000</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      
    
  );
};

export default HomePage;