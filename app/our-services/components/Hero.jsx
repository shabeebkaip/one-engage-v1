import Image from "next/image";

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:hidden">
        <div className="w-full md:w-[50%] sm:w-[100%]">
          <div className="">
            <Image
              width={1700}
              height={1700}
              src="/mobhero1.png"
              alt="mobImage"
              className="w-full h-full rounded-[23px]  object-cover"
            />
          </div>
          <div className="font-black text-[#FF6410]  text-[45px]">
            <h1>
              OUR <br /> SERVICES
            </h1>
          </div>
        </div>
        <div className=" md:w-[50%]">
          <Image
            width={1000}
            height={1000}
            src="/hero2.png"
            alt="Image"
            className=" w-full rounded-[23px]  object-cover"
          />
        </div>
      </div>
      <div className="hidden md:flex gap-5 p-5  lg:h-[580px] h-[500px]">
        <div className="relative w-full md:w-[50%] flex flex-col justify-center">
          <div className="relative ">
            <Image
              width={1000}
              height={1000}
              src="/hero1.png"
              alt="Image"
              className="object-contain w-full"
            />
          </div>
          <div className="absolute lg:bottom-[80px] bottom-[40px] lg:left-[15%] left-[12%]">
            <div className="font-bold text-[#FF6410] text-[55px]">
              <h1>
                OUR <br /> SERVICES
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%]">
          <Image
            width={1000}
            height={1000}
            src="/hero2.png"
            alt="Image"
            className="w-full h-full rounded-[23px]  object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
