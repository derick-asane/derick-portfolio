import {
  reactLogo,
  tailwindcssLogo,
  gitLogo,
  javascriptLogo,
  cssLogo,
  nodejsLogo,
  mysqlLogo,
  typescriptLogo,
  postgresqlLogo,
  gitlabLogo,
  htlmLogo,
} from "../../constants";

const Technologies = () => {
  const techLogos = [
    { id: 1, label: "react logo", logo: reactLogo },
    { id: 2, label: "nodejs logo", logo: nodejsLogo },
    { id: 3, label: "git logo", logo: gitLogo },
    { id: 4, label: "git logo", logo: gitlabLogo },
    { id: 5, label: "html logo", logo: htlmLogo },
    { id: 6, label: "javascript logo", logo: javascriptLogo },
    { id: 7, label: "css logo", logo: cssLogo },
    { id: 8, label: "tailwindcss logo", logo: tailwindcssLogo },
    { id: 9, label: "typescript logo", logo: typescriptLogo },
    { id: 10, label: "postgresql logo", logo: postgresqlLogo },
    { id: 11, label: "mysql logo", logo: mysqlLogo },
  ];

  return (
    <div
      id="Technologies"
      className="bg__gradient_2 md:h-screen px-1 md:px-4 pb-4"
    >
      <div className="flex justify-center pt-8">
        <h1 className="text__gradient_1 text-white">Technologies</h1>
      </div>
      <div className="flex justify-around md:justify-center items-center flex-wrap gap-8 mt-10">
        {techLogos.map((techlogo, index) => (
          <div key={index} className="w-[20%] md:w-[10%]">
            <img
              src={techlogo.logo}
              alt={techlogo.label}
              className="w-[100px] h-[100}px"
            />
          </div>
        ))}
      </div>
      <div className="text-white text-[16px] md:text-[40px] pt-4 flex justify-center">
        <span>Technologies i have been working with recently.</span>
      </div>
    </div>
  );
};

export default Technologies;
