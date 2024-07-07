import mypc from "../../assets/mypic.png";

const Home = () => {
  return (
    <div
      id="Home"
      className="flex items-center flex-col-reverse justify-center md:flex-row md:justify-around h-[700px] md:h-screen "
    >
      <div className="w-[90%] mt-4 md:mt-4 md:w-[40%]">
        <h4 className="text-[30px] md:text-[70px] font-sans">
          Hello!
          <br />
          I'm <span className="text-blue-500">AE DERICK</span>
        </h4>
        <p className="w-[100%] max-w-[350px] mt-4 text-[20px] md:text-[30px] md:max-w-[600px] font-serif">
          I am a software engineer, I have proven tract record of developing
          high-quality web applications, and i'm open for any form of
          colaboration.
        </p>
      </div>
      <div className="w-[90%] md:w-[40%] flex justify-center">
        <img
          src={mypc}
          alt="derick's picture"
          className="w-[250px] h-[250px] md:w-[400px] md:h-[400px]"
        />
      </div>
    </div>
  );
};

export default Home;
