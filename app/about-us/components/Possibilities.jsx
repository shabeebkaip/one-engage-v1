import Image from 'next/image'

const Possibilities = () => {
  return (
    <div className="">
      <div className='container mx-auto'>
        <div className="w-[70%] font-bold md:text-xl lg:text-[24px] h-[500px] mx-auto flex justify-center items-center text-center ">
          At One Engage, we are dedicated to creating a positive impact through
          our services and delivering exceptional results for our clients. Join us
          on this journey and experience the difference of a trusted outsourcing
          partner committed to your success.
        </div>
      </div>

      <div className='bg-[#FFEFCF]'>
        <div className='container py-10 mx-auto md:py-20'>
          <div className='flex flex-col gap-5 '>
            <div className=''>
              <div className='flex flex-col justify-center h-full gap-5 text-center'>
                <div className='md:text-7xl text-[40px] font-bold text-[#FF6410]'>
                  <h1 className=''>
                    DISCOVER LIMITLESS <br /> POSSIBILITIES
                  </h1>
                </div>
              </div>
              <div className='flex justify-center pt-10'>
                <button className='border-[#FF6410] border border-solid p-3 rounded-[30px] px-8 flex gap-3'>
                  <p className='font-bold text-[#FF6410]'>Speak with our experts</p>
                  <p className='font-bold text-[#FF6410]'>&rarr;</p>
                </button>
              </div>

            </div>
          </div>
        </div>
        <div className='container mx-auto px-10 py-10'>
          <div className='items-end hidden gap-3 md:flex md:justify-start'>
            <Image width={2000} height={2000} src="/other1.png" alt='Image' className='w-[80px] h-[80px]  rounded-[23px]' />
            <div className='bg-[#D6C3B6] w-12 h-12 md:w-[80px] md:h-20 border rounded-full'></div>
          </div>
          <div className='flex justify-end px-5 md:hidden'>
            <Image width={2000} height={2000} src="/aboutPossible.png" alt='Image' className='w-[160px] h-[80px] rounded-[23px]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Possibilities;
