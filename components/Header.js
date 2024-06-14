import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <motion.div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-y-6 py-8">
          <Link href={"/"} className="flex items-center">
            <Image
              src={"/sota.png"}
              width={180}
              height={48}
              alt=""
              className="!w-1/2"
              priority={true}
            />
            <span className="lg:ml-7 ml-3">-</span>
            <Image
              src={"/logo.png"}
              width={220}
              height={48}
              alt=""
              priority={true}
              className="!w-1/2"
            />
          </Link>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
