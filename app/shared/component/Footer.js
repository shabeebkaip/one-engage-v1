"use client"
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF } from "react-icons/fa";
import { IoIosArrowRoundForward } from 'react-icons/io';
import Image from "next/image";

const Footer = () => {

  return (
    <div className="  bg-[#FF6410]">
      <div className='hidden text-white md:block'>
        <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center container mx-auto p-10 text-[18px] gap-10 '>
          <div className=''>
            <p className='md:text-[60px] text-[40px] font-bold md:w-1/2 leading-none tracking-tighter font-poppins lg:mb-20'>Contact information</p>
            <p className='mt-5 font-dm-sans md:w-3/4 lg:mb-24'>We are here to answer any questions you may have and provide you with the information you need. Get in touch with us through the following channels:  </p>
            <div className='flex flex-row mt-12 gap-7 '>
              <Image src='/shared/phone.png' alt="" width={40} height={40} className="object-contain sm:object-fill" />
              <div className='leading-tight font-dm-sans'>
                <p>Phone:</p>
                <p>please call +10 987 654 432</p>
              </div>
            </div>
            <div className='flex flex-row mt-12 gap-7'>
              <Image src='/shared/message.png' alt="" className='object-contain sm:object-fill' width={40} height={40} />
              <div className='leading-tight font-dm-sans'>
                <p>Email:</p>
                <p className="sm:text-[18px] text-[16px]">MySupport@OneEngage.com</p>
              </div>
            </div>
            <p className='leading-tight font-dm-sans mt-9 md:w-1/2'>Alternatively, use the contact form to submit your inquiries or request a consultation. </p>
            <p className='mt-5 font-dm-sans whitespace-nowrap sm:text-[18px] text-[16px]'>Our team will respond to you promptly.</p>
            <div className='flex flex-row gap-4 mt-6'>
              <FaLinkedinIn />
              <FaTelegramPlane />
              <FaInstagram />
              <FaXTwitter />
              <FaFacebookF />
            </div>

          </div>

          <div className='container flex mx-auto text-white md:flex-col md:mt-28'>
            <div className='justify-center hidden md:flex'>
              <Image src='/shared/oneengage_logo_on_yellow 1.png' alt="" width={250} height={250} />
            </div>
            <div className='mt-14'>
              <p className='text-[24px] mt-4 p-3'>Get in touch</p>
              <div className=''>
                <input type="text" name="" id="" placeholder='Name' className="mb-4 h-[50px]  border border-solid  border-white p-1 rounded-full lg:w-[400px] md:w-[350px] bg-[#FF6410] outline-none text-white placeholder-white w-[100%]" style={{ paddingLeft: '20px' }} />
                <input type="text" name="" id="" placeholder='Email' className="mb-4 h-[50px] border border-solid  border-white p-1 rounded-full  lg:w-[400px] md:w-[350px]  bg-[#FF6410] outline-none text-white placeholder-white w-[100%]" style={{ paddingLeft: '20px' }} />
                <input type="text" name="" id="" placeholder='Subject' className="mb-4 h-[50px] border border-solid  border-white p-1 rounded-full  lg:w-[400px] md:w-[350px] bg-[#FF6410] outline-none text-white placeholder-white w-[100%]" style={{ paddingLeft: '20px' }} />
                <div className='flex flex-col w-full mb-4 '>
                  <h1>Describe your business engagement needs.</h1>
                  <textarea
                    name="subject"
                    id="subject"
                    rows="6"
                    className='pl-3 border-b border-b-white bg-[#FF6410] text-white outline-none focus:outline-none lg:w-[400px] md:w-[350px]'
                  />
                </div>
              </div>
            </div>
            <div>
              <button className='border-[#fff] border border-solid p-3 rounded-[30px] px-8 flex gap-3'>
                <p className='font-bold text-[#fff]'>Submit</p>
                <p className='font-bold text-[#fff]'>&rarr;</p>
              </button>
            </div>

          </div>


          <div className='flex flex-col md:hidden sm:block '>
            <div className='flex justify-between -mt-36'>
              <button className=' flex items-center w-[150px] gap-4  font-poppins italic justify-center text-[16px] border border-solid border-white p-1 rounded-full  ml-10 '>
                <span className='ml-4 font-bold'>Submit</span>
                <IoIosArrowRoundForward />
              </button>
            </div>
            <div className='flex flex-row justify-end mt-10 '>
              <Image src='/shared/footer.png' alt="" className='[transform:rotateY(180deg)]' width={500} height={500} />
            </div>
            <div className='flex justify-center mt-9 '>
              <Image src='/shared/oneengage_logo_on_yellow 1.png' alt="" className='w-60' width={550} height={550} />
            </div>
          </div>
        </div>
        <div className="container items-end justify-between hidden h-48 pb-10 mx-auto md:flex">
          <div className='flex flex-row justify-end gap-1 mt-4 md:mt-8 md:justify-normal'>
            <div className='bg-[#FFCB00] w-12 h-12 md:w-[80px] md:h-20 border-[#FFCB00]  rounded-full '></div>
            <div className='bg-white w-12 h-12 md:w-[80px] md:h-20 border rounded-full'></div>
          </div>
          <div className=''>
            <Image src='/shared/footer.png' alt="" className='w-96' width={250} height={250} />
          </div>
        </div>
        <div className="border-t border-white border-solid container mx-auto md:p-10 p-4 mb-4 flex md:justify-start justify-center font-poppins italic text-[14px] md:w-auto sm:w-[350px]">
          <p className='hidden font-bold md:block'>Copyright © 2023 One Engage. All rights reserved.</p>
          <div className="flex md:ml-auto gap-7">
            <p className='font-semibold cursor-pointer' onClick={() => window.location.href = "/terms-and-condition"}>Terms and Conditions</p>
            <p className='font-semibold cursor-pointer' onClick={() => window.location.href = "/privacy-policy"}>Privacy Policy</p>
          </div>
        </div>

        <div className='text-center md:hidden sm:block'>
          <p className='md:hidden font-poppins italic text-[14px] font-bold' >Copyright © 2023 One Engage.</p>
          <p className='md:hidden font-poppins italic text-[14px] font-bold'>  All rights reserved.</p>
        </div>
      </div>
      <div className='block text-white md:hidden'>
        <div className='justify-center items-center container mx-auto p-10 text-[18px] gap-10 '>
          <div className=''>
            <p className='md:text-[60px] text-[40px] font-bold md:w-1/2 leading-none tracking-tighter font-poppins lg:mb-20'>Contact information</p>
            <p className='mt-5 font-dm-sans md:w-3/4 lg:mb-24'>We are here to answer any questions you may have and provide you with the information you need. Get in touch with us through the following channels:</p>

            <div className='flex flex-row mt-12 gap-7 '>
              <Image src='/shared/phone.png' alt="" width={40} height={40} className="object-contain sm:object-fill" />
              <div className='leading-tight font-dm-sans'>
                <p>Phone:</p>
                <p>please call +10 987 654 432</p>
              </div>
            </div>

            <div className='flex flex-row mt-12 gap-7'>
              <Image src='/shared/message.png' alt="" className='object-contain sm:object-fill' width={40} height={40} />
              <div className='leading-tight font-dm-sans'>
                <p>Email:</p>
                <p className="sm:text-[18px] text-[16px]">MySupport@OneEngage.com</p>
              </div>
            </div>

            <p className='leading-tight font-dm-sans mt-9 md:w-1/2'>Alternatively, use the contact form to submit your inquiries or request a consultation.</p>
            <p className='mt-5 font-dm-sans whitespace-nowrap sm:text-[18px] text-[16px]'>Our team will respond to you promptly.</p>

            <div className='flex flex-row gap-4 mt-6'>
              <FaLinkedinIn />
              <FaTelegramPlane />
              <FaInstagram />
              <FaXTwitter />
              <FaFacebookF />
            </div>
          </div>

          <div className='container flex mx-auto text-white md:flex-col md:mt-28'>
            <div className='justify-center hidden md:flex'>
              <Image src='/shared/oneengage_logo_on_yellow 1.png' alt="" width={250} height={250} />
            </div>

            <div className='mt-14'>
              <p className='text-[24px] mt-4 p-3 font-bold'>Get in touch</p>
              <div className=''>
                <input type="text" name="" id="" placeholder='Name' className="mb-4 h-[50px] border border-solid border-white p-1 rounded-full lg:w-[400px] md:w-[350px] bg-[#FF6410] outline-none text-white placeholder-white w-[100%]" style={{ paddingLeft: '20px' }} />
                <input type="text" name="" id="" placeholder='Email' className="mb-4 h-[50px] border border-solid border-white p-1 rounded-full lg:w-[400px] md:w-[350px] bg-[#FF6410] outline-none text-white placeholder-white w-[100%]" style={{ paddingLeft: '20px' }} />
                <input type="text" name="" id="" placeholder='Subject' className="mb-4 h-[50px] border border-solid border-white p-1 rounded-full lg:w-[400px] md:w-[350px] bg-[#FF6410] outline-none text-white placeholder-white w-[100%]" style={{ paddingLeft: '20px' }} />
                <div className='flex flex-col w-full mb-4 '>
                  <h1>Describe your business engagement needs.</h1>
                  <textarea
                    name="subject"
                    id="subject"
                    rows="3"
                    className='pl-3 bg-[#FF6410] text-white outline-none focus:outline-none lg:w-[400px] md:w-[350px] border-b border-solid border-b-white'
                  />
                </div>
              </div>
            </div>

          </div>

          <div className='flex flex-col md:hidden sm:block '>
           
          <div className="flex justify-center w-full py-10">
                            <button className='border-[#fff] border border-solid p-3 rounded-[30px] px-12 flex gap-3'>
                                <p className='font-bold text-[#fff]'>Submit</p>
                                <p className='font-bold text-[#fff]'>&rarr;</p>
                            </button>
                        </div>

            <div className='flex flex-row justify-center mt-10 '>
              <Image src='/shared/footer.png' alt="" className='[transform:rotateY(180deg)] w-[80%]' width={500} height={500} />
            </div>
            <div className='flex justify-center mt-9 '>
              <Image src='/shared/oneengage_logo_on_yellow 1.png' alt="" className='w-[60%]' width={550} height={550} />
            </div>
          </div>
        </div>

        <div className="border-t border-b border-white border-solid container mx-auto md:p-10 p-4 mb-4 flex md:justify-start justify-center font-poppins italic text-[14px] md:w-auto sm:w-[350px]">
          <div className="flex justify-between w-full">
            <p className='font-semibold cursor-pointer' onClick={() => window.location.href = "/terms-and-condition"}>Terms and Conditions</p>
            <p className='font-semibold cursor-pointer' onClick={() => window.location.href = "/privacy-policy"}>Privacy Policy</p>
          </div>
        </div>


        <div className='text-center sm:block'>
          <p className='md:hidden font-poppins italic text-[14px] font-bold' >Copyright © 2023 One Engage.</p>
          <p className='md:hidden font-poppins italic text-[14px] font-bold'> All rights reserved.</p>
        </div>
      </div>

    </div>

  );
}

export default Footer;