import CustomButton from "./CustomButton";

const Collaborators = () => {
  return (
    <div className="my-[100px] sm:mb-[100px] sm:mt-[200px] container">
      <div className="relative ">
        <p className="text-[30px] md:text-[48px] font-bold text-primary text-center">
          Collaborate without <br /> constraints
        </p>
        <div className="flex flex-col items-start justify-between px-5 mt-10 lg:gap-x-5 lg:flex-row">
          <div className=" w-full lg:w-[330px]   text-start">
            <p className="text-[24px] font-bold text-primary my-5">
              Free forever
            </p>
            <p className="text-[18px]">
              Our free plan gives you unlimited team members, 3 boards, and 300+
              expert-made templates. Signing up with your work email lets you
              bring in your team faster. See our{" "}
              <span className="text-secondary">pricing plans</span> for more
              feature.
            </p>
          </div>
          <div className="w-full lg:w-[330px]    text-start">
            <p className="text-[24px] font-bold text-primary my-5">
              Easy integrations
            </p>
            <p className="text-[18px]">
              Miro has 100+ powerful integrations with tools you already use
              like G Suite, Slack, and Jira, so your workflow is seamless. View
              the full list in our{" "}
              <span className="text-secondary">Marketplace.</span>
            </p>
          </div>
          <div className="w-full lg:w-[330px]    text-start">
            <p className="text-[24px] font-bold text-primary my-5">
              Security first
            </p>
            <p className="text-[18px]">
              We treat your data like you would - with the utmost care. We
              follow industry-leading security standards and give you tools to
              protect intellectual property. Learn more at our{" "}
              <span className="text-secondary">Trust Center.</span>
            </p>
          </div>
        </div>
      </div>
      <div className=" md:translate-x-[25rem] sm:-translate-y-[43rem] sm:translate-x-[20rem] lg:-translate-y-[32rem] lg:translate-x-[34rem] hidden sm:block absolute text-[12px] font-bold px-2 py-1 bg-[#FFD02F] rounded-lg transform rotate-12  xl:-translate-y-[29rem] xl:translate-x-[40rem]">
        YOUR IDEA STARTS HERE
      </div>
      <div className="mt-10">
        <CustomButton title="Sign up free" />
      </div>
    </div>
  );
};

export default Collaborators;
