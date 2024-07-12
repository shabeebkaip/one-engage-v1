
const Cards = () => {
  const cardData =[
      {
          number: '100%' ,
          tittle: 'Dedication',
          description:'One Engage goes above and beyond to leverage technology and processes to deliver exceptional results.'
  
      },
      {
          number: '360°' ,
          tittle: 'Engagement',
          description:'One Engage goes above and beyond to leverage technology and processes to deliver exceptional results.'
  
      },
      {
          number: '24/7' ,
          tittle: 'Global Support',
          description:'One Engage goes above and beyond to leverage technology and processes to deliver exceptional results.'
  
      }
  ]
return (
  <div className="container mx-auto p-10">
    <div className=" mx-auto grid md:grid-cols-3 sm:grid-cols-1 gap-9 2xl:px-20 ">
    {cardData.map((data)=>(
      <div key={data} className="  bg-[#FF6410] text-white rounded-xl xl:h-[420px] md:h-[350px] h-[422px] 2xl:w-[340px] lg:p-10 md:p-5 p-16 mx-auto ">
       <div className="flex flex-col gap-5 font-dm-sans">
          <div>
              <p className="text-[40px] text-center font-medium">{data.number}</p>
              <p className="text-[24px] text-center font-medium">{data.tittle}</p>
          </div>
          <div className="border-b-2 border-white w-1/5 pt-10 mx-auto  "></div>
          <div className="text-center xl:p-6"><p>{data.description}</p></div>
          
       </div>
     
       
      </div>
    ))}
    </div>
  </div>
)
}


export default Cards
