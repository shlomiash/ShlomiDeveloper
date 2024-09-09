import ArrowDown from "@/assets/icons/arrow-down.svg"


 export const ButtonHero = () => {
  return ( 
    <div className="mt-9 flex flex-col md:flex-row justify-center items-center gap-4 ">
      <a href="#Projects">
        <button  className="button-hero inline-flex gap-4 items-center hover:bg-[#1a9753] transition duration-500">
          <span >explore my work</span>
          <ArrowDown className="size-4 "/>
        </button>
      </a>
      <a href="https://wa.me/0547446880">
        <button  className="button-hero bg-white text-gray-900 font-bold">
          <span>👋 Lets Connect</span>
        </button>
      </a>
  </div>
  )
};

