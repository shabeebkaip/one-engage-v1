import React from 'react'
import Hero from '../components/Hero'
import InquiryForm from '../components/InquiryForm'
import CustomerSupport from '../components/CustomerSupport'
import HeroMob from '../components/HeroMob'

const ContactUs = () => {
  return (
    <div>
      <Hero />
      <HeroMob />
      <InquiryForm/>
      <CustomerSupport/>
    </div>
  )
}

export default ContactUs
