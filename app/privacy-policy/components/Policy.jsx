import Image from "next/image";

const Policy = () => {
  return (
    <div className="container mx-auto font-dm-sans ">
      <div className="flex flex-col gap-5">
        <div className="p-5 section-1 md:p-10 ">
          <h1 className="p-10 text-3xl font-bold text-center font-dm-sans">
            ACCEPTANCE OF COOKIES
          </h1>
          <p className="font-bold leading-6 text-[18px]">
            Og places cookies on your computer when you visit our websites. You
            can determine the extent to which cookies are enabled or disabled by
            means of settings on your computer. Og assumes that you agree to
            cookies being placed on your computer if your browser is set to
            allow them
          </p>
        </div>
        <div className="flex flex-col gap-3 px-5 section-2 md:px-10">
          <h1 className="font-bold text-[#FFA350] leading-6 text-2xl">
            Sharing of Personal Information
          </h1>
          <p className="font-bold leading-6 text-[18px]">
            Except as outlined on the Web Sites, Og never provides the Personal
            Information to third parties without a User's consent. Og may also
            disclose Personal Information in special cases when we have reason
            to believe that disclosing this information is necessary to
            identify, contact or bring legal action against someone who may be
            violating the Web Site's Terms of Use or may be violating. Og may
            also disclose or give access to Personal Information when we believe
            in good faith that the law requires it. Og only collects Personal
            Information to the extent deemed necessary to serve its legitimate
            business purposes, and it uses appropriate security technology to
            ensure the security, integrity, and privacy of all Personal
            Information as it deems appropriate
          </p>
        </div>
        <div className="flex flex-col gap-3 px-5 section-2 md:px-10">
          <h1 className="font-bold text-[#FFA350] leading-6 text-2xl">Scam and fraud alert</h1>
          <p className="font-bold leading-6 text-[18px]">
            At Og, we take protecting our customers' sensitive information
            seriously and are constantly monitoring our information and data to
            prevent fraudulent or suspicious behavior. Please be aware of and
            avoid fraudulent communications purporting to be on behalf of Og.
            Attempts have been made to defraud Internet shoppers by the
            unauthorized use of the Og name and brand via email communications
            and graphics which appear, on the surface, to have originated from
            Og.Please be advised that Og does not request payment in this
            manner. Og only collects money due for official Og-related services.
            The security of your personal information is important to us. At Og,
            we recognize industry standards and employ appropriate
            administrative, technical, and physical security safeguards to
            protect the personal information you provide against accidental,
            unlawful, or unauthorized destruction, loss, alteration, access,
            disclosure, use, and other unlawful forms of processing. We
            continually invest in the latest world-class technologies to
            minimize all potential risks for the benefit of our customers, and
            we remain committed to ensuring we meet the most stringent security
            requirements and fostering a security culture within our
            organization. Our corporate website and mobile App use several
            security techniques including secure servers. All your personal
            information, including your credit card details, is encrypted before
            leaving your browser or device. Our payment platform has also been
            certified for compliance with payment card and data security
            industry standards. Og will keep these measures under review and
            enhance them from time to time as necessary. It is important for you
            to protect against unauthorized access to your login information,
            including your password. Please note that no method of transmission
            over the Internet, or method of electronic storage, is 100% secure.
            Therefore, Og cannot guarantee the absolute security of your
            personal information.
          </p>
        </div>
        <div className="flex flex-col gap-3 px-5 section-2 md:px-10">
          <h1 className="font-bold text-[#FFA350] text-2xl leading-6">Types of Fraud</h1>
          <p className="font-bold leading-6 text-[18px]">
            Fraudulent Emails and Email Scams: These are the most common online
            scams. Such emails attempt to trick you by pretending to come from a
            reputable source, such as from Og. They will try to get you to share
            sensitive personal, account information or send a payment. They may
            also ask you to enroll in winning a prize or entering a competition.
            We urge customers to be suspicious of any request not coming
            directly from Og. Identity Theft: This occurs when someone tricks
            you into disclosing/providing personal, financial, or account
            information. Posing as well-known companies, information thieves
            usually send out e-mails or contact you by telephone asking you to
            reply or direct you to a fraudulent web page that asks you to
            provide personal information, such as your credit card number or
            account password, or even your Og credentials. Credit Card Fraud: In
            some instances, credit card fraud occurs when someone's physical
            credit card is lost or stolen by another party who uses it. Credit
            card fraud is driven primarily by the compromise of credit card
            account data during their normal course of usage. Stolen credit card
            data is often used to attempt fraudulent online purchases. Spam and
            Viruses: In our industry, customers usually receive an email
            suggesting that Aramex is attempting to deliver a package and
            request that you open the email attachment to prompt the delivery.
            This attachment may be a computer virus. Unless you are expecting to
            receive an email like this, please do not open the attachment and
            report it to the Customer Care Center at info@oneglobal.com
          </p>
        </div>
      </div>
      <div className="justify-between hidden p-10 md:flex">
        <div className="flex flex-row">
          <Image
            src="/aboutus/OrangeBall.png"
            alt="right image"
            width={1000}
            height={500}
            className="h-[40px] w-[40px] object-contain "
          />
          <Image
            src="/aboutus/YellowBall.png"
            alt="right image"
            width={1000}
            height={500}
            className="h-[40px] w-[40px] object-contain "
          />
          <div className="bg-[#FFA350] rounded-full h-[40px] w-[40px]"></div>
        </div>
        <div className="flex flex-row">
          <Image
            src="/aboutus/YellowBall.png"
            alt="right image"
            width={1000}
            height={500}
            className="h-[40px] w-[40px] object-contain "
          />
          <Image
            src="/aboutus/OrangeBall.png"
            alt="right image"
            width={1000}
            height={500}
            className="h-[40px] w-[40px] object-contain "
          />
        </div>
      </div>
      <div className="flex justify-between p-10 md:hidden">
        <Image
          src="/aboutus/WhiteBall.png"
          alt="right image"
          width={1000}
          height={500}
          className="h-[40px] w-[40px] object-contain "
        />
        <div className="flex flex-row">
          <Image
            src="/aboutus/YellowBall.png"
            alt="right image"
            width={1000}
            height={500}
            className="h-[40px] w-[40px] object-contain "
          />
          <Image
            src="/aboutus/OrangeBall.png"
            alt="right image"
            width={1000}
            height={500}
            className="h-[40px] w-[40px] object-contain "
          />
        </div>
      </div>
    </div>
  );
};

export default Policy;
