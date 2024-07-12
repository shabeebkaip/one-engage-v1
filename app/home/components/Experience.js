import Image from "next/image";

const experience = () => {

    const data = [
        {
            image: `/home/Group 427319882.png`,
            head: `Global Perspective and Tailored Solutions:`,
            para: `We understand the unique needs of businesses operating in different regions. Our global perspective enables us to provide customized outsourcing solutions that resonate with local markets.`
        },
        {
            image: `/home/Group.png`,
            head: `Innovative Approaches and Advanced Technologies:`,
            para: `We leverage innovative strategies and cutting-edge technologies to optimize customer engagement, enhance operational efficiency, and stay ahead in a rapidly evolving digital landscape.`
        }, {
            image: `/home/Group (1).png`,
            head: `ISO 9001 and ISO 10002 Certifications:`,
            para: `Our commitment to quality is evident through our ISO certifications, ensuring that we adhere to the highest standards of service excellence.`
        }
    ]
    return (
        <div className='bg-[#FFEFCF] flex flex-col justify-center items-center md:p-20'>
            <div className='container p-10 mx-auto '>
                <p className='flex items-center justify-center text-[40px] md:text-[60px] font-poppins font-bold text-[#FF6410] md:leading-tight leading-none tracking-tighter'>Experience the Difference</p>
                <div className='flex items-center justify-center mt-8'>
                    <p className=' text-[24px] max-w-[900px] md:text-center font-bold leading-tight tracking-tighter font-dm-sans'>One Engage is dedicated to delivering exceptional customer engagement solutions that set us apart from the competition. When you choose One Engage, you'll experience the following:</p>
                </div>
            </div>
            <div className='grid items-center justify-center gap-8 p-3 mt-12 font-dm-sans grid-col md:grid-cols-3'>
                {data.map((item) => (
                    <div className='flex flex-col md:max-w-[350px] p-2 md:justify-start md:items-center justify-start gap-10 md:h-full'>
                        <div className='w-[160px] h-[80px] rounded-[23px]'>
                            <Image src={item.image} className="w-full h-full" width={1500} height={1500} />
                        </div>
                        <p className='text-[24px]  font-bold md:leading-tight leading-none font-dm-sans'>{item.head}</p>
                        <p className='text-[18px] italic font-dm-sans'>{item.para}</p>
                    </div>
                ))}


            </div>
        </div>
    );
}

export default experience;