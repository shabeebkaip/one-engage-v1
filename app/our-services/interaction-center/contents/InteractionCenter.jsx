import React from "react";
import About from "../../../shared/component/About";
import MeetExpert from "../../../shared/component/MeetExpert";
import Features from "../../../shared/component/Features";
import Packages from "../../../shared/component/Packages";
import LearnMore from "../../../shared/component/LearnMore";
import MobHero from "../../../shared/component/MobHero";
import Hero2 from "../../../shared/component/Hero2";
import NextStep from "../../../shared/component/NextStep";

const datas = [
  {
    image: `/home/IMG_7122.png`,
    head: `Interaction Center:`,
    para: `Seamless customer interactions across multiple channels.`,
  },
  {
    image: `/home/3d-render-customer-leave-feedback-on-phone-screen copy.png`,
    head: `Outbound&Customer Retention: `,
    para: `Seamless customer interactions across multiple channels.`,
  },
  {
    image: `/home/IMG_7115.png`,
    head: `Quality Assurance:`,
    para: `Ensure service excellence and customer satisfaction.`,
  },

  {
    image: `/home/folder-with-documents-icon-sign-or-symbol-background-3d-illustration.png`,
    head: `Analytics& Reporting:`,
    para: `Gain valuable insights for informed decision-making .`,
  },
  {
    image: `/home/44_Suitcase 2.png`,
    head: `Agent Type: `,
    para: `Tailored solutions with dedicated, specialized agents.`,
  },
  {
    image: `/home/Demand 2.png`,
    head: `Account Management:`,
    para: `Proactive support for an effective partnership.`,
  },

  {
    image: `/home/m001t0310_g_light_31aug22.png`,
    head: `Other Services:`,
    para: `Comprehensive solutions to meet your needs.`,
  },
];

const InteractionCenter = () => {
  return (
    <div>
      <div className="hidden md:flex">
        <Hero2
          heading="INTERACTION CENTER"
          bgImage1="/interaction-center-hero1.png"
          bgImage2="/interaction-center-hero2.png"
        />
      </div>
      <div className="md:hidden">
        <MobHero
          heading="INTERACTION CENTER"
          mobHero="/interactioin-mob-hero.png"
          mobHero2="/interactioin-mob-hero2.png"
          ballImg="/ball-img-y.png"
        />
      </div>
      <About
        color="#F4F4F4"
        textColor="#000000"
        content="Welcome to our Interaction Center, where seamless customer interactions across multiple channels are our top priority.   "
        content2="Our dedicated team and advanced technology enable us to deliver exceptional customer engagement solutions. Explore the following services that fall under our Interaction Center:"
      />
      <Features datas={datas} />  
      <Packages />
      <div className="block md:hidden">
      <NextStep
        link="/our-services/interaction-center/packages"
        color="#F4F4F4"
        textColor="#FF6410"
        color1="#000000"
        content="towards data-driven decision-making and business optimization:"
        img="/take-next-step.png"
      />
      </div>
      <MeetExpert content="Schedule a consultation with one of our experts to discuss your analytics and reporting needs. We'll help you understand how our services can leverage data to drive business growth and success." />
      <LearnMore
        content="Discover the full range of our Quality Assurance services and understand how we can assist you in delivering consistent and exceptional service experiences. Explore our methodologies, success stories, and the value we can bring to your business."
        img="/interLearn.png"
      />
    </div>
  );  
};

export default InteractionCenter;
