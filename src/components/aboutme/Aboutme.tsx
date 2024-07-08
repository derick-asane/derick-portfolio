import { possibilityImage } from "../../constants";

function Aboutme() {
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
    <div className="h-screen border-t-4 bg__img px-4">
      <div className="flex justify-center border-t-4 text-white pt-4">
        <h1 className="text__gradient_2">About Me</h1>
      </div>
      <div className="flex flex-col  md:flex-row items-center">
        <div className="w-[80] md:w-[40%]">
          <img
            src={possibilityImage}
            alt=""
            className="w-[200px] h-[200px] mt-8 md:pt-0  md:w-[400px] md:h-[400px]"
          />
        </div>
        <div className="w-[80] md:w-[40%]">
          <div>
            <h1>Here me</h1>
          </div>
          <div>
            <button type="button" onClick={onDownLoad}>
              download cv
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
