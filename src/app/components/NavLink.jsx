import Link from "next/link";
import Image from "next/image";

const NavLink = ({ href, title, icon }) => {
  return (
    <Link href={href} className="flex items-center space-x-2 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white nav_text">
      {icon && (
        <Image src={icon} alt={title} width={20} height={20} className="inline-block" />
      )}
      <span>{title}</span>
    </Link>
  );
};

export default NavLink;
