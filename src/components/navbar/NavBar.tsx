import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaX, FaXTwitter } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
const NavBar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const NavLinks = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Technologies",
    },
    {
      id: 3,
      name: "Project",
    },
    {
      id: 4,
      name: "About",
    },
  ];

  return (
    <div className="w-[100%] bg-slate-900 text-white flex items-center justify-around fixed z-10">
      <div className="flex justify-center w-[20%] py-6">
        <span className="text-[15px] md:text-[25px] uppercase tracking-[5px]">
          Portfolio
        </span>
      </div>
      <div className="hidden md:block w-[60%] text-white ">
        <ul className="flex justify-center my-6">
          {NavLinks.map((link, index) => (
            <li key={index} className="mx-6">
              <a
                href={`#${link.name}`}
                className="text-white hover:border-blue-500 hover:border-b-4 hover:text-slate-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {showMenu && (
        <div className="w-[40%] text-white absolute top-20 right-2 bg-slate-900 rounded-md transition ease-linear">
          <ul className="flex flex-col justify-center items-center my-6">
            {NavLinks.map((link, index) => (
              <li key={index} className="my-2">
                <a
                  href={`#${link.name}`}
                  className="text-white hover:border-blue-500 hover:border-b-4 hover:text-slate-300"
                  onClick={() => setShowMenu(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="w-[20%] flex justify-center items-center gap-6">
        <a
          target="_blank"
          href="https://github.com/derick-asane"
          className="hover:transform hover:scale-75 text-white "
        >
          <FaGithub className="w-[25px] h-[25px] md:w-[30px] md:h-[30px]" />
        </a>
        <a href="" className="hover:transform hover:scale-75 text-white">
          <FaXTwitter className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] " />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ae-derick/"
          className="hover:transform hover:scale-75 text-white"
        >
          <FaLinkedinIn className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] " />
        </a>

        <span className="text-white  md:hidden">
          {showMenu ? (
            <FaX
              className="w-[25px] h-[25px] md:w-[30px] md:h-[30px]"
              onClick={() => setShowMenu(false)}
            />
          ) : (
            <GiHamburgerMenu
              className="w-[25px] h-[25px] md:w-[30px] md:h-[30px]"
              onClick={() => setShowMenu(true)}
            />
          )}
        </span>
      </div>
    </div>
  );
};

export default NavBar;
