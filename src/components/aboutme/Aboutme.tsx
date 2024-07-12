import { possibilityImage } from "../../constants/index.ts";

const Aboutme = () => {
  const onDownLoad = () => {
    const pdfUrl = "real-cv.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "ae-derick-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.removeChild(link);
  };

  return (
    <div
      className="pb-4 md:h-screen border-t-4 bg__img px-1 md:px-4"
      id="About"
    >
      <div className="flex justify-center border-t-4 text-white pt-4 pb-4">
        <h1 className="text__gradient_2">About Me</h1>
      </div>
      <div className="flex flex-col md:flex-row md:justify-around items-center">
        <div className="w-[80%] md:w-[40%]">
          <img
            src={possibilityImage}
            alt="image"
            className="w-[220px] h-[220px] mt-8 md:pt-0 md:w-[400px] md:h-[400px] "
          />
        </div>
        <div className="w-[90%] md:w-[40%] md:flex md:flex-col md:justify-center md:gap-8 md:h-[300px]">
          <p className="text-white text-[20px] md:text-[30px]">
            I'm a problem-solver at heart. I love the challenge of understanding
            a problem, breaking it down, and building a solution that works. I'm
            a developer who's always looking for ways to improve and innovate.
          </p>
          <div className="flex justify-start items-center pt-4">
            <div
              onClick={onDownLoad}
              className="text-[20px] border-4 px-4 py-2 rounded-lg text-white bg__gradient_1 cursor-pointer hover:border-slate-900"
            >
              Download CV
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
