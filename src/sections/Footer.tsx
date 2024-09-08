import UpRightArrow from '@/assets/icons/arrow-up-right.svg'


const socials = [
  "Linkedln",
  "GitHub"
]


export const Footer = () => {
  return(
    <footer className='relative"'>
      <div className='absolute h-24 w-full bg-gradient-to-b  from-gray-900 to-emerald-300/10 pointer-events-none z-0'></div>
      <div className='container z-10'>
         <hr className=" border-t border-white/50"/>
      <div className='flex flex-col gap-4 text-center '>
        <div className='mt-4'>
          <p className='text-white/50 text-sm'>© 2024. All rights reserved.</p>
        </div>
        <div>
          <div className='flex  justify-center gap-4'>
            {socials.map(social =>(
                <div key={social}>
                  <a href='#' className='inline-flex gap-2'>
                     <span className='text-sm'>{social}</span>
                  <UpRightArrow className="size-4"/>
                  </a>
                </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </footer>
  )
};
