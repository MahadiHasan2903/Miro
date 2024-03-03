import { MdArrowRightAlt } from "react-icons/md";
import integrations from "../assets/images/all_integrations.png";

const Integrations = () => {
  return (
    <div className="flex  lg:flex-row flex-col lg:items-center lg:justify-between lg:gap-x-10 my-[80px] lg:my-[150px] container">
      <div>
        <img
          src={integrations}
          alt="integrations"
          className="w-full mb-10 lg:mb-0"
        />
      </div>
      <div>
        <p className="text-[30px] lg:text-[48px] font-bold text-primary leading-none">
          Connect <br />
          your tools, <br />
          close your tabs
        </p>
        <p className="text-[18px]  my-5 text-primary w-full lg:w-[420px]">
          Whether you want to edit your Google Docs, resolve Jira issues, or
          collaborate over Zoom, Miro has 100+ integrations with tools you
          already use and love.
        </p>
        <p className=" text-secondary text-[18px] underline flex items-center justify-start gap-x-2">
          Learn More <MdArrowRightAlt />
        </p>
      </div>
    </div>
  );
};

export default Integrations;
