import React from "react";
import About from "../../../shared/component/About";
import Features from "../../../shared/component/Features";
import MeetExpert from "../../../shared/component/MeetExpert";
import LearnMore from "../../../shared/component/LearnMore";
import NextStep from "../../../shared/component/NextStep";
import Hero2 from "../../../shared/component/Hero2";
import MobHero from "../../../shared/component/MobHero";

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
const CustomerRetention = () => {
  return (
    <div>
      <div className="md:flex hidden">
        <Hero2
          heading="OUTBOUND & CUSTOMER RETENTION "
           bgImage1="/outbound-hero1.png"
          bgImage2="/outbound-hero2.png"
        />
      </div>
      <div className="md:hidden">
        <MobHero
          heading="OUTBOUND & CUSTOMER RETENTION "
          mobHero="/outbound-mob-hero.png"
          mobHero2="/outbound-mob-hero2.png"
          ballImg="/ball-img-y.png"
        />
      </div>
      <About
        color="#FFEFCF"
        textColor="#000000"
        content="We focus on driving customer loyalty and maximizing retention. "
        content2="Our strategic approach and tailored solutions help businesses build strong relationships with their customers. Explore the  services below to enhance your Outbound & Customer Retention:"
      />
      <Features datas={datas} />
      <NextStep
        color="#FFA350"
        textColor="#FFFFFF"
        color1="#FFFFFF"
        content="towards data-driven decision-making and business optimization:"
        img="/take-next-step.png"
      />
      <MeetExpert content="Schedule a consultation with one of our experts to discuss your analytics and reporting needs. We'll help you understand how our services can leverage data to drive business growth and success." />
      <LearnMore
        content="Discover the full range of our Quality Assurance services and understand how we can assist you in delivering consistent and exceptional service experiences. Explore our methodologies, success stories, and the value we can bring to your business."
        img="/interLearn.png"
      />
    </div>
  );
};

export default CustomerRetention;
