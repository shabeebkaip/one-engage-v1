import Image from 'next/image';

const Description = () => {
  return (
    <div className='bg-[#FFEFCF]'>
      <div className="container mx-auto h-[400px] flex flex-col items-center justify-center">
        <div className="flex-row justify-between hidden px-16 py-10 sm:flex">
          <div className='flex flex-row'>
            <Image
              src="/aboutus/OrangeBall.png"
              alt="right image"
              width={1000}
              height={500}
              className="h-[60px] w-[60px] object-contain "
            />
            <Image
              src="/aboutus/WhiteBall.png"
              alt="right image"
              width={1000}
              height={500}
              className="h-[60px] w-[60px] object-contain "
            />
          </div>
          <div className='flex flex-row'>
            <Image
              src="/aboutus/WhiteBall.png"
              alt="right image"
              width={1000}
              height={500}
              className="h-[60px] w-[60px] object-contain "
            />
            <Image
              src="/aboutus/OrangeBall.png"
              alt="right image"
              width={1000}
              height={500}
              className="h-[60px] w-[60px] object-contain "
            />
            <Image
              src="/aboutus/YellowBall.png"
              alt="right image"
              width={1000}
              height={500}
              className="h-[60px] w-[60px] object-contain "
            />
          </div>
        </div>
        <div className='flex justify-center w-full font-dm-sans'>
          <div className="items-center font-bold text-center font-dm-sans md:text-xl md:w-[70%] sm:text-lg sm:p-0 md:pt-8 pb-[100px]">
            The use of the site is subject to Og’s Privacy Policy. You consent to the collection, use and disclosure of your information as described in this privacy policy. This policy reflects Og current business practices and is subject to change and update. In the event of any such change or update, a revised policy will be posted on the Website, with the last date of update.
          </div>
        </div>
        <div className='flex flex-row justify-between p-10 sm:hidden'>
          <div className='flex flex-row'>
            <Image
              src="/aboutus/OrangeBall.png"
              alt="right image"
              width={1000}
              height={500}
              className="h-[50px] w-[50px] object-contain "
            />
            <Image
              src="/aboutus/YellowBall.png"
              alt="right image"
              width={1000}
              height={500}
              className="h-[50px] w-[50px] object-contain "
            />
          </div>
          <div>
            <Image
              src="/aboutus/WhiteBall.png"
              alt="right image"
              width={1000}
              height={500}
              className="h-[50px] w-[50px] object-contain "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
