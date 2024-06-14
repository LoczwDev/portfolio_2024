// icons
import Link from "next/link";
import { useRouter } from "next/router";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiDocumentMagnifyingGlass,
  HiCamera
} from "react-icons/hi2";
import { ButtonTheme } from "./ButtonTheme";

// nav data
export const navData = [
  { name: "En", path: "/", icon: <HiHome /> },
  {
    name: "Vi",
    path: "/education",
    icon: <HiDocumentMagnifyingGlass />,
  },

];

const Language = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className="flex flex-colitems-center gap-y-4 fixed h-max bottom-0 mt-auto xl:left-[2%] z-[1000] top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] bg-black/40 dark:bg-white/10 xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full xl:my-auto">
        {navData?.map((link, index) => (
          <Link
            className={`${
              link.path === pathname && "text-accent"
            } relative flex items-center group hover:text-accent transition-all duration-300`}
            key={index}
            href={link.path}
          >

            <div>{link.name}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Language;
