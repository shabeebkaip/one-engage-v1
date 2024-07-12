import Image from 'next/image'


const AboutusCulture = () => {
    return (
        <div>
            <div className="container hidden gap-10 mx-auto md:grid">
                <div className='md:text-7xl text-5xl font-bold text-[#FF6410] py-20 text-center font-poppins '><p>    OUR CULTURE</p></div>
                <div className="flex flex-col justify-center gap-1 py-16 font-dm-sans font-normal text-center text-white md:flex-row xl:text-lg lg:text-sm">
                    <div className="col-span-1 grid grid-rows-2 xl:h-[796px] lg:h-[600px] h-[400px] xl:w-[398px] lg:w-[300px] w-[200px] ">
                        <div className='flex flex-col justify-center text-[#FF6410] xl:p-9 gap-5 lg:p-5 items-center' style={{ backgroundImage: `url(${'/aboutus/ourCultureBall1.png'})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                            <p className='font-bold xl:text-7xl lg:text-5xl'>1</p>
                            <p className='font-bold lg:text-[15px] mx-2 text-[10px]'>Our business is defined by our commitment to collaboration, social and technological innovation, constructive customer fulfillment, and building a seamless business.</p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-5 xl:p-9 lg:p-5' style={{ backgroundImage: `url(${'/aboutus/ourCultureBall4.png'})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                            <p className='font-bold xl:text-7xl lg:text-5xl'>4</p>
                            <p className='font-bold lg:text-[15px] mx-2 text-[10px]'>We commit to constructive customer fulfillment, exceeding customer expectations, and building long-term partnerships based on trust and mutual success.</p>
                        </div>
                    </div>
                    <div className="col-span-2 md:grid grid-cols-2 xl:h-[796px] lg:h-[600px] h-[400px] xl:w-[796px] lg:w-[600px] w-[400px] hidden" style={{ backgroundImage: `url(${'/aboutus/vector.png'})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                        <div className='flex flex-col items-center justify-center gap-5 xl:p-9 lg:p-5'>
                            <p className='font-bold xl:text-7xl lg:text-5xl'>2</p>
                            <p className='font-bold lg:text-[15px]  text-[10px]'>We foster an inclusive work environment where teamwork and shared knowledge drive innovative solutions for our partners.</p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-5 xl:p-9 lg:p-5 xl:mt-0 ' style={{ backgroundImage: `url(${'aboutus/YellowBall.png'})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                            <p className='font-bold xl:text-7xl lg:text-5xl'>3</p>
                            <p className='font-bold lg:text-[15px] mx-2 text-[10px]'>We encourage social and technological innovation to stay ahead of industry trends and deliver cutting-edge services.</p>
                        </div>
                        <div className='grid items-center justify-center ' style={{ backgroundImage: `url(${'/aboutus/WhiteBall.png'})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}> <img src={'aboutus/logo.png'} alt="" className='w-[80%] mx-auto' /></div>
                        <div className='flex flex-col items-center justify-center gap-5 xl:p-9 lg:p-5'>
                            <p className='font-bold xl:text-7xl lg:text-5xl'>5</p>
                            <p className='font-bold lg:text-[15px] mx-2 text-[10px]'>We continue the practices that ensure seamless business processes for our stakeholders, to safeguard sustainable and decisive growth.</p>
                        </div>
                    </div>
                </div>
                <div className='flex p-10'>
            <Image width={2000} height={2000} src="/Culture.png" alt='Image' className=' rounded-[23px]' />
          </div>
            </div>
            <div className='grid md:hidden'>
                <div className='md:text-7xl text-5xl font-bold text-[#FF6410] p-14 text-center font-poppins '><p>    OUR CULTURE</p></div>
                <div className='w-[60%] mx-auto'>
                    <Image
                        src="/aboutus/logo.png"
                        alt="right image"
                        width={1000}
                        height={500}
                        className="object-contain h-full "
                    />
                </div>
                <div className='grid grid-rows-5 gap-4 pt-4 pb-4 font-dm-sans'>
                    <div className='bg-[#FFEFCF] sm:w-[370px] w-[320px] sm:h-[370px] h-[320px] flex flex-col  gap-5  pt-7 mx-auto rounded-full'>
                        <div className='text-center font-bold text-6xl text-[#FF6410] items-center'>1</div>
                        <div className='font-semibold w-[80%] text-center mx-auto text-lg text-[#FF6410]'>Our business is defined by our commitment to collaboration, social and technological innovation, constructive customer fulfillment, and building a seamless business.</div>
                    </div>
                    <div className='bg-[#FF6410] sm:w-[370px] w-[320px] sm:h-[370px] h-[320px] flex flex-col gap-5  pt-7  mx-auto rounded-full'>
                        <div className='text-center font-bold text-6xl text-[#FFFF] items-center'>2</div>
                        <div className='font-semibold w-[80%] text-center mx-auto text-lg text-[#FFFF]'>We foster an inclusive work environment where teamwork and shared knowledge drive innovative solutions for our partners.</div>
                    </div>
                    <div className='bg-[#FBBC1D] sm:w-[370px] w-[320px] sm:h-[370px] h-[320px] flex flex-col gap-5  pt-7  mx-auto rounded-full'>
                        <div className='text-center font-bold text-6xl text-[#FF6410] items-center'>3</div>
                        <div className='font-semibold w-[80%] text-center mx-auto text-lg text-[#FFFF]'>We encourage social and technological innovation to stay ahead of industry trends and deliver cutting-edge services.</div>
                    </div>
                    <div className='bg-[#FEA351] sm:w-[370px] w-[320px] sm:h-[370px] h-[320px] flex flex-col gap-5  pt-7  mx-auto rounded-full'>
                        <div className='text-center font-bold text-6xl text-[#FFFF] items-center'>4</div>
                        <div className='font-semibold w-[80%] text-center mx-auto text-lg text-[#FFFF]'>We commit to constructive customer fulfillment, exceeding customer expectations, and building long-term partnerships based on trust and mutual success.</div>
                    </div>
                    <div className='bg-[#FF6410] sm:w-[370px] w-[320px] sm:h-[370px] h-[320px] flex flex-col  gap-5  pt-7 mx-auto rounded-full'>
                        <div className='text-center font-bold text-6xl text-[#FFFF] items-center'>5</div>
                        <div className='font-semibold w-[80%] text-center mx-auto text-lg text-[#FFFF]'>We continue the practices that ensure seamless business processes for our stakeholders, to safeguard sustainable and decisive growth.</div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default AboutusCulture
