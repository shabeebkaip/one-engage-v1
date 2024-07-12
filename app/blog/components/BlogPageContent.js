import Image from 'next/image';

const BlogPageContent = () => {
  return (
    <div className='bg-[#FFEFCF]'>
      <div className="container mx-auto h-[500px] justify-center items-center flex flex-col">
        <div className="w-full  md:w-[70%] font-bold font-dm-sans md:text-xl lg:text-2xl sm:text-lg  md:text-center p-10 md:pt-6 items-center tracking-tight leading-6">
          <p className="hidden md:block">
            The One Engage Blog shares valuable insights,<br /> industry trends, and best practices to help<br /> businesses succeed in the dynamic world of <br />customer engagement and business process <br />outsourcing.
          </p>
          <p className="md:hidden block">
            The One Engage Blog shares valuable insights, industry trends, and best practices to help businesses succeed in the dynamic world of customer engagement and business process outsourcing.
          </p>
        </div>

        <div className="font-normal font-dm-sans md:text-xl lg:text-2xl sm:text-lg  md:hidden block md:text-center p-10 md:pt-6 items-center tracking-tight leading-6">
          <span className="">
          Explore a wealth of information to help you stay informed, make informed decisions, and stay ahead of the competition.
          </span>
        </div>

      </div>
    </div>
  )
}

export default BlogPageContent;
