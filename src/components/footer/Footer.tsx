import { CiLocationOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="flex flex-col justify-around md:flex-row mb-10">
        <div className="flex gap-2 justify-center items-center">
          <FaPhone className="w-[20px] h-[20px]" />
          <span className="text-[20px]">+237 674-016-433</span>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <MdOutlineMail className="w-[20px] h-[20px]" />
          <span className="text-[20px]">derickasane@gmail.com</span>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <CiLocationOn className="w-[20px] h-[20px]" />
          <span className="text-[20px]">Awae yaounde, cameroon</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p>&copy; {new Date().getFullYear()} AE Derick. All rights reserved.</p>
        <p>
          <a href="#" className="hover:text-gray-200">
            Privacy Policy
          </a>
          {" | "}
          <a href="#" className="hover:text-gray-200">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
