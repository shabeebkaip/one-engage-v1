import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#D4C1B4]">
      <div className=" container mx-auto">
        <div className="">
          <div className="md:flex lg:gap-44 md:gap-20">
            <div className="relative hidden mt-32 ml-3 md:flex">
              <Image
                src="/casestudy/5 799686.png"
                width={400}
                height={400}
                className="xl:w-[700px] lg:h-auto"
              />
            
            </div>
            <div className="relative flex items-center justify-center">
              <div className="block md:p-0 sm:p-3">
                <h1 className="xl:text-[30px] font-bold xl:w-[600px] lg:text-[25px] lg:w-[400px] md:leading-tight md:w-[270px] sm:w-auto w-[320px] sm:p-0 p-2 mt-[30px] ">
                  Our commitment to delivering exceptional outsourcing services
                  has earned us long-term relationships with clients who trust
                  us to meet their unique business needs.
                </h1>
                <p className="font-light text-[12px] lg:text-[18px] xl:w-[300px] lg:w-[250px] mt-10 md:w-[200px] sm:w-auto w-[250px] sm:p-0 p-2">
                  Explore our list of clients and successful partnerships!
                </p>
              </div>
              
            </div>
            <div className="block md:hidden mx-auto">
            <Image
                src="/casestudy/5 799686.png"
                width={400}
                height={400}
                className=" lg:h-auto mx-auto"
              />
            </div>
          </div>
          <div className=" relative flex justify-between">

<div className=" absolute top-[-90px] left-2 ">
<Image
      src="/aboutus/WhiteBall.png"
      width={400}
      height={400}
      className=" w-[70px]  h-[70px] "
    />
</div>
<div className="absolute right-2 top-[-90px]  flex flex-row">
<Image
      src="/aboutus/YellowBall.png"
      width={400}
      height={400}
      className="w-[70px] h-[70px] "
    />
    <Image
    src="/aboutus/OrangeBall.png"
    width={400}
    height={400}
    className=" w-[70px] h-[70px]"
  /> 
</div>     
</div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
