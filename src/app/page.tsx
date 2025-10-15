import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";

export default function Home() {
  return (
    <section className={"container space-y-4 sm:space-y-6 lg:space-y-10"}>
      <div className="min-h-[calc(100vh-3rem)] sm:min-h-[calc(100vh-3.5rem)] md:min-h-[calc(100vh-4.5rem)] flex flex-col items-center justify-center">
        <h1 className="text-base font-semibold flex items-center uppercase">
          Nextjs Laravel auth kit by
          <Button variant={"link"}>
            <ArrowUpRightIcon />
            <a
              href="https://hasemon.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              @hasemon
            </a>
          </Button>
        </h1>
      </div>
    </section>
  );
}
