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
    {
      id: 5,
      link: "",
      image: projectImage,
      label:
        "If you’re just now becoming familiar with what a gradient is, we’ll paint the picture for you before we dive into the tougher stuff",
    },
    ,
    {
      id: 6,
      link: "",
      image: projectImage,
      label:
        "If you’re just now becoming familiar with what a gradient is, we’ll paint the picture for you before we dive into the tougher stuff",
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
              <div className="bg-slate-900 flex justify-center">
                <span className="text-white px-2">{project?.label}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
