import Image from "next/image";
import emoji from "@/assets/images/emoji.png";
import { ButtonHero } from "@/components/Button";
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg'
import SparkleIcon from '@/assets/icons/sparkle.svg'
import HeroOrbit from "@/components/HeroOrbit";
import { PropsWithChildren } from "react";

const HeroAvailablity =() =>{
  return(
    <div className="flex flex-col items-center" id="hero">
          <Image src={emoji} alt="emoji" className="size-[100px]" />
          <div className="border bg-gray-950 border-gray-800 px-4 py-1.5 rounded-lg inline-flex items-center gap-4">
            <div className=" bg-green-500 size-2.5 rounded-full relative">
              <div className="absolute inset-0 animate-ping bg-green-500 rounded-full"></div>
            </div>
            <div className="text-sm font-medium">
              {" "}
              Available for new projects{" "}
            </div>
          </div>
        </div>
  );
}

const HeroHeadLine = () => {
  return(
    <div className="max-w-lg mx-auto">
    <h1 className=" capitalize font-serif text-3xl md:text-5xl mt-8 text-center tracking-wide">
      <span className="block">Creative Programmer</span> fueled by passion
    </h1>
    <p className=" text-center text-sm md:text-lg mt-4 text-white/60 leading-6">
    Hi, my name is Shlomi, I`m 25 years old, and currently pursuing a degree in Computer Science at Afeka College in Tel Aviv. I enjoy working on challenging problems that stimulate my mind, and I`m passionate about using creativity to find innovative solutions. I`m a dedicated, hardworking individual who thrives in environments that push me to think critically and apply my skills effectively. 
    </p>
  </div>
  );
};


export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 z-0 relative overflow-x-clip">
      <div className=" absolute -z-30 inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_70%,transparent)]">
        <div className=" absolute opacity-5  inset-0" style={{backgroundImage:`url(${grainImage.src})`}}></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

      <HeroOrbit size={800} rotation={-72}>
          <StarIcon className="size-28 text-emerald-300"/>
      </HeroOrbit>
      <HeroOrbit size={550} rotation={20}>
          <StarIcon className="size-12 text-emerald-300"/>
      </HeroOrbit>
      <HeroOrbit size={590} rotation={98}>
          <StarIcon className="size-8 text-emerald-300"/>
      </HeroOrbit>
      <HeroOrbit size={430} rotation={-14}>
          <SparkleIcon className="size-8 text-emerald-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={440} rotation={79}>
          <SparkleIcon className="size-5 text-emerald-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={530} rotation={178}>
          <SparkleIcon className="size-10 text-emerald-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={710} rotation={144}>
          <SparkleIcon className="size-14 text-emerald-300/20"/>
      </HeroOrbit>
    </div>
        <div className="container z-20">
          <HeroAvailablity/>
          <HeroHeadLine/>
          <ButtonHero />
        </div>
      
    </div>
  );
};
