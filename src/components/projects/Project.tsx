import { projectImage } from "../../constants/index.ts";

const Project = () => {
  const Project = [
    {
      id: 1,
      link: "https://derick-restaurant.onrender.com/",
      image: projectImage,
      label: "Restaurant landing page app",
    },
    {
      id: 2,
      link: "https://bank-modern-app-9s1g.onrender.com/",
      image: projectImage,
      label: "Responsive Bank app landing page",
    },
    {
      id: 3,
      link: "https://gpt3-derick.onrender.com/",
      image: projectImage,
      label: "Responsive gpt3 app",
    },
    {
      id: 4,
      link: "",
      image: projectImage,
      label: "loading ...",
    },
    {
      id: 5,
      link: "",
      image: projectImage,
      label: "loading ...",
    },
    ,
    {
      id: 6,
      link: "",
      image: projectImage,
      label: "Loading ...",
    },
  ];

  return (
    <div className=" px-8" id="Project">
      <div className="flex justify-center pt-4">
        <h1 className="text-black font-bold text__gradient_2">Projects</h1>
      </div>
      <div className="flex justify-around flex-wrap gap-2 mt-8">
        {Project.map((project, index) => (
          <div key={index} className="W-[80%] mb-2 md:w-[25%]">
            <a href={project?.link} className="a__remove-style">
              <div className="w-[100%] border rounded-lg">
                <img
                  src={project?.image}
                  alt={project?.label}
                  className="object-fill w-[100%]"
                />
              </div>
              <div className="bg-slate-900 flex justify-center h-[60px]">
                <span className="text-white px-2 py-2 text-[]">
                  {project?.label}
                </span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
