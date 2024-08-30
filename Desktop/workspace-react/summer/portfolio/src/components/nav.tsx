import Link from "next/link";
import { FC } from "react";

const Nav: FC = () => {
  return (
    <nav>
      <ul className="flex flex-row gap-x-8">
        <li>
          <Link href={"/"} className="hover:text-red-500">
            Home
          </Link>
        </li>
        <li>
          <Link href={"#one"} className="hover:text-red-500">
            portfolio
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
