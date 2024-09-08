import UpRightArrow from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 px-4 " id="Contact">
      <div className="container rounded-xl bg-gradient-to-r  from-emerald-300 to-sky-400 relative">
        <div
          className=" absolute opacity-5 inset-0 pointer-events-none"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="lg:grid lg:grid-cols-4 lg:items-center">
          <div className="lg:col-span-3">
            <div className="text-gray-900 py-4 flex flex-col text-center lg:text-left gap-2">
              <h3 className=" text-2xl capitalize font-serif">
                Let's create something amazing together
              </h3>
              <p className="font-semibold text-sm">
                Feel free to reach out if you'd like to connect or have any
                questions! I'm always open to discussing new ideas,
                collaborating on projects
              </p>
              
            </div>
          </div>
          <div className="pb-6">
            <a
                href="#"
                className="flex items-center gap-2 justify-center mt-4 text-white bg-gray-900 mx-auto py-3 px-4 rounded-xl hover:bg-[#1a9753]"
              >
                <button> Contact Me</button>
                <UpRightArrow className="size-4" />
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};
