


const Packages = () => {
    const data = [
        {
            heading1: "Silver Package",
            color:"#F4F4F4",
            price: "350",
            currency:"KWD",
            desc1: "For Small & Medium Businesses",
            month:"Monthly",
            points: [
                "250 Inbound Calls",
                "150 Outbound Calls",
                "100 Omnichannel Interactions (Websites, Apps, Social Media)",
                "Ticketing System",
                "Reports",
                "Bilingual Language (AR/EN) IVR (Interactive Voice Response)",
                "24/7 Support"
            ],
            desc2: "Join our community today and unlock a world of possibilities with our premium services! One-time payment setup fees. No complications – just pure value and benefits tailored to you. Don’t miss out on this opportunity to elevate your experience. Embrace the future with us today!"
        },
        {
            heading1: "Silver Package",
            price: "350",
            currency:"KWD",
            color:"#FFDF9F",
            month:"Monthly",
            desc1: "For Small & Medium Businesses",
            points: [
                "250 Inbound Calls",
                "150 Outbound Calls",
                "100 Omnichannel Interactions (Websites, Apps, Social Media)",
                "Ticketing System",
                "Reports",
                "Bilingual Language (AR/EN) IVR (Interactive Voice Response)",
                "24/7 Support"
            ],
            desc2: "Join our community today and unlock a world of possibilities with our premium services! One-time payment setup fees. No complications – just pure value and benefits tailored to you. Don’t miss out on this opportunity to elevate your experience. Embrace the future with us today!"
        },
        {
            heading1: "Silver Package",
            price: "350",
            currency:"KWD",
            color:"#FFEFCF",
            month:"Monthly",
            desc1: "For Small & Medium Businesses",
            points: [
                "250 Inbound Calls",
                "150 Outbound Calls",
                "100 Omnichannel Interactions (Websites, Apps, Social Media)",
                "Ticketing System",
                "Reports",
                "Bilingual Language (AR/EN) IVR (Interactive Voice Response)",
                "24/7 Support"
            ],
            desc2: "Join our community today and unlock a world of possibilities with our premium services! One-time payment setup fees. No complications – just pure value and benefits tailored to you. Don’t miss out on this opportunity to elevate your experience. Embrace the future with us today!"
        }
    ];

    return (
        <div className='container hidden mx-auto md:block'>
            <div className='flex flex-col gap-10 md:p-10 sm:p-5 '>
                <div className='w-full'>
                    <div className='flex flex-col justify-center h-full gap-5'>
                        <div className='font-bold text-[40px] text-[#FF6410] text-center'>
                            <h1 className="font-poppins">Interaction Center Packages</h1>
                        </div>
                        
                        <div className='grid grid-cols-1 gap-5 mx-5 xl:grid-cols-3 lg:grid-cols-2 '>
                            {data.map((item, index) => (
                                <div className={`flex flex-col gap-3 p-5 rounded-[23px] bg-[${item.color}] shadow-lg font-dm-sans`} key={index}>
                                    <h1 className="font-bold text-center text-[25px]">{item.heading1}</h1>
                                    <h1 className="text-center font-bold text-[#FF6410] text-[35px] font-poppins">{item.price}{item.currency}</h1>
                                    <h1 className="font-bold text-center text-[25px]">{item.month}</h1>
                                    <p className="font-medium text-center">{item.desc1}</p>
                                    <div>
                                        {item.points.map((listItem, idx) => (
                                                <li className="font-bold" key={idx}>{listItem}</li>
                                        ))}
                                    </div>
                                    <p>{item.desc2}</p>
                                    <div className="flex justify-center">
                                        <button className='border-[#FF6410] border border-solid p-3 rounded-[30px] px-8 flex gap-3'>
                                            <p className='font-bold text-[#FF6410]'>Register Now!</p>
                                            <p className='font-bold text-[#FF6410]'>&rarr;</p>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Packages;
