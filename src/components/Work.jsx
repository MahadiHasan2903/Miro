import { MdArrowRightAlt } from "react-icons/md";
import hybridWork from "../assets/images/hybridwork.png";

const Work = () => {
  return (
    <div className="container flex items-center justify-between my-12">
      <div>
        <p className="text-[48px] font-bold text-primary">
          Work together, <br />
          wherever you work
        </p>
        <p className="text-[18px]  my-5 text-primary w-[420px]">
          In the office, remote, or a mix of the two, with Miro, your team can
          connect, collaborate, and co-create in one space no matter where you
          are.
        </p>
        <p className=" text-secondary text-[18px] underline flex items-center justify-start gap-x-2">
          Learn More <MdArrowRightAlt />
        </p>
      </div>
      <div>
        <img src={hybridWork} alt="hybridWork" className="w-full" />
      </div>
    </div>
  );
};

export default Work;
