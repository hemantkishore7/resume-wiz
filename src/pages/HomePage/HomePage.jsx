import { Navbar, Hero } from "../../components";
import style from "../../style";

function HomePage() {
  return (
    <div className="bg-black w-full overflow-hidden">
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={` ${style.flexStart} ${style.paddingX}`}>
        <div className={`${style.boxWidth}`}>
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
