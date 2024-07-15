import { Carousel } from "@material-tailwind/react";
import TheJourney from "../card/TheJourney";
import Waysbeans from "../card/Waysbeans";
import CircleCard from "../card/Circle";

export default function Services() {

  return (
    <div className="bg-amber-400 h-screen mt-32 sm:mt-0 px-2 sm:px-16">
      <section id="Services">
        <div className="bg-orange-700 p-5 w-full flex-column align-center justify-center rounded-xl">
          <div>
            <h1 className="text-black text-3xl font-bold text-center">
              My Project
            </h1>
            <div className="w-full flex text-xl mt-2 items-center">
              <span className="text-white text-center px-2 sm:px-40">
                &nbsp; &nbsp; &nbsp; Embark on a journey of digital
                transformation with a Fullstack Developer who combines design
                brilliance with cutting-edge development. Let's create seamless
                experiences and innovative applications that captivate and
                inspire.
              </span>
            </div>
          </div>
          <Carousel
            placeholder="Carousel"
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            className="rounded-xl"
          >
             <div className=" sm:px-20 sm:py-5">
              <CircleCard />
            </div>
            <div className=" sm:px-20 sm:py-5">
              <TheJourney />
            </div>
            <div className=" sm:px-20 sm:py-5">
              <Waysbeans />
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
}
