import { motion } from "framer-motion";

const transitionVarians = {
  initial: {
    x: "100%",
    with: "100%",
  },
  animate: {
    x: "0%",
    with: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    with: ["0%", "0%"],
  },
};
const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full h-screen w-screen z-[10001] bg-[#2e2257]"
        variants={transitionVarians}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full h-screen w-screen z-[10010] bg-[#3b2d71]"
        variants={transitionVarians}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full h-screen w-screen z-[10020] bg-[#4b3792]"
        variants={transitionVarians}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
      ></motion.div>
    </>
  );
};

export default Transition;
