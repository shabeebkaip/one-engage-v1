import React from 'react'
import Image from 'next/image';

const AccountMangement = () => {
    return (
        <div className='bg-[#FFEFCF]'>
            <div className='container flex flex-col gap-10 p-10 mx-auto md:hidden'>
                <div className='w-full'>
                    <div className='flex flex-col justify-center h-full gap-10'>
                        <div className='font-bold text-[40px] text-[#FF6410]'>
                            <h1 className='font-poppins'>
                                Account <br/> Management
                            </h1>
                        </div>
                        <div className='font-bold font-dm-sans'>
                            <p>Receive proactive support for an effective partnership. Our account management team is dedicated to ensuring your satisfaction, managing the relationship, and providing strategic guidance to maximize the value you receive from our services.</p>
                        </div>
                        <div>
                            <button className='border-[#FF6410] border border-solid p-3 rounded-[30px] px-8 flex gap-3'>
                                <p className='font-bold text-[#FF6410]'>View More</p>
                                <p className='font-bold text-[#FF6410]'>&rarr;</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <Image width={1000} height={1000} src="/management.png" alt='Image' className='w-full h-full rounded-[23px]  object-cover' />
                </div>
            </div>
            <div className='container hidden gap-10 p-10 mx-auto md:flex'>
                <div className='w-[50%] flex justify-center items-center'>
                    <Image width={1000} height={1000} src="/management.png" alt='Image' className='w-full  rounded-[23px]  object-contain' />
                </div>
                <div className='w-[50%]'>
                    <div className='flex flex-col justify-center h-full gap-5 lg:p-20 md:p-10'>
                        <div className='font-bold text-[30px] text-[#FF6410]'>
                            <h1 className=''>
                                Account Management
                            </h1>
                        </div>
                        <div>
                            <p>Receive proactive support for an effective partnership. Our account management team is dedicated to ensuring your satisfaction, managing the relationship, and providing strategic guidance to maximize the value you receive from our services.Gain valuable insights for informed decision-making with our analytics and reporting services. We provide customized live dashboards, reports, and database cleanup services, enabling you to track performance, measure success, and optimize your customer service operations.</p>
                        </div>
                        <div>
                            <button className='border-[#FF6410] border border-solid p-3 rounded-[30px] px-8 flex gap-3'>
                                <p className='font-bold text-[#FF6410]'>View More</p>
                                <p className='font-bold text-[#FF6410]'>&rarr;</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountMangement