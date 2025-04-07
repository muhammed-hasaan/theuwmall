import GoldenUwMallLogo from "../../assets/GoldenLogoForAllPages.png";
import { ArrowRight } from "lucide-react";
import { FaInstagram, FaFacebook, FaLinkedin, FaXTwitter, FaTiktok } from "react-icons/fa6";


export default function Footer({ frombrand }) {
  const icons = {
    instagram: <FaInstagram />,
    facebook: <FaFacebook />,
    linkedin: <FaLinkedin />,
    x: <FaXTwitter />,
    tiktok: <FaTiktok />,
  };
  return (
    <footer className="w-full bg-black text-white py-12 px-4 sm:px-6 lg:px-8 xl:px-20 flex justify-center items-center ">
    <div className="w-full max-w-[1300px] mx-auto   ">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start md:space-x-10 sm:ml-3 lg:ml-0">
        {/* Left Section */}
        <div className="w-full md:w-[50%] flex flex-col items-center md:items-start text-center md:text-left ">
          <img src={GoldenUwMallLogo} alt="UW Mall" width={100} height={40} className="mb-6 " />
          <div className="w-full max-w-sm mt-14  md:ml-0">
            <div className="flex items-center mb-3">
              <div className="w-3 h-3 rounded-full bg-[#ffc107] mr-2"></div>
              <h4 className="uppercase text-md text-[#ffc107]">Receive our newsletter</h4>
            </div>
            <div className="flex  max-w-[530px] h-14 ">
              <input type="email" placeholder="Email Address" className="border-b border-white bg-transparent outline-none text-gray-400 placeholder-gray-500 flex-grow " />
              <button className="ml-2 text-white"><ArrowRight size={20} /></button>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full md:w-[70%] flex flex-col items-start md:items-start mt-10 md:mt-0 ">
          <div className="text-left md:text-left mb-6">
            <p className="text-white">Contact Us:</p>
            <p className="text-white">info@theuwmall.com</p>
          </div>
          <div className="w-full flex flex-wrap justify-start md:justify-start gap-x-24 gap-y-6 mt-14">
            {/* Social Icons */}
            <div className="flex flex-col items-start md:items-start">
              <div className="flex items-center mb-3">
                <div className="w-2 h-2 rounded-full bg-[#ffc107] mr-2"></div>
                <h4 className="uppercase text-sm text-[#ffc107]">Social</h4>
              </div>
              <div className="flex gap-3 mt-3">
                {['instagram', 'facebook', 'linkedin', 'x', 'tiktok'].map((platform, index) => (
                  <a key={index} href="#" className="text-black bg-white hover:text-white hover:bg-black w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#ffc107] transition-colors">
                    {/* <img src={`/${platform}.svg`} alt={platform} className="w-5 h-5" /> */}
                    {icons[platform]}
                  </a>
                ))}
              </div>
            </div>
            {/* Links */}
            <div className="flex flex-col items-start md:items-start">
              <div className="flex items-center mb-3">
                <div className="w-2 h-2 rounded-full bg-[#ffc107] mr-2"></div>
                <h4 className="uppercase text-sm text-[#ffc107]">Links</h4>
              </div>
              <div className="flex flex-col gap-2 text-white">
                {[{dat:"UW MALL" , go:"/"}, {dat:"ABOUT" , go:"/AboutUs"}, {dat:"BRANDS" , go:"/Brands"}, {dat:"STORES" , go:"/Stories"}, {dat:"CAREERS" , go:"/Career"}, {dat:"CONTACT" , go:"/Contactus"}].map((itm, index) => (
                  <a key={index} href={itm.go} className="hover:text-[#ffc107] transition-colors text-sm">
                    {itm.dat}
                  </a>
                ))}
              </div>
            </div>
            {/* Location */}
            <div className="flex flex-col items-start md:items-start">
              <div className="flex items-center mb-3">
                <div className="w-2 h-2 rounded-full bg-[#ffc107] mr-2"></div>
                <h4 className="uppercase text-sm text-[#ffc107]">Location</h4>
              </div>
              <p className="text-white text-sm leading-relaxed text-left md:text-left">
                Khalid Bin Al Waleed Rd<br />
                317,1B Street<br />
                Po Box No: 37566<br />
                Unique World Building,<br />
                Al Mankhool, Dubai<br />
                United Arab Emirates
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}