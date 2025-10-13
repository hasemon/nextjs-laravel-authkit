"use client";

import { Button } from "@/components/ui/button";
import useAuthStore from "@/store/useAuthStore";
import Link from "next/link";

export default function Home() {
  const { user, clearAuth } = useAuthStore();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {user ? (
            <Link
              className="bg-blue-500 text-white rounded-full border border-solid border-blue-600 dark:border-blue-400 transition-colors flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-700 hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
              href="/"
            >
              Home
            </Link>
          ) : (
            <>
              <Link
                className="bg-blue-500 text-white rounded-full border border-solid border-blue-600 dark:border-blue-400 transition-colors flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-700 hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
                href="/"
              >
                Home
              </Link>
              <Link
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto md:w-[158px]"
                href="/register"
              >
                Register
              </Link>
              <Link
                className="rounded-full border border-solid border-green-500 dark:border-green-400 bg-green-500 text-white transition-colors flex items-center justify-center hover:bg-green-600 dark:hover:bg-green-700 hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
                href="/login"
              >
                Login
              </Link>
            </>
          )}
          {user && (
            <Button
              className="rounded-full border border-solid border-green-500 dark:border-green-400 bg-green-500 text-white transition-colors flex items-center justify-center hover:bg-green-600 dark:hover:bg-green-700 hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
              onClick={() => clearAuth()}
            >
              Logout
            </Button>
          )}
        </div>
        {/* User profile only if user exists, show name and email */}
        {user && (
          <div className="mt-8 flex flex-col items-center border rounded-lg px-6 py-4 shadow bg-white dark:bg-neutral-900 text-center">
            {user.name && (
              <div className="text-lg font-semibold mb-2">{user.name}</div>
            )}
            {user.email && (
              <div className="text-gray-600 dark:text-gray-300">
                {user.email}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
