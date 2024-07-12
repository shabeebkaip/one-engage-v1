import React from 'react'
import Image from 'next/image'

const SubscribeNow = () => {
    return (
        <div className='container pt-24 mx-auto'>
            <div className='flex flex-col items-center justify-center '>
                <p className='text-[#FF6410] md:text-[60px] font-bold md:flex hidden text-center md:leading-[70px] text-[40px]'>SUBSCRIBE <br/> NOW</p>
                <p className='text-[#FF6410] md:text-[60px] font-bold md:hidden flex text-center md:leading-[70px] text-[40px]'>SUBSCRIBE <br/> NOW</p>
                <p className='text-[24px] font-bold text-center w-[80%] leading-[28px] pt-8 font-dm-sans'>Stay connected with us by subscribing to receive regular updates and notifications.
                    Together, let's unlock the potential of customer engagement and discover new avenues for success in the ever-evolving business landscape.
                </p>
            </div>
            <div className='flex justify-center py-20'>
                <div className="relative md:w-[50%] ">
                    <input
                        type="text"
                        placeholder="Your email address"
                        className="border-[3px] border-[#FF6410] rounded-[40px] w-full p-4 pr-12"
                    />
                    <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#FF6410] p-2 rounded-full">
                        <Image src="/Vector (4).png" alt="Send" className="bg-[#FF6410] w-5 h-5" width={100} height={100} />
                    </button>
                </div>
            </div>

            <div className='justify-between hidden pt-20 pb-6 md:flex'>
                <div className='flex '>
                <Image className="md:w-[78px] w-[59px]" src="/yellow.png" width={1000} height={1000} />
                <Image src="/red.png" alt="Send" className="md:w-[78px] w-[59px]" width={100} height={100} />
                <Image src="/ball12.png" alt="Send" className="md:w-[78px] w-[59px]" width={100} height={100} />
                </div>
                <div className='flex gap-1'>
                  
                    <Image className="md:w-[78px] w-[59px]" src="/yellow.png" width={1000} height={1000} />
                    <Image src="/red.png" alt="Send" className="md:w-[78px] w-[59px]" width={100} height={100} />
                </div>
            </div>
            <div className="flex flex-row justify-between px-8 py-5 md:hidden sm:px-16 sm:py-10"> 
            <div className='flex flex-row'>
            
            <Image
                          src="/aboutus/WhiteBall.png"
                          alt="right image"
                          width={1000}
                          height={500}
                          className="h-[60px] w-[60px] object-contain "
                        />

            </div>
            <div className='flex flex-row'>

                      <Image
                          src="/aboutus/YellowBall.png"
                          alt="right image"
                          width={1000}
                          height={500}
                          className="h-[60px] w-[60px] object-contain "
                        />
                          <Image
                          src="/aboutus/OrangeBall.png"
                          alt="right image"
                          width={1000}
                          height={500}
                          className="h-[60px] w-[60px] object-contain "
                        />
            </div>
        </div>




        </div>
    )
}

export default SubscribeNow
