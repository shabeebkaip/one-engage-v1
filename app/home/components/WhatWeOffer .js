import Image from "next/image"

const WhatWeOffer = () => {
    return (
        <div className=" bg-[#FF6410]">
            <div className="container mx-auto ">
                <div className='container p-2 mx-auto md:p-10'>
                    <p className='  md:flex items-center justify-center text-[40px] md:text-[60px] font-bold text-white leading-none md:leading-tight font-poppins tracking-tighter mt-10'>What we offer</p>
                    <div className='container grid justify-center grid-cols-1 mx-auto text-white md:grid-cols-2'>
                        <div className="flex flex-col justify-center max-w-[800px] gap-10">
                            <p className=' text-[24px] lg:text-[30px] md:text-[25px] font-bold flex items-center justify-center md:w-[340px] lg:w-auto lg:w-4/3 leading-tight tracking-tight mt-10 font-dm-sans'>At One Engage, we provide a comprehensive range of services to enhance your customer engagement and support. </p>
                            <p className='text-[18px] md:text-[18px]  lg:text-[18px] md:w-[70%]  leading-none md:leading-tight sm:tracking-tighter font-dm-sans'>We develop businesses by sharing the tools and resources they need to succeed in their customer engagement, lead generation and insights, inbound and outbound marketing interactions, and more.</p>
                        </div>
                        <div className="">
                            <Image src='/home/plane.png' alt="" className='md:w-[600px]' width={800} height={800} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeOffer