import Link from "next/link";

import {
  RiBehanceLine,
  RiDingdingLine,
  RiFacebookLine,
  RiInstagramLine,
  RiPinterestLine,
  RiYoutubeLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg z-[100]">
      <Link
        href={""}
        className="hover:text-white dark:hover:text-black text-black dark:text-white transition-all duration-300 p-2 border-2 border-accent hover:bg-accent/70 rounded-full"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href={""}
        className="hover:text-white dark:hover:text-black text-black dark:text-white transition-all duration-300 p-2 border-2 border-accent hover:bg-accent/70 rounded-full"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={""}
        className="hover:text-white dark:hover:text-black text-black dark:text-white transition-all duration-300 p-2 border-2 border-accent hover:bg-accent/70 rounded-full"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={""}
        className="hover:text-white dark:hover:text-black text-black dark:text-white transition-all duration-300 p-2 border-2 border-accent hover:bg-accent/70 rounded-full"
      >
        <RiDingdingLine />
      </Link>
      <Link
        href={""}
        className="hover:text-white dark:hover:text-black text-black dark:text-white transition-all duration-300 p-2 border-2 border-accent hover:bg-accent/70 rounded-full"
      >
        <RiBehanceLine />
      </Link>
      <Link
        href={""}
        className="hover:text-white dark:hover:text-black text-black dark:text-white transition-all duration-300 p-2 border-2 border-accent hover:bg-accent/70 rounded-full"
      >
        <RiPinterestLine />
      </Link>
    </div>
  );
};

export default Socials;
