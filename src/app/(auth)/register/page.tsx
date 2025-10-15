import { RegisterForm } from "@/components/pages/auth/RegisterForm";

export default function Page() {
  return (
    <div className="min-h-[calc(100vh-3rem)] sm:min-h-[calc(100vh-3.5rem)] md:min-h-[calc(100vh-4.5rem)] bg-muted flex flex-col items-center justify-center gap-6 p-6 md:p-8">
      <div className="flex w-full max-w-lg flex-col gap-6">
        <RegisterForm />
      </div>
    </div>
  );
}
