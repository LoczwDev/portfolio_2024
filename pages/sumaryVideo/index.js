import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { easeInOut, motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Bulb from "../../components/Bulb";
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import VideoSliderBtns from "../../components/VideoSliderBtns";

const Video = () => {
  const projects = [
    {
      num: "01",
      category: "frontend",
      title: "project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam modi.",
      stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
      image: "/thumb1.jpg",
      live: "",
      github: "",
    },
    {
      num: "02",
      category: "frontend",
      title: "project 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam modi.",
      stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
      image: "/thumb2.jpg",
      live: "",
      github: "",
    },
    {
      num: "03",
      category: "frontend",
      title: "project 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam modi.",
      stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
      image: "/thumbe3.jpg",
      live: "",
      github: "",
    },
  ];

  const [project, setProject] = useState(projects[0]);

  const handleChangeSlider = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <div className="h-full bg-primary/30 py-36 flex items-center relative z-[100]">
      {/* <Circles /> */}
      <motion.section
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 mx-auto"
      >
        <div className="container mx-auto">
          <div className="flex flex-col-reverse gap-y-5 xl:flex-row xl:gap-[30px] items-center">
            {/* xl:h-[460px]  */}
            <div className="w-full xl:w-[50%] flex flex-col xl:justify-between">
              <div className="flex flex-col gap-[30px]">
                <div className="!text-8xl font-poppins leading-none font-extralight text-white text-outline">
                  {project.num}
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.category}
                </h2>
                <p className="dark:text-white/60 text-black">
                  {project.description}
                </p>
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>
                <div className="border border-white/20"></div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                }}
                freeMode={true}
                modules={[FreeMode]}
                spaceBetween={15}
                onSlideChange={handleChangeSlider}
                slidesPerView={1}
                className="xl:h-[520px]"
              >
                {projects.map((item, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] w-full relative group flex justify-center items-center">
                      {/* overplay */}
                      <div className="absolute top-0 bottom-0 w-full h-full z-[100]"></div>
                      <div className="relative w-full h-full">
                        <video
                          width="320"
                          height="240"
                          controls
                          preload="none"
                          auto
                          className="xl:w-full xl:h-full"
                        >
                          <source src="/video.mp4" autoPlay type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                {/* button Slide */}
                <VideoSliderBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50% - 22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Video;
