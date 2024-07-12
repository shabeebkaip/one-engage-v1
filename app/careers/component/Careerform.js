import React from "react";
import Image from "next/image";

const CareerForm = () => {
  return (
    <div className="p-4 bg-white">
      <h1 className="p-6 mb-6 mt-12 text-2xl sm:text-2xl md:text-4xl xl:text-6xl font-bold text-center text-[#FF6410]">
        <span className="block sm:hidden">
          If you’re ready to <br /> be part of <br /> the future, let’s go.
        </span>
        <span className="hidden sm:block">
          If you’re ready to be part of the <br /> future, let’s go.
        </span>
      </h1>
      <div className="flex items-center justify-center p-4 bg-white">
        <div className="w-full max-w-4xl p-8 rounded-3xl shadow-lg bg-[#FEF2E7] font-dm-sans">
          <h2 className="pt-6 mb-8 text-2xl font-semibold text-center font-dm-sans">
            Fill the form below:
          </h2>
          <form>
            <div className="mb-4 rounded-lg bg-[#FEF2E7] pb-12">
              <label
                className="block mb-2 text-lg font-medium text-[#FF6410]"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <div className="rounded-lg border-[#FF6410]">
                <input
                  type="text"
                  id="fullName"
                  placeholder="What is your full name?"
                  className="w-full p-2 border rounded-3xl border-[#FF6410] bg-[#FEF2E7]"
                />
              </div>
            </div>
            <div className="mb-4 rounded-full bg-[#FEF2E7]">
              <label
                className="block mb-2 text-lg font-medium text-[#FF6410]"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="What is your email address?"
                className="w-full p-2 border rounded-3xl border-[#FF6410] bg-[#FEF2E7]"
              />
            </div>
            <div className="mb-4 rounded-lg bg-[#FEF2E7]">
              <label
                className="block mb-2 text-lg font-medium text-[#FF6410]"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="What is your phone number?"
                className="w-full p-2 border rounded-3xl border-[#FF6410] bg-[#FEF2E7]"
              />
            </div>
            <div className="flex flex-col sm:flex-row mb-4 rounded-lg bg-[#FEF2E7]">
              <div className="w-full mb-4 sm:w-1/2 sm:mr-2 sm:mb-0">
                <label
                  className="block mb-2 text-lg font-medium text-[#FF6410]"
                  htmlFor="resume"
                >
                  Resume/CV upload.
                </label>
                <input
                  type="file"
                  id="resume"
                  placeholder="Please upload your resume or CV."
                  className="w-full p-2 border rounded-3xl border-[#FF6410] bg-[#FEF2E7]"
                />
              </div>
              <div className="w-full sm:w-1/2 sm:ml-2">
                <label
                  className="block mb-2 text-lg font-medium text-[#FF6410]"
                  htmlFor="coverLetter"
                >
                  Cover letter
                </label>
                <input
                  type="file"
                  id="coverLetter"
                  placeholder="Would you like to include a cover letter? If so, please paste it here."
                  className="w-full p-2 border rounded-3xl border-[#FF6410] bg-[#FEF2E7]"
                />
              </div>
            </div>
            <div className="mb-4 rounded-lg bg-[#FEF2E7]">
              <label
                className="block mb-2 text-lg font-medium text-[#FF6410]"
                htmlFor="positionApplied"
              >
                Position Applied For
              </label>
              <input
                type="text"
                id="positionApplied"
                placeholder="What position are you applying for?"
                className="w-full p-2 border rounded-3xl border-[#FF6410] bg-[#FEF2E7]"
              />
            </div>
            <div className="mb-4 rounded-lg bg-[#FEF2E7]">
              <label
                className="block mb-2 text-lg font-medium text-[#FF6410]"
                htmlFor="yearsExperience"
              >
                Years of Experience
              </label>
              <input
                type="number"
                id="yearsExperience"
                placeholder="How many years of experience do you have?"
                className="w-full p-2 border rounded-3xl border-[#FF6410] bg-[#FEF2E7]"
              />
            </div>
            <div className="mb-4 rounded-lg bg-[#FEF2E7]">
              <label
                className="block mb-2 text-lg font-medium text-[#FF6410]"
                htmlFor="education"
              >
                Education
              </label>
              <input
                type="text"
                id="education"
                placeholder="Please provide details about your education, including degrees and institutions."
                className="w-full p-2 border-b border-[#FF6410] bg-[#FEF2E7] focus:outline-none"
              />
            </div>
            <div className="mb-4 rounded-lg bg-[#FEF2E7]">
              <label
                className="block mb-2 text-lg font-medium text-[#FF6410]"
                htmlFor="reference"
              >
                References
              </label>
              <input
                type="text"
                id="reference"
                placeholder="Do you have any professional references? If so, please provide their names and contact information."
                className="w-full p-2 border-b  border-[#FF6410] bg-[#FEF2E7]"
              />
            </div>
            <div className="mb-4 rounded-lg bg-[#FEF2E7]">
              <label
                className="block mb-2 text-lg font-medium text-[#FF6410]"
                htmlFor="availability"
              >
                Availability?
              </label>
              <input
                type="text"
                id="availability"
                placeholder="When would you be available to start?"
                className="w-full p-2 border rounded-3xl border-[#FF6410] bg-[#FEF2E7]"
              />
            </div>
            <div className="mb-4 rounded-lg bg-[#FEF2E7]">
              <label
                className="block mb-2 text-lg font-medium text-[#FF6410]"
                htmlFor="additionalInfo"
              >
                Additional information
              </label>
              <textarea
                id="additionalInfo"
                placeholder="Is there anything else you would like us to know about you?"
                className="w-full p-2 border-b border-[#FF6410] bg-[#FEF2E7]"
              ></textarea>
            </div>
            <div className="mb-4 rounded-lg bg-[#FEF2E7]">
              <label
                className="block mb-2 text-lg font-medium text-[#FF6410]"
                htmlFor="howDidYouHear"
              >
                How did you hear about us?
              </label>
              <input
                type="text"
                id="howDidYouHear"
                placeholder="How did you learn about this job opportunity?"
                className="w-full p-2 border rounded-3xl border-[#FF6410] bg-[#FEF2E7]"
              />
            </div>
            <div className="mb-6 text-center rounded-lg bg-[#FEF2E7]">
              <p className="text-xl sm:text-xl md:text-2xl font-bold text-[#FF6410] pt-[70px]">
                Welcome to One Engage.
              </p>
            </div>
            <div className="text-center bg-[#FEF2E7] mt-8">
              <button
                type="submit"
                className="flex items-center justify-center px-6 py-3 rounded-[40px] font-semibold border border-[#FF6410] text-[#FF6410] mx-auto italic"
              >
                welcome aboard <span className="ml-2">→</span>
              </button>
            </div>{" "}
            <div className="flex justify-between mt-8 bg-[#FEF2E7]">
              <div className="flex items-end">
                <Image
                  src="/point3.png"
                  alt="Bottom Left Image"
                  width={80}
                  height={80}
                  className="object-cover w-[40px] sm:w-[55px] md:w-[65px] lg:w-[75px] xl:w-[85px]"
                />
              </div>
              <div className="flex items-end">
                <Image
                  src="/poinred.png"
                  alt="Bottom Right Image 1"
                  width={80}
                  height={80}
                  className="object-cover w-[40px] sm:w-[55px] md:w-[65px] lg:w-[75px] xl:w-[85px]"
                />
                <Image
                  src="/point2.png"
                  alt="Bottom Right Image 2"
                  width={80}
                  height={80}
                  className="object-cover w-[40px] sm:w-[55px] md:w-[65px] lg:w-[75px] xl:w-[85px]"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;
