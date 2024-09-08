import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Search Optimizied",
  "Usable",
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Search Optimizied",
  "Usable",
];

export const TapeSection = () => {
  return (
    <div className="py-16">
      <div className="">
        <div className=" bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3">
          <div className="flex gap-4 lg:gap-8 overflow-x-clip items-center py-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ">
           <div className="flex flex-none gap-4 pr-4 lg:gap-8 text-sm md:text-lg text-gray-800 uppercase font-extrabold animate-move-left [animation-duration:60s]">
           {
            [...new Array(2)].fill(0).map((_,idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
              <div
                key={word}
                className="inline-flex gap-4 items-center"
              >
                <span>{word}</span>
                <StarIcon className="-rotate-12" />
              </div>
            ))}
              </Fragment>
            ))
           }
            
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
