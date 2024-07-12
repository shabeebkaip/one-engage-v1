import Image from "next/image"

const Unlock = () => {
  return (
    <div className='bg-gradient-to-tr from-[#FFA350] to-[#e4d172]'>
      <div className='container mx-auto mt-10'>
        <div className='flex flex-col md:flex-row '>
          <div className='text-white md:w-[50%] w-full p-10 mt-20 flex flex-col gap-10'>
            <p className='lg:text-[70px] md:text-[50px]  text-[45px] font-bold md:leading-none leading-10 tracking-tighter md:w-auto  uppercase font-poppins'>
              <span class="md:hidden block leading-10">Unlock</span>
              <span class="md:hidden block leading-10">your world,</span>
              <span class="md:hidden block leading-10">today</span>
              <span class="hidden md:block">Unlock your world, today</span>
            </p>
            <div>
              <button className='border-white border border-solid p-3 rounded-[30px] px-8 flex gap-3 font-poppins'>
                <p className='font-bold text-[#fff]'>Get A Quote</p>
                <p className='font-bold text-[#fff]'>&rarr;</p>
              </button>
            </div>
          </div>
          <div className=' md:flex items-end w-[50%] hidden'>
            <div className="h-full">
              <Image width={2000} height={2000} src="/homeman.png" alt='Image' className='h-full' />
            </div>
          </div>
          <div className='flex items-end w-full  md:hidden'>
            <div className="h-full">
              <Image width={2000} height={2000} src="/homegirl.png" alt='Image' className='h-full' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Unlock