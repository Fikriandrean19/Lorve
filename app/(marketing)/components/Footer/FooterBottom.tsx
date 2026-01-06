import { FaXTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { LuCopyright } from "react-icons/lu";


export default function FooterBottom() {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="max-w-7xl md:max-w-screen-2xl mx-auto sm:px-6 md:px-12 lg:px-32 pb-4 md:pb-12">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="hidden md:flex items-center gap-1">
          <LuCopyright className="text-gray-600"/>
            <p className="text-gray-600 text-sm">
              {new Date().getFullYear()} Lorvé. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6 text-[#A9A9A9]">
            <FaXTwitter className="h-8 w-8 md:h-5 md:w-5 hover:text-black transition" />
            <BsLinkedin className="h-8 w-8 md:h-5 md:w-5 hover:text-black transition" />
            <FaFacebook className="h-8 w-8 md:h-5 md:w-5 hover:text-black transition" />
            <FaInstagram className="h-8 w-8 md:h-5 md:w-5 hover:text-black transition" />
            <FaYoutube className="h-10 w-10 md:h-5 md:w-5 hover:text-black transition" />
          </div>

          <div className="md:hidden flex items-center gap-1">
            <LuCopyright className="text-gray-600"/>
            <p className="text-gray-600 text-sm">
              {new Date().getFullYear()} Lorvé. All rights reserved.
            </p>
          </div>
        </div>
        <img src="/assets/footer/logoFooter.png" alt="Logo Footer" className="block p-3 mt-10" />
      </div>
    </div>
  );
}
