import { FaXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { PiCopyright } from "react-icons/pi";

const social = [
    {icon: FaXTwitter, href:"#"},
    {icon: BsLinkedin, href:"#"},
    {icon: FaFacebook, href:"#"},
    {icon: FaInstagram, href:"#"},
    {icons: FaYoutube, href:"#"},
    {icon: PiCopyright, href:"#"},
];

export default function FooterBottom() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-gray-600">
            <p>
                © 
            </p>

        </div>
    );
}

