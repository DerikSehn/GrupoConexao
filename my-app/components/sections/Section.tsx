import { cn } from "@/lib/utils";

export default function Section({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <section className={cn("py-32 bg-black relative", className)}>
      <div className="container mx-auto relative z-40 px-4">{children}</div>
    </section>
  );
}