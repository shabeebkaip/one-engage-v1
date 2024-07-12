import Image from 'next/image'
import React from 'react'

const Results = () => {

    const data = [
        {
            text: 'Increased customer engagement: The outbound campaigns resulted in a 30% increase in customer engagement, as measured by click-through rates and response rates.'
        },
        {
            text: 'Improved customer retention: SuperShop.com experienced a 20% improvement in customer retention, as customers responded positively to the personalized offers and incentives.'
        },
        {
            text: 'Enhanced customer satisfaction: The tailored approach led to higher customer satisfaction scores, with customers appreciating the personalized attention and relevant offers.'
        }
    ]

    return (
        <div className='bg-[#FFEFCF]  py-28 flex items-center '>
            <div className='container flex items-center mx-auto mt-20 sm:mt-0' >
                <div className='flex flex-col justify-center md:flex-row lg:gap-24 xl:gap-44 2xl:gap-96'>
                    <div className='block mt-12 md:mt-28 lg:mt-12 md:hidden'>
                        <Image src='/casestudy/digital_marketing_strategy_email_rocket_launch [Converted] 2.png' alt="" className='md:w-[500px] w-[340px]  lg:ml-0 xl:ml-28  flex justify-center items-center sm:p-0 p-3' width={400} height={400} />
                    </div>
                    <div className='text-[#000000] max-w-[600px] p-4  md:p-10 md:mt-20 mt-9 font-dm-sans'>
                        <p className=' text-[30px] md:text-[22px]  lg:text-[40px] font-bold w-5/5 md:w-[290px] lg:w-[100px]    leading-tight tracking-tighter text-[#FF6410]' >03. Results</p>
                        <ul className='space-y-4 list-decimal list-inside'>

                            {data && data.map((data) => (
                                <li className='text-[24px] lg:text-[18px] md:text-[15px] mt-10 md:w-[240px] lg:w-[450px]  leading-tight  tracking-tighter'>
                                    {data.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='hidden mt-12 md:mt-28 lg:mt-12 md:block'>
                        <Image src='/casestudy/digital_marketing_strategy_email_rocket_launch [Converted] 2.png' alt="" className='md:w-[500px] w-[340px]  lg:ml-0 xl:ml-27  flex justify-center items-center sm:p-0 p-3' width={400} height={400} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results