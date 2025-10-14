"use client";

import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { NavLinkType } from "@/types/nav-link-type";
import { Menu } from "lucide-react";
import { AppLogo } from "@/components/app-logo";
import { usePathname } from "next/navigation";
import web from "@/routes/web";
import useAuthStore from "@/store/useAuthStore";
import Link from "next/link";
import { UserDropdown } from "@/components/user-dropdown";

const mainNavItems: NavLinkType[] = [
  {
    title: "Home",
    href: web.home,
  },
];

const rightNavItems: NavLinkType[] = [
  {
    title: "Sign in",
    href: web.login,
  },
  {
    title: "Sign up",
    href: web.register,
  },
];

const activeItemStyles = "text-primary dark:text-primary-foreground";

export function Navbar() {
  const pathname = usePathname();

  const { user } = useAuthStore();

  return (
    <>
      <div className="sticky top-0 bg-background border-b border-sidebar-border/80 z-50">
        <section className="mx-auto flex h-12 sm:h-14 md:h-16 items-center container px-2 sm:px-4">
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mr-1 sm:mr-2 h-8 w-8 sm:h-9 sm:w-9"
                >
                  <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="flex h-full w-72 sm:w-80 flex-col items-stretch justify-between bg-sidebar"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetHeader className="flex justify-start items-center text-left py-2">
                  <AppLogo />
                </SheetHeader>
                <div className="flex h-full flex-1 flex-col space-y-4 p-2 sm:p-4">
                  <div className="flex h-full flex-col text-sm gap-4 sm:gap-6">
                    <div className="flex flex-col space-y-2 sm:space-y-3">
                      {mainNavItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          prefetch
                          className={cn(
                            "flex items-center space-x-2 font-medium transition-colors hover:text-primary py-2 px-3 rounded-md",
                            pathname === item.href &&
                              "text-primary bg-primary/10"
                          )}
                        >
                          {item.icon && (
                            <Icon
                              iconNode={item.icon}
                              className="h-4 w-4 sm:h-5 sm:w-5"
                            />
                          )}
                          <span className="text-sm sm:text-base">
                            {item.title}
                          </span>
                          {pathname === item.href && (
                            <div className="ml-auto h-2 w-2 rounded-full bg-primary"></div>
                          )}
                        </Link>
                      ))}
                    </div>

                    <div className="flex flex-col space-y-2 sm:space-y-3 pt-2 border-t">
                      {user ? (
                        <div className="px-3 py-2">
                          <UserDropdown />
                        </div>
                      ) : (
                        rightNavItems.map((item) => (
                          <Button
                            key={item.title}
                            className="rounded-full w-full justify-start"
                            asChild
                          >
                            <Link href={item.href}>
                              <span className="text-sm sm:text-base">
                                {item.title}
                              </span>
                            </Link>
                          </Button>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <Link
            href="/"
            prefetch
            className="flex items-center space-x-1 sm:space-x-2"
          >
            <AppLogo />
          </Link>

          {/* Desktop Navigation */}
          <div className="ml-2 sm:ml-4 md:ml-6 hidden lg:flex h-full items-center space-x-1 xl:space-x-2">
            <NavigationMenu className="flex h-full items-stretch">
              <NavigationMenuList className="flex h-full items-stretch space-x-1 xl:space-x-2">
                {mainNavItems.map((item, index) => (
                  <NavigationMenuItem
                    key={index}
                    className="relative flex h-full items-center"
                  >
                    <Link
                      href={item.href}
                      prefetch
                      className={cn(
                        navigationMenuTriggerStyle(),
                        pathname === item.href && activeItemStyles,
                        "h-8 xl:h-9 cursor-pointer px-2 xl:px-3 text-xs xl:text-sm whitespace-nowrap"
                      )}
                    >
                      {item.icon && (
                        <Icon
                          iconNode={item.icon}
                          className="mr-1 xl:mr-2 h-3 w-3 xl:h-4 xl:w-4"
                        />
                      )}
                      <span className="hidden xl:inline">{item.title}</span>
                      <span className="xl:hidden">
                        {item.title.length > 8
                          ? item.title.substring(0, 6) + "..."
                          : item.title}
                      </span>
                    </Link>
                    {pathname === item.href && (
                      <div className="absolute bottom-0 left-0 h-0.5 w-full translate-y-px bg-primary"></div>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="ml-auto flex items-center space-x-1 xl:space-x-2">
            <div className="relative flex items-center space-x-1">
              <div className="hidden lg:flex gap-2">
                {user ? (
                  <UserDropdown />
                ) : (
                  rightNavItems.map((item, index) => (
                    <TooltipProvider key={item.title} delayDuration={0}>
                      <Tooltip>
                        <TooltipTrigger>
                          <Button
                            variant={index === 0 ? "default" : "outline"}
                            asChild
                          >
                            <Link href={item.href}>{item.title}</Link>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{item.title}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
