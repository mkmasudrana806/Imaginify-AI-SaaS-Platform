"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/app/constants";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      {/* logo  */}
      <Link href={"/"} className="flex items-center gap-2 md:py-2">
        <Image
          src={"/assets/images/logo-text.svg"}
          alt="logo"
          width={180}
          height={28}
        />
      </Link>

      {/* user profile  */}
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <Sheet>
          <SheetTrigger>
            <Image
              src={"/assets/icons/menu.svg"}
              alt="menu"
              width={32}
              height={32}
              className="cursor-pointer"
            />
          </SheetTrigger>
          <SheetContent className="sheet-content sm:w-64">
            <>
              <Image
                src={"/assets/images/logo-text.svg"}
                alt="logo"
                width={152}
                height={23}
              />
              <ul className="header-nav_elements">
                {navLinks.map((link) => {
                  const isActive = link.route === pathname;
                  return (
                    <li
                      className={`${
                        isActive && "gradient-text"
                      } p-18 flex whitespace-nowrap text-dark-700`}
                      key={link.route}
                    >
                      <Link href={link.route} className="sidebar-link">
                        <Image
                          src={link.icon}
                          alt="logo"
                          width={24}
                          height={24}
                        />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </>
          </SheetContent>
        </Sheet>
        {/* when user sign out show login process */}
        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href={"/sign-in"}>Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
