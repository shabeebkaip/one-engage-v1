import React from 'react'
import Hero from '../components/Hero'
import BlogSlider from '../components/BlogSlider'
import BlogPageContent from '../components/BlogPageContent'
import SubscribeNow from '../components/SubscribeNow'
import MobSlider from '../components/MobSlider'

const Blog = () => {
  return (
    <div>
      <Hero/>
      <BlogPageContent/>
      <div className='lg:flex hidden'><BlogSlider/></div>
      <div className='lg:hidden flex'><MobSlider/></div>
      <SubscribeNow/>
    </div>
  )
}

export default Blog
