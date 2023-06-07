import styles from "../style";
import CreateBtn from "./CreateBtn";
const Hero = () => {
  return (
    <section className={`flex flex-col sm:flex-col ${styles.paddingY}`}>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className=" text-white flex-1 ss:text-[75px] text-[55px] font-poppins font-semibold ss:leading-[100px] leading-[75px]">
          The Best
          <span className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 bg-clip-text text-transparent">
            {" "}
            Minimalistic
          </span>{" "}
          <br className="sm:block hidden" />
          Resume Builder For Free.
        </h1>
      </div>
      <div className={`${styles.paddingY}`}>
        <CreateBtn />
      </div>
    </section>
  );
};

export default Hero;
