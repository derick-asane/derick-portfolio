import { FaGithub, FaLinkedin, FaX } from "react-icons/fa6";
const NavBar = () => {
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
    <div className="w-[100%] bg-slate-900 text-white flex items-center fixed z-10">
      <div className="flex justify-center w-[20%]">
        <span className="text-[25px]">AE Derick</span>
      </div>
      <div className="w-[60%] text-white">
        <ul className="flex justify-center my-6">
          {NavLinks.map((link, index) => (
            <li key={index} className="mx-6">
              <a href={`#${link.name}`} className="">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[20%] flex justify-center items-center gap-6">
        <a href="" className="hover:transform hover:scale-75">
          <FaGithub className="w-[30px] h-[30px] " />
        </a>
        <a href="" className="hover:transform hover:scale-75">
          <FaLinkedin className="w-[30px] h-[30px] " />
        </a>
        <a href="" className="hover:transform hover:scale-75">
          <FaGithub className="w-[30px] h-[30px] " />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
