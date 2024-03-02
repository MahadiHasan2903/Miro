import { reviewerInfo, teamsData } from "../assets/data/data";
import CustomButton from "./CustomButton";

const Teams = () => {
  return (
    <div className="container flex  flex-col justify-center mt-[200px]">
      <p className="text-[48px] text-center font-bold text-primary">
        Loved by the world&apos;s best teams
      </p>
      <div className="my-6">
        <CustomButton title="See all customer stories" />
      </div>
      <div className="flex justify-between mt-12 gap-x-5">
        {teamsData.map((team, index) => (
          <div key={index} className="w-1/3 mx-12">
            <img src={team.img} alt={`Team ${index + 1}`} />
            <p className="mt-5 text-[18px]  text-primary opacity-75">
              {team.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-between mx-8 mt-12 gap-x-5">
        {reviewerInfo.map((review, index) => (
          <div key={index} className="flex mt-10 gap-x-3 ">
            <div>
              <img src={review.avatar} alt="avatar" />
            </div>
            <div className="text-primary opacity-80 text-[14px]">
              <p>{review.name}</p>
              <p>{review.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
{
  /*
   */
}
