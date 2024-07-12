
import Image from 'next/image';
const Hero = () => {
  return (
    <div className='container mx-auto'>
      <div className="grid xl:px-0  px-4 md:grid-cols-2 md:p-10 grid-cols-1 ">
        <div className='md:h-[570px]'>
        <Image
      src="/aboutus/herobgleft.png"
      alt="right image"
      width={1000}
      height={500}
      className="h-full object-contain "
      />
        </div>
        <div className='md:h-[570px] md:flex hidden'>
        <Image
      src="/aboutus/herobgRight.png"
      alt="right image"
      width={1000}
      height={500}
      className=" object-contain "
      />
        </div>
        <div className='md:h-[570px] md:hidden flex'>
        <Image
      src="/aboutus/mobherobgRight.png"
      alt="right image"
      width={1000}
      height={500}
      className=" object-contain overflow-hidden "
      />
        </div>
      </div>
    </div>
  );
}

export default Hero;
