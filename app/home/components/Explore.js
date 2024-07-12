

import {  SwiperSlider } from "../../shared/component/SwiperSlider"


const datas = [
    {
        image:`/home/IMG_7122.png`,
        head: `Interaction Center:`,
        para: `Seamless customer interactions across multiple channels.`
    },
    {
        image: `/home/3d-render-customer-leave-feedback-on-phone-screen copy.png`,
        head: `Outbound & Customer Retention: `,
        para: `Drive customer loyalty and maximize retention.`
    },
    {
        image: `/home/IMG_7115.png`,
        head: `Quality Assurance:`,
        para: `Ensure service excellence and customer satisfaction.`
    },

    {
        image: `/home/folder-with-documents-icon-sign-or-symbol-background-3d-illustration.png`,
        head: `Analytics& Reporting:`,
        para: `Gain valuable insights for informed decision-making .`
    },
    {
        image: `/home/44_Suitcase 2.png`,
        head: `Agent Type: `,
        para: `Tailored solutions with dedicated, specialized agents.`
    },
    {
        image: `/home/Demand 2.png`,
        head: `Account Management:`,
        para: `Proactive support for an effective partnership.`
    },
   
    {
        image: `/home/m001t0310_g_light_31aug22.png`,
        head: `Other Services:`,
        para: `Comprehensive solutions to meet your needs.`
    },
]

const Explore = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='flex items-center justify-center text-[40px]  md:text-[60px] font-bold text-[#FF6410] px-10 py-20 text-center leading-none tracking-[.75px] font-poppins'>Explore our key packages:</h1>
            <div className='container flex-col items-center justify-center hidden mx-auto overflow-hidden md:block md:flex-row'>    
                <SwiperSlider datas={datas}/>
            </div>

            {/* smaller screen */}
            <div className='flex flex-col items-center justify-center md:hidden '>
                <div className='container flex flex-col items-center justify-center mx-auto text-center md:flex-row'>
                    {datas.map((da) => (
                        <div className='w-full p-2'>
                            <div className='bg-[#FFDF9F] border rounded-3xl flex flex-col  items-center justify-center p-5 m-3    cursor-pointer'>
                                <div className='max-w-[200px]'>
                                    <img src={da.image} alt="" className='' />
                                </div>
                                <div className='flex items-center justify-center'>
                                    <p className='text-[24px] md:w-1/2 w-[70%]  font-bold leading-tight tracking-tighter flex justify-center items-center font-dm-sans'>{da.head}</p>
                                </div>
                                <div className='mt-3'>
                                    <p className='text-[18px] font-dm-sans'>{da.para}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Explore