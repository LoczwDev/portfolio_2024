import { Sora } from "@next/font/google";
import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import ProjectsBtn from "./ProjectsBtn";
import Socials from "./Socials";
import Language from "./Language";
// Font Setting

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <div
      // bg-site
      className={`page text-white bg-cover bg-no-repeat bg-blend-color-dodge ${sora.variable} font-sora relative`}
    >
      {/* <TopLeftImg /> */}
      <div className="objects z-[1]">
        <ul className="box">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Language />
      <Nav />
      <motion.div
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Header />
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex xl:flex-row flex-col gap-y-4 items-center gap-x-3 fixed bottom-0 left-[14%] py-5 z-[200]"
        >
          <div className="flex justify-center xl:hidden relative z-[100]">
            <ProjectsBtn />
          </div>
          <div className="hidden xl:flex z-[100]">
            <ProjectsBtn />
          </div>
          <Socials />
        </motion.div>
      </motion.div>
      <div className="h-full">{children}</div>
    </div>
  );
};

export default Layout;
