import { projectImage } from "../../constants";

const Project = () => {
  const Project = [
    {
      id: 1,
      link: "",
      image: projectImage,
      label:
        "If you’re just now becoming familiar with what a gradient is, we’ll paint the picture for you before we dive into the tougher stuff",
    },
    {
      id: 2,
      link: "",
      image: projectImage,
      label:
        "If you’re just now becoming familiar with what a gradient is, we’ll paint the picture for you before we dive into the tougher stuff",
    },
    {
      id: 3,
      link: "",
      image: projectImage,
      label:
        "If you’re just now becoming familiar with what a gradient is, we’ll paint the picture for you before we dive into the tougher stuff",
    },
    {
      id: 4,
      link: "",
      image: projectImage,
      label:
        "If you’re just now becoming familiar with what a gradient is, we’ll paint the picture for you before we dive into the tougher stuff",
    },
  ];

  return (
    <div className="h-screen px-8">
      <div className="flex justify-center pt-4">
        <h1 className="text-black">Projects</h1>
      </div>
      <div className="flex justify-around flex-wrap mt-8">
        {Project.map((project, index) => (
          <div key={index} className="w-[20%]">
            <a href={project.link} className="a__remove-style">
              <div className="w-[100%] border rounded-lg">
                <img src={project.image} alt="" className="object-contain" />
              </div>
              <div className="bg-slate-900 flex justify-center">
                <span className="text-white px-2">{project.label}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
