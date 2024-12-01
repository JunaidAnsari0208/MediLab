import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}
export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-bold text-emerald-500", font.className)}>
        Authorization
      </h1>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};
