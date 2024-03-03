import { sponsors } from "../assets/data/data";

const Sponsor = () => {
  return (
    <div className=" container flex flex-col items-center justify-center my-10 lg:my-[100px] ">
      <p className="my-8 text-primary text-[18px] opacity-70">
        Trusted by 45M+ users
      </p>
      <div className="flex items-center justify-center gap-x-2 lg:gap-x-[150px]">
        {sponsors.map((sponsor, index) => (
          <img
            key={index}
            src={sponsor.image}
            alt={sponsor.name}
            className=" w-[70px]  lg:w-auto lg:h-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsor;
