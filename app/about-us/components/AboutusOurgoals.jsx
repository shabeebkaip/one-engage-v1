import Image from 'next/image';


const AboutusOurgoals = () => {
  return (
    <div className='bg-[#F4F4F4]'>
      <div className="container mx-auto">
        <div className="py-12 lg:py-20 ">
          <div className='flex flex-col gap-10 pt-16 pb-24'>
            <div className="md:text-7xl text-[40px] font-bold text-[#FF6410] text-center font-poppins">Our Goals</div>
            <div className="flex justify-center w-full text-2xl font-bold text-center font-dm-sans"><p className='w-[60%]'>We have set several brand goals that reflect our commitment to excellence and our vision for the future. Our goals include:</p></div>
          </div>
          <div className="grid grid-cols-1 px-10 text-lg font-medium font-dm-sans lg:grid-cols-2 gap-11 sm:px-28">
            <div className="flex flex-col gap-6 justify-around xl:h-[309px] xl:w-[487px]  mx-auto bg-[#FFEFCF] p-10  rounded-l-[33px] rounded-t-[33px] shadow-md">
              <div className=''>
                <Image
                  src="/aboutus/WhiteBall.png"
                  alt="right image"
                  width={1000}
                  height={500}
                  className="sm:h-[60px] sm:w-[60px] h-[40px] w-[40px] object-contain "
                />
              </div>
              <div><p>Lead the industry: We seek to share business process outsourcing services that apply expertise, reliability, and commitment to delivering exceptional experiences for your business.</p></div>
            </div>
            <div className="flex flex-col gap-6 justify-around xl:h-[309px] xl:w-[487px]  mx-auto bg-[#FFEFCF] p-10 rounded-l-[33px] rounded-t-[33px] shadow-md">
              <div className='flex flex-row'>
                <Image
                  src="/aboutus/WhiteBall.png"
                  alt="right image"
                  width={1000}
                  height={500}
                  className="sm:h-[60px] sm:w-[60px] h-[40px] w-[40px] object-contain "
                />

                <Image
                  src="/aboutus/OrangeBall.png"
                  alt="right image"
                  width={1000}
                  height={500}
                  className="sm:h-[60px] sm:w-[60px] h-[40px] w-[40px] object-contain "
                />
              </div>
              <div><p>Foster strong partnerships: We seek to build trust-based, long-lasting partnerships with your organisation, based on open communication, shared goals, and mutual success.</p></div>
            </div>
            <div className="flex flex-col gap-6 justify-around xl:h-[309px] xl:w-[487px] mx-auto bg-[#FFEFCF] p-10 rounded-l-[33px] rounded-t-[33px] shadow-md">
              <div className='flex flex-row'>
                <Image
                  src="/aboutus/WhiteBall.png"
                  alt="right image"
                  width={1000}
                  height={500}
                  className="sm:h-[60px] sm:w-[60px] h-[40px] w-[40px] object-contain "
                />
                <Image
                  src="/aboutus/OrangeBall.png"
                  alt="right image"
                  width={1000}
                  height={500}
                  className="sm:h-[60px] sm:w-[60px] h-[40px] w-[40px] object-contain "
                />
                <Image
                  src="/aboutus/YellowBall.png"
                  alt="right image"
                  width={1000}
                  height={500}
                  className="sm:h-[60px] sm:w-[60px] h-[40px] w-[40px] object-contain "
                />
              </div>
              <div><p>Drive innovation: We strive for technological advancements and better ways to deliver services and address any future challenges.</p></div>
            </div>
            <div className="flex flex-col gap-6 justify-around xl:h-[309px] xl:w-[487px] mx-auto bg-[#FFEFCF] p-10 rounded-l-[33px] rounded-t-[33px] shadow-md">
              <div className='flex flex-row '>
                <Image
                  src="/aboutus/WhiteBall.png"
                  alt="right image"
                  width={1000}
                  height={500}
                  className="sm:h-[60px] sm:w-[60px] h-[40px] w-[40px] object-contain "
                />
                <Image
                  src="/aboutus/OrangeBall.png"
                  alt="right image"
                  width={1000}
                  height={500}
                  className="sm:h-[60px] sm:w-[60px] h-[40px] w-[40px] object-contain "
                />
                <Image
                  src="/aboutus/YellowBall.png"
                  alt="right image"
                  width={1000}
                  height={500}
                  className="sm:h-[60px] sm:w-[60px] h-[40px] w-[40px] object-contain "
                />
                <Image
                  src="/aboutus/OrangeBall.png"
                  alt="right image"
                  width={1000}
                  height={500}
                  className="sm:h-[60px] sm:w-[60px] h-[40px] w-[40px] object-contain "
                />
              </div>
              <div><p>Global reach: We operate worldwide, providing tailored solutions for different cultures, industries, and languages, while maintaining consistent quality and operational excellence.</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutusOurgoals
