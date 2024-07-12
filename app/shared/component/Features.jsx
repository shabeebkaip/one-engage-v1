import { SwiperSlider } from "./SwiperSlider"





const Features = ({datas}) => {
    return (
        <div className='container mx-auto my-10'>
            {/* <p className='flex items-center justify-center text-[40px]  md:text-[60px] font-bold text-[#FF6410] p-10 text-center leading-none tracking-tighter font-poppins'>Explore our key packages:</p> */}
            <div className='container flex-col items-center justify-center hidden mx-auto overflow-hidden md:block md:flex-row'>    
                <SwiperSlider datas={datas}/>
            </div>

            {/* smaller screen */}
            <div className='flex flex-col items-center justify-center md:hidden font-dm-sans'>
                <div className='container flex flex-col items-center justify-center gap-5 mx-auto text-center md:flex-row'>
                    {datas.map((da) => (
                        <div className="w-[80%]">
                            <div className='bg-[#FFDF9F] border rounded-3xl flex flex-col mx-auto w-full items-center justify-center p-3  cursor-pointer gap-5'>
                                <div className='max-w-[200px]'>
                                    <img src={da.image} alt="" className='' />
                                </div>
                                <div className='flex items-center justify-center'>
                                    <p className='text-[24px]  w-[60%]  font-bold leading-tight tracking-tighter flex justify-center items-center '>{da.head}</p>
                                </div>
                                <div className='w-full mt-3'>
                                    <p className='text-[18px] w-full '>{da.para}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Features