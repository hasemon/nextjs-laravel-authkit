import { RegisterForm } from "@/components/pages/auth/RegisterForm";
import web from "@/routes/web";
import { GalleryVerticalEnd } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
     <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-lg flex-col gap-6">
        <Link href={web.Home} className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          {process.env.NEXT_PUBLIC_APP_NAME || "Siegecode Inc."}
        </Link>
        <RegisterForm />
      </div>
    </div>
  );
}
