import ProjectsBtn from "../components/ProjectsBtn";

import { easeInOut, motion } from "framer-motion";
import { fadeIn } from "../variants";
import Avatar from "../components/Avatar";
import ParticlesContainer from "../components/ParticlesContainer";
import Socials from "../components/Socials";
const Home = () => {
  return (
    <div className=" h-full z-[50]">
      {/* Text Section */}
      {/* bg-gradient-to-r from-primary/10 via-black/30 to-black/10 */}
      <div className="w-full h-full  ">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* Title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 dark:text-white text-black"
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          {/* Subtitle */}

          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 dark:text-white text-black"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            nostrum quam reprehenderit vero, tenetur voluptatem nulla aut
            aspernatur dolores ut.
          </motion.p>

          {/* btn */}
          {/* <div className="flex xl:flex-row flex-col gap-y-4 items-center gap-x-3">
            <div className="flex justify-center xl:hidden relative z-[100]">
              <ProjectsBtn />
            </div>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex z-[100]"
            >
              <ProjectsBtn />
            </motion.div>
            <Socials />
          </div> */}
        </div>
      </div>
      {/* Image Section */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg-img */}
        {/* xl:bg-explosion  */}
        <div className="bg-none xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar */}
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: easeInOut }}
          className="w-full h-full max-w-[637px] max-h-[578px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;