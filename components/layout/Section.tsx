import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "article";
}

/**
 * Standard section shell with consistent vertical padding and max-width.
 * All page sections should be wrapped in this component.
 */
export default function Section({
  children,
  className,
  id,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "w-full px-4 sm:px-6 lg:px-8",
        "py-16 sm:py-20 lg:py-24",
        className
      )}
    >
      <div className="max-w-6xl mx-auto w-full">{children}</div>
    </Tag>
  );
}
