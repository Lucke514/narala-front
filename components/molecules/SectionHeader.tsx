interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  titleClassName = "",
  subtitleClassName = "text-gray-500",
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col gap-4 ${centered ? "items-center text-center" : ""}`}
    >
      <h2
        className={`font-serif text-4xl font-semibold text-rose-900 md:text-5xl ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-xl text-lg ${subtitleClassName}`}>{subtitle}</p>
      )}
    </div>
  );
}
