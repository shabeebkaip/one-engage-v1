import React from 'react'
import Hero from '../components/Hero'
import AboutOurService from '../components/AboutOurService'
import InteractionCenter from '../components/InteractionCenter'
import Outbound from '../components/Outbound'
import QualityAssurance from '../components/QualityAssurance'
import AgentType from '../components/AgentType'
import Analytics from '../components/Analytics'
import OtherService from '../components/OtherService'
import ExploreService from '../components/ExploreService'
import AccountMangement from '../components/AccountMangement'

const OurService = () => {
  return (
    <div className=''>
      <Hero/>
      <AboutOurService/>
      <InteractionCenter/>
      <Outbound/>
      <QualityAssurance/>
      <Analytics/>
      <AgentType/>
      <AccountMangement/>
      <OtherService/>
      <ExploreService/>
    </div>
  )
}

export default OurService