import React from 'react'
import Image from 'next/image'

const InquiryForm = () => {
    const array = [
        {
            imgSrc: '/email.png',
            name: 'Address',
            description: 'Kuwait City, Qibla, Block 12, Fahad Al-Salem St, Awtad tower'
        },

        {
            imgSrc: '/phone.png',
            name: 'Phone',
            description: '+10 987 654 432'
        },
        {
            imgSrc: '/email.png',
            name: 'Email',
            description: 'info@oneengage.com'
        },
    ]


    return (
        <div className='bg-[#FEEFCE]'>
            <div className='container px-6 mx-auto md:px-0'>
                <div className='flex justify-center '>
                    <p className='text-[#FF6410] sm:text-[30px] text-[25px] font-dm-sans font-bold  lg:py-32 py-10 lg:w-[50%] md:text-center leading-[30px]'>For questions or inquiries, please feel free to reach out to us using the form below or through the following channels:</p>
                </div>


                <div className='w-full gap-5 md:flex'>
                    <div className='flex flex-col justify-between md:w-1/2 '>

                        <div className='sm:pt-10'>
                            {array.map((detail, index) => (
                                <div key={index} className="flex items-center gap-8 py-3">
                                    <Image className="w-10 h-10" src={detail.imgSrc} width={40} height={40} alt={`${detail.name} Icon`} />
                                    <div>
                                        <p className="text-[18px] font-dm-sans font-medium">{detail.name}:</p>
                                        <p className="text-[18px] font-dm-sans font-medium ">{detail.description}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="text-[#000000] text-[18px] font-medium pt-6 md:text-center">We look forward to hearing from you!</div>

                        </div>
                        <div className='flex justify-center gap-5 md:justify-start pt-7 md:pt-0'>
                            <Image className="w-[18px] h-[17px]" src="/LinkedIn (2).png" width={1000} height={1000} />
                            <Image className="w-[18px] h-[17px]" src="/Vector (3).png" width={1000} height={1000} />
                            <Image className="w-[18px] h-[17px]" src="/Group 427319250.png" width={1000} height={1000} />
                            <Image className="w-[30px] h-[21px]" src="/Twitter X 1.png" width={1000} height={1000} />
                            <Image className="w-[11px] h-[19px]" src="/Facebook.png" width={1000} height={1000} />
                        </div>

                        <div className='hidden gap-3 mb-5 md:flex'>
                            <Image className="xl:w-[114px] md:w-[70px] w-[59px]" src="/poinred.png" width={1000} height={1000} />
                            <Image className="xl:w-[114px] md:w-[70px] w-[59px]" src="/point2.png" width={1000} height={1000} />

                        </div>

                       

                    </div>

                    <div className='pb-10 md:w-1/2'>
                        <div>
                            <p className='text-[30px] text-[#FF6410] font-dm-sans font-bold '>Inquiry Form:</p>
                            <p className='text-[18px] font-dm-sans  font-medium py-6'>At One Engage, we are dedicated to delivering exceptional service and support to our valued customers. We understand that your time is valuable, and we strive to provide effective solutions tailored to your needs. Our dedicated support team is always here to assist you. Please fill out the form below to get in touch with us:</p>
                        </div>

                        <div className="flex flex-col pt-8 ">
                            <input
                                type="text"
                                placeholder="Name"
                                className="border border-[#FF6410] rounded-[40px] w-full  bg-[#FFEFCF] p-4"


                            />

                            <input
                                type="text"
                                placeholder="Email"
                                className="border border-[#FF6410] rounded-[40px] w-full p-4 bg-[#FFEFCF] mt-7"


                            />

                            <input
                                type="text"
                                placeholder="phone Number"
                                className="border border-[#FF6410] rounded-[40px] w-full p-4 bg-[#FFEFCF] mt-7"


                            />

                            <input
                                type="text"
                                placeholder="Company/Organization"
                                className="border border-[#FF6410] rounded-[40px] w-full p-4 bg-[#FFEFCF] mt-7"


                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                className="border border-[#FF6410] rounded-[40px] w-full p-4 bg-[#FFEFCF] mt-7"


                            />

                            <div className='flex flex-col w-full mb-4'>
                                <label htmlFor="subject" className={`text-[16px] lg:mt-4 font-bold `}></label>
                                <textarea
                                    name="subject"
                                    id="subject"
                                    placeholder="Message"
                                    rows="6"  // You can change this number to increase or decrease the rows
                                    className='bg-[#FFEFCF] border-b-[#FF6410] border-b pl-3'
                                />
                            </div>


                            <div className='flex mt-7 lg:w-full'>
                                <button className='border text-[16px]  rounded-full border-orange-500   font-medium px-5 py-2 text-[#FF6410]'  >
                                    Submit <span>&rarr;</span>
                                </button>
                            </div>
                            <div className='flex justify-between pt-20 pb-6 md:hidden'>
                            <Image src="/point3.png" alt="Send" className="md:w-[114px] w-[59px]" width={100} height={100} />
                            <div className='flex gap-1'>
                                <Image className="md:w-[114px] w-[59px]" src="/point2.png" width={1000} height={1000} />
                                <Image className="md:w-[114px] w-[59px]" src="/poinred.png" width={1000} height={1000} />
                            </div>
                        </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default InquiryForm