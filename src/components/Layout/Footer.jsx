import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import newsletter from "../../assets/images/newslettter-bg.png";

const Footer = () => {
  return (
    <div className="mt-[100px] bg-primary">
      <div className="container flex flex-col justify-between w-full p-12 mt-5 text-white lg:flex-row">
        <div className="flex flex-col w-1/2 mt-12">
          <div className="flex flex-col items-start justify-between lg:flex-row gap-x-5 ">
            <div>
              <p className=" text-[23px] font-extrabold">
                Scan. Detect. Remove.
              </p>
              <div className="flex items-center my-8 gap-x-8">
                <FaTwitterSquare size={30} className="cursor-pointer" />
                <FaSquareFacebook size={30} className="cursor-pointer" />
                <FaYoutubeSquare size={30} className="cursor-pointer" />
              </div>
              <div className="flex items-center justify-between my-8">
                <p className="text-[11px] opacity-60 underline cursor-pointer">
                  Privacy Policy
                </p>
                <p className="text-[11px] opacity-60 underline cursor-pointer">
                  Terms of Services
                </p>
              </div>
              <p className="text-[11px] opacity-60 my-8">
                Copyright © 2024 Certo Software Limited | Registered in <br />
                England & Wales No. 10072356
              </p>

              <p className="text-[11px] opacity-60 my-5">
                Designed & developed by Md. Mahadi Hasan
              </p>
            </div>
            <div>
              <p className="text-[35px] font-extrabold mb-8">Miro.</p>
              <hr className="w-[150px] opacity-60" />

              <div className="text-tertiary text-[19px] font-extrabold my-6 ">
                <p className="mt-3">- iPhone</p>
                <p className="mt-3">- Android</p>
                <p className="mt-3">- Help</p>
                <p className="mt-3">- About</p>
                <p className="mt-3">- Insights</p>
              </div>
            </div>
          </div>

          <div className="mt-10 mb-5 mr-0 lg:mr-10">
            <p className="text-[12px]   opacity-60">
              Apple, the Apple logo, and iPhone are trademarks of Apple Inc.,
              registered in the U.S. and other countries. App Store is a service
              mark of Apple Inc. Android, Google Play and the Google Play logo
              are trademarks of Google LLC.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <div className=" bg-tertiary rounded-xl lg:rounded-[40px]">
            <div className="relative">
              <img src={newsletter} alt="newsletter" />
            </div>
            <div className=" m-2 absolute lg:-translate-y-[13rem] lg:translate-x-[2rem]  -translate-y-[9.54rem] translate-x-0]">
              <p className="text-[16px] lg:text-[23px] text-primary font-extrabold ">
                Sign up to our newsletter
              </p>
              <p className="text-[12px] lg:text-[15px] text-primary my-5">
                Receive the latest mobile security news, exclusive <br />
                discounts & offers straight to your inbox!
              </p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="py-1 px-1 text-[15px]  lg:rounded-l-2xl"
              />
              <button className="py-1 font-bold rounded-r-2xl text-center px-6 bg-primary text-[15px]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
