import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 text-xs tracking-[0.2em] text-gold uppercase font-medium mb-4",
        className
      )}
    >
      <span className="w-8 h-px bg-gold/50" />
      {children}
      <span className="w-8 h-px bg-gold/50" />
    </div>
  );
}
