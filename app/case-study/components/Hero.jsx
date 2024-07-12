import Image from "next/image";

const Hero = () => {
  return (
    <div className="xl:container mx-auto">
      <div className="hidden md:grid grid-cols-2  flex-row  xl:h-">
        <div
          className="flex flex-col items-end justify-end relative font-extrabold text-orange-500 lg:text-[70px]  text-[50px] bg-contain bg-no-repeat"
          style={{
            backgroundImage: "url('/clients-hero-left.png')",
            backgroundPosition: "right bottom",
          }}
        >
          <div className="absolute right-[40%] bottom-[20%]  ">CLIENTS</div>
        </div>

        <div
          className=" xl:h-[650px] lg:h-[500px] h-[400px] pb-0 bg-contain bg-no-repeat"
          style={{
            backgroundImage: "url('/home/22 1.png')",
            backgroundPosition: "bottom",
          }}
        ></div>
      </div>

      <div className="md:hidden flex flex-col">
        <div className="w-[90%] mx-auto  bg-no-repeat bg-contain">
          <Image
            width={1000}
            height={1000}
            src="/clients-mob-hero-1.png"
            alt="Image"
            className="w-full  rounded-[23px]  object-contain"
          />
        </div>

        <div className="flex flex-row justify-between pt-5 px-5">
          <h3 className="text-[#FF6410] sm:text-[55px] text-[50px] font-poppins font-extrabold ">
            CLIENTS
          </h3>
          <Image
            src="/ball-img-x.png"
            height={320}
            width={350}
            className="pt-8 w-[20%] md:hidden flex"
          />
        </div>
        <div className="w-full block md:hidden bg-no-repeat bg-contain">
          <Image
            width={1000}
            height={1000}
            src="/clients-mob-hero2.png"
            alt="Image"
            className="w-full  rounded-[23px]  object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
