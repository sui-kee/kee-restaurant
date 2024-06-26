/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Ak2ySqaThv6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import { Button } from "@/components/ui/button";
import OpenOrClosed from "../isOpen";
import { Suspense } from "react";

export function Navigation() {
  return (
    <>
      <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-white sticky top-0 left-0 right-0 z-50 shadow-md">
        <Link className="flex items-center gap-2" href="/">
          <svg
            width="100"
            height="50"
            viewBox="0 0 200 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10,10 L10,90 L30,90 L30,60 L60,90 L80,90 L50,60 L80,30 L60,30 L30,60 L30,10 Z"
              fill="black"
            />

            <path
              d="M100,10 L100,90 L160,90 L160,70 L120,70 L120,55 L160,55 L160,35 L120,35 L120,20 L160,20 L160,10 Z"
              fill="black"
            />

            <path
              d="M170,10 L170,90 L230,90 L230,70 L190,70 L190,55 L230,55 L230,35 L190,35 L190,20 L230,20 L230,10 Z"
              fill="black"
            />
          </svg>
          <Suspense fallback={<div>loading</div>}>
            <OpenOrClosed />
          </Suspense>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700 hover:text-gray-900">
          <Link
            className="py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
            href="/about-us"
          >
            About us
          </Link>
          <Link
            className="py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
            href="/menu"
          >
            Menu
          </Link>
          <Link
            className="py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
            href="/reservation"
          >
            Reservation
          </Link>
        </nav>
        <div className="flex md:hidden items-center gap-4">
          <Button size="icon" variant="ghost">
            <MenuIcon className="h-6 w-6 text-gray-900" />
            <span className="sr-only">Open menu</span>
          </Button>
          <Button size="icon" variant="ghost">
            <SearchIcon className="h-6 w-6 text-gray-900" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </header>
      <div className="md:hidden">
        <nav className="grid gap-2 p-4 bg-white">
          <Link
            className="py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
            href="/about-us"
          >
            About us
          </Link>
          <Link
            className="py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
            href="/menu"
          >
            Menu
          </Link>
          <Link
            className="py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
            href="/reservation"
          >
            Reservation
          </Link>
        </nav>
      </div>
    </>
  );
}

function MenuIcon(props: any) {
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

function SearchIcon(props: any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function TableIcon(props: any) {
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
      <path d="M12 3v18" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
    </svg>
  );
}
