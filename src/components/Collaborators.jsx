import CustomButton from "./CustomButton";

const Collaborators = () => {
  return (
    <div className="my-[200px] container">
      <div className="relative ">
        <p className="text-[48px] font-bold text-primary text-center">
          Collaborate without <br /> constraints
        </p>
        <div className="flex items-start justify-between px-5 mt-10">
          <div className="w-[330px]   text-start">
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
          <div className="w-[330px]   text-start">
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
          <div className="w-[325px]   text-start">
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
      <div className="absolute text-[12px] font-bold px-2 py-1 bg-[#FFD02F] rounded-lg transform rotate-12  -translate-y-[28rem] translate-x-[58rem]">
        YOUR IDEA STARTS HERE
      </div>
      <CustomButton title="Sign up free" />
    </div>
  );
};

export default Collaborators;
