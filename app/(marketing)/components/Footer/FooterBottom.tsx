import { FaXTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";

export default function FooterBottom() {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-32 pb-12">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

          <p className="text-gray-600 border-t text-sm">
            © {new Date().getFullYear()} Lorvé. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-gray-600">
            <FaXTwitter className="h-5 w-5 hover:text-black transition" />
            <BsLinkedin className="h-5 w-5 hover:text-black transition" />
            <FaFacebook className="h-5 w-5 hover:text-black transition" />
            <FaInstagram className="h-5 w-5 hover:text-black transition" />
            <FaYoutube className="h-5 w-5 hover:text-black transition" />
          </div>

        </div>
      </div>
    </div>
  );
}
