"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronRight } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCompanySubMenu, setMobileCompanySubMenu] = useState(false);
  const [mobileExploreSchoolsSubMenu, setMobileExploreSchoolsSubMenu] = useState(false);
  const [mobileInstitutionSubMenu, setMobileInstitutionSubMenu] = useState(false);
  const [mobileStudentSubMenu, setMobileStudentSubMenu] = useState(false);

  const companyOptions = [
    { title: "Post a Job", href: "/post-job" },
    { title: "Post a Project", href: "/post-project" },
    { title: "Explore Schools", href: "#", hasSubmenu: true },
    { title: "Compare Institutions", href: "/compare-institutions" },
    { title: "Find right talent for me", href: "/find-talent" },
  ];

  const exploreSchoolsOptions = [
    { title: "Explore B Schools", href: "/explore-b-schools" },
    { title: "Explore T Schools", href: "/explore-t-schools" },
    { title: "Explore Universities", href: "/explore-universities" },
  ];

  const institutionOptions = [
    { title: "Partner with us", href: "/institution-partner" },
    { title: "Campus ambassador", href: "/campus-ambassador" },
    { title: "Placement support", href: "/placement-support" },
    { title: "Hire our students", href: "/hire-students" },
  ];

  const studentOptions = [
    { title: "Find Courses", href: "/courses" },
    { title: "Find Jobs & Internships", href: "/jobs" },
    { title: "Find Projects", href: "/projects" },
    { title: "Find Mentors", href: "/mentors" },
    { title: "Build Resume", href: "/resume" },
    { title: "Industry Updates", href: "/updates" },
  ];

  return (
    <header className="w-full border-b fixed top-0 left-0 bg-white z-50">
      <div className="flex items-center">
        {/* Logo Section */}
        <div className="bg-black text-white p-4 flex items-center h-[80px]">
          <div className="text-xs font-bold tracking-wide leading-tight">
            <div>THE</div>
            <div>CAREER</div>
            <div>COMPANY</div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 flex justify-end pr-6">
          <ul className="hidden md:flex space-x-8 items-center">
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[15px] font-medium bg-transparent hover:bg-transparent hover:opacity-70 transition-opacity">
                      For Companies
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[240px] gap-2 p-4">
                        {companyOptions.map((option) => (
                          <li key={option.title} className="relative">
                            {option.hasSubmenu ? (
                              <div className="block select-none space-y-1 rounded-md p-3 leading-none hover:bg-accent group relative">
                                <div className="flex justify-between items-center text-sm font-medium">
                                  {option.title}
                                  <ChevronRight className="h-4 w-4 ml-1" />
                                </div>
                                
                                {/* Submenu container that appears on hover */}
                                <div className="invisible group-hover:visible absolute left-0 z-20 top-0 ml-1 w-[220px] rounded-md border bg-white shadow-md">
                                  <ul className="grid gap-2 p-4">
                                    {exploreSchoolsOptions.map((subOption) => (
                                      <li key={subOption.title}>
                                        <Link
                                          href={subOption.href}
                                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                        >
                                          <div className="text-sm font-medium leading-none">
                                            {subOption.title}
                                          </div>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            ) : (
                              <NavigationMenuLink asChild>
                                <Link
                                  href={option.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {option.title}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            )}
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <Link
                href="/institution-partner"
                className="text-[15px] font-medium hover:opacity-70 transition-opacity"
              >
                For Institutions
              </Link>
            </li>
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[15px] font-medium bg-transparent hover:bg-transparent hover:opacity-70 transition-opacity">
                      For Students & Professionals
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[240px] gap-2 p-4">
                        {studentOptions.map((option) => (
                          <li key={option.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={option.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {option.title}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <Link
                href="#"
                className="text-[15px] font-medium bg-[#FF9E44] hover:bg-[#ff9431] text-white px-6 py-2 rounded-full transition-colors"
              >
                Login
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={cn("md:hidden overflow-hidden transition-all duration-300 ease-in-out", mobileMenuOpen ? "max-h-[800px]" : "max-h-0")}>
        <ul className="flex flex-col p-4 space-y-4">
          <li>
            <div className="py-2">
              <button
                className="text-[15px] font-medium flex items-center w-full text-left hover:opacity-70 transition-opacity"
                onClick={() => setMobileCompanySubMenu(!mobileCompanySubMenu)}
              >
                For Companies
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`ml-1 transition-transform duration-200 ${
                    mobileCompanySubMenu ? "rotate-180" : ""
                  }`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div
                className={`pl-4 mt-2 space-y-2 ${
                  mobileCompanySubMenu ? "block" : "hidden"
                }`}
              >
                {companyOptions.map((option) =>
                  option.hasSubmenu ? (
                    <div key={option.title}>
                      <button
                        className="text-[14px] flex items-center w-full text-left py-1 hover:opacity-70 transition-opacity"
                        onClick={() =>
                          setMobileExploreSchoolsSubMenu(
                            !mobileExploreSchoolsSubMenu
                          )
                        }
                      >
                        {option.title}
                        <ChevronRight
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                            mobileExploreSchoolsSubMenu ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`pl-4 mt-1 space-y-2 ${
                          mobileExploreSchoolsSubMenu ? "block" : "hidden"
                        }`}
                      >
                        {exploreSchoolsOptions.map((subOption) => (
                          <Link
                            key={subOption.title}
                            href={subOption.href}
                            className="text-[13px] block py-1 hover:opacity-70 transition-opacity"
                          >
                            {subOption.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={option.title}
                      href={option.href}
                      className="text-[14px] block py-1 hover:opacity-70 transition-opacity"
                    >
                      {option.title}
                    </Link>
                  )
                )}
              </div>
            </div>
          </li>
          <li>
            <div className="py-2">
              <button
                className="text-[15px] font-medium flex items-center w-full text-left hover:opacity-70 transition-opacity"
                onClick={() =>
                  setMobileInstitutionSubMenu(!mobileInstitutionSubMenu)
                }
              >
                For Institutions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`ml-1 transition-transform duration-200 ${
                    mobileInstitutionSubMenu ? "rotate-180" : ""
                  }`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div
                className={`pl-4 mt-2 space-y-2 ${
                  mobileInstitutionSubMenu ? "block" : "hidden"
                }`}
              >
                {institutionOptions.map((option) => (
                  <Link
                    key={option.title}
                    href={option.href}
                    className="text-[14px] block py-1 hover:opacity-70 transition-opacity"
                  >
                    {option.title}
                  </Link>
                ))}
              </div>
            </div>
          </li>
          <li>
            <div className="py-2">
              <button
                className="text-[15px] font-medium flex items-center w-full text-left hover:opacity-70 transition-opacity"
                onClick={() => setMobileStudentSubMenu(!mobileStudentSubMenu)}
              >
                For Students & Professionals
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`ml-1 transition-transform duration-200 ${mobileStudentSubMenu ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div className={`pl-4 mt-2 space-y-2 ${mobileStudentSubMenu ? "block" : "hidden"}`}>
                {studentOptions.map((option) => (
                  <Link
                    key={option.title}
                    href={option.href}
                    className="text-[14px] block py-1 hover:opacity-70 transition-opacity"
                  >
                    {option.title}
                  </Link>
                ))}
              </div>
            </div>
          </li>
          <li>
            <Link
              href="#"
              className="text-[15px] font-medium block py-2 bg-[#FF9E44] hover:bg-[#ff9431] text-white px-6 rounded-full text-center transition-colors"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}