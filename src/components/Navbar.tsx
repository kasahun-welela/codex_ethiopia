import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { FaChevronRight } from "react-icons/fa";
import { useTheme } from "./DarkTheme";
// import logo from "../../public/codexafrica3.png";
import video from "/logo.mp4";
import { Moon, Sun } from "lucide-react";

interface SubMenuItem {
  href: string;
  title: string;
}

const developWebsiteSubMenu: SubMenuItem[] = [
  { href: "/business-website", title: "Business website" },
  { href: "/personal-website", title: "Personal website" },
  { href: "/payment-integration", title: "Payment Integration" },
  { href: "/project-management", title: "Project Management" },
  { href: "/admin-dashboard", title: "Admin Dashboard" },
  { href: "/coming_soon", title: "Ecommerce" },
  { href: "/coming_soon", title: "Blog" },
];

const automationSubMenu: SubMenuItem[] = [
  { href: "/coming_soon", title: "Telegram Bot" },
  { href: "/coming_soon", title: "Zapier" },
  { href: "/coming_soon", title: "Google App Script" },
  { href: "/coming_soon", title: "Make.com" },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  // const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<SubMenuItem[] | null>(
    null
  );
  const { setTheme } = useTheme();
  const theme = localStorage.getItem("vite-ui-theme");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const renderSubMenu = (items: SubMenuItem[]) => (
    <div className="flex-1 overflow-auto py-6">
      <Button
        aria-label="Back"
        className="mb-4 ml-4 mt-4 text-blue-600 hover:text-blue-800 font-semibold"
        onClick={() => setActiveSubMenu(null)}
      >
        ← Back
      </Button>
      <ul className="space-y-2 p-4">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              to={item.href}
              className="flex justify-between items-center text-left w-full p-4 bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg font-medium"
            >
              {item.title}
              <FaChevronRight className="ml-2 h-5 w-5 text-gray-500 dark:text-gray-400" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const getButtonClassNames = (href: string) =>
    cn(
      "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
      location.pathname === href
        ? "bg-gray-100 dark:bg-gray-900 text-primary"
        : ""
    );

  return (
    <header className="flex h-20 w-full shrink-0 items-center justify-between px-4 md:px-6 container">
      <Link to="/" className="flex items-center gap-2 font-semibold">
        {/* <img src={logo} alt="CodeX Africa" width={150} height={150} /> */}
        <video
          autoPlay
          loop
          muted
          src={video}
          width="100" // Adjusted width to better fit within the navbar
          height="100" // Adjusted height to better fit within the navbar
          style={{ alignSelf: "center", maxHeight: "80%" }} // Ensure it aligns centrally and doesn't exceed navbar height
        >
          Your browser does not support the video tag.
        </video>
      </Link>
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-white dark:bg-gray-950">
          <div className="flex h-full max-h-screen flex-col">
            <div className="flex items-center justify-between border-b px-6">
              <video
                autoPlay
                loop
                muted
                src={video}
                width="100"
                height="100"
                style={{ alignSelf: "center", maxHeight: "80%" }}
              >
                Your browser does not support the video tag.
              </video>

              <SheetClose asChild>
                <Button variant="outline" size="icon">
                  <ExitIcon className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </SheetClose>
            </div>
            {activeSubMenu ? (
              renderSubMenu(activeSubMenu)
            ) : (
              <nav className="flex-1 overflow-auto py-6">
                <div className="grid gap-4 px-6">
                  <Button
                    aria-label="Develop Website"
                    className={getButtonClassNames("/develop-website")}
                    onClick={() => setActiveSubMenu(developWebsiteSubMenu)}
                  >
                    <HomeIcon className="h-5 w-5" />
                    Develop Website
                    <FaChevronRight className="ml-auto h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </Button>
                  <Button
                    aria-label="Automation"
                    className={getButtonClassNames("/automation")}
                    onClick={() => setActiveSubMenu(automationSubMenu)}
                  >
                    <UserIcon className="h-5 w-5" />
                    Automation
                    <FaChevronRight className="ml-auto h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </Button>
                  <Button
                    aria-label="Technology"
                    className={getButtonClassNames("/technology")}
                    onClick={() => setActiveSubMenu(automationSubMenu)}
                  >
                    <PackageIcon className="h-5 w-5" />
                    Technology
                    <FaChevronRight className="ml-auto h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </Button>
                  <Link
                    to="/technology"
                    className={getButtonClassNames("/technology")}
                  >
                    <PriceIcon className="h-5 w-5" />
                    Pricing
                  </Link>
                  <Link to="/about" className={getButtonClassNames("/about")}>
                    <AboutIcon className="h-5 w-5" />
                    About Us
                  </Link>
                  <Link
                    to="/contact"
                    className={getButtonClassNames("/contact")}
                  >
                    <MailIcon className="h-5 w-5" />
                    Contact Us
                  </Link>
                  <Link to="/blog" className={getButtonClassNames("/blog")}>
                    <UserIcon className="h-5 w-5" />
                    Blog
                  </Link>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-full"
                    onClick={toggleTheme}
                  >
                    {theme === "light" ? (
                      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    ) : (
                      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    )}
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </div>
              </nav>
            )}
          </div>
        </SheetContent>
      </Sheet>
      <NavigationMenu className="hidden lg:flex container">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Develop Website</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {developWebsiteSubMenu.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
                    {item.title}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Automation</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {automationSubMenu.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
                    {item.title}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/technology">
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  location.pathname === "/technology"
                    ? "bg-gray-100 dark:bg-gray-900 text-primary"
                    : ""
                )}
              >
                Technology
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/pricing">
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  location.pathname === "/pricing"
                    ? "bg-gray-100 dark:bg-gray-900 text-primary"
                    : ""
                )}
              >
                Pricing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/about">
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  location.pathname === "/about"
                    ? "bg-gray-100 dark:bg-gray-900 text-primary"
                    : ""
                )}
              >
                About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/contact">
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  location.pathname === "/contact"
                    ? "bg-gray-100 dark:bg-gray-900 text-primary"
                    : ""
                )}
              >
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/blog">
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  location.pathname === "/blog"
                    ? "bg-gray-100 dark:bg-gray-900 text-primary"
                    : ""
                )}
              >
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button
              variant="outline"
              size="icon"
              className="ml-2"
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              ) : (
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, href = "#", ...props }, ref) => {
  const location = useLocation();
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          to={href} // Ensure href is always a string
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            location.pathname === href
              ? "bg-gray-100 dark:bg-gray-900 text-primary"
              : "",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PackageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function PriceIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  );
}

function AboutIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="8" />
    </svg>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function ExitIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default Navbar;
