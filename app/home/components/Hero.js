import Image from "next/image"

const  Hero = () => {
    return (
       
            <div className="container mx-auto">
              <div className="flex flex-col  md:hidden">
                <div className="w-full md:w-[50%]">
                  <div className="">
                    <Image
                      width={1000}
                      height={1000}
                      src="/mobhero1.png"
                      alt="mobImage"
                      className="w-full h-full rounded-[23px]  object-cover"
                    />
                  </div>
                  <div className="font-bold text-[#FF6410]  text-[45px]">
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
              <div className="hidden md:flex   xl:h-[580px] lg:h-[500px] h-[400px]">
                <div className="pl-10 w-full md:w-[50%]  lg:h-[450px] h-[350px]  flex flex-col justify-end">
                  <div className="relative ">
                    <Image
                      width={1000}
                      height={1000} 
                      src="/home/hero.png"
                      alt="Image"
                      className="w-[40%] object-contain"
                    />
                  </div>
                  <div className="">
                    <div className="font-bold text-[#FF6410] xl:text-[55px] lg:text-[45px] text-[35px]">
                      <h1>
                        YOUR SUCCES <br /> IS OUR BUSUNESS
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-[50%] flex justify-end bg-no-repeat bg-contain"  style={{ backgroundImage: "url('/home/22 1.png')", backgroundPosition: 'bottom' }}>   </div>
              </div>
            </div>
          
    )
}

export default Hero