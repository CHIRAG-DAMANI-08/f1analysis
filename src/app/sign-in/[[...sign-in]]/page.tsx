import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-8">
      <div className="w-full max-w-md">
        <SignIn
          appearance={{
            elements: {
              rootBox: "mx-auto w-full",
              card: "rounded-lg border border-border bg-card p-6 shadow-sm",
              headerTitle: "text-3xl font-semibold tracking-tight text-center",
              headerSubtitle: "text-sm text-muted-foreground text-center",
              socialButtonsBlockButton:
                "bg-gray-800 hover:bg-gray-700 text-white",
              formButtonPrimary: "bg-red-600 hover:bg-red-700 text-white",
              footerActionLink:
                "text-primary font-medium hover:underline transition-all",
              formFieldLabel: "text-sm font-medium",
              formFieldInput:
                "w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
            },
          }}
        />
      </div>
    </div>
  );
}
