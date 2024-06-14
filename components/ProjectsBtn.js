import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={"/work"}
        className="relative w-[185px] h-auto  flex justify-center items-center bg-cover bg-no-repeat group"
      >
        <button className="bg-accent hover:bg-transparent btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:text-accent group">
          <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 dark:text-white text-black">
            My Work
          </span>
          <HiArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
        </button>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
